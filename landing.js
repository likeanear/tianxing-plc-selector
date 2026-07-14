(() => {
  const canvas = document.querySelector("#networkCanvas");
  const context = canvas?.getContext("2d");
  if (!canvas || !context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const palette = ["#76d0c0", "#7eb4d1", "#abd77d", "#d4b86f"];
  const labels = ["PLC", "I/O", "HMI", "AI", "NET", "DRV"];
  const pointer = { x: 0, y: 0, active: false };
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let nodes = [];
  let links = [];
  let pulses = [];
  let animationFrame = 0;

  function createRandom(seedValue) {
    let seed = seedValue >>> 0;
    return () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
  }

  function buildNetwork() {
    const random = createRandom(Math.round(width * 13 + height * 7));
    const columnCount = Math.max(6, Math.ceil(width / 170));
    const rowCount = Math.max(5, Math.ceil(height / 135));
    const startX = width < 720 ? width * 0.08 : width * 0.3;
    const sceneWidth = width - startX + 90;

    nodes = [];
    for (let row = 0; row < rowCount; row += 1) {
      for (let column = 0; column < columnCount; column += 1) {
        const x = startX + (column / Math.max(1, columnCount - 1)) * sceneWidth + (random() - 0.5) * 38;
        const y = 56 + (row / Math.max(1, rowCount - 1)) * (height - 112) + (random() - 0.5) * 30;
        const index = row * columnCount + column;
        nodes.push({
          x,
          y,
          depth: 0.35 + random() * 0.65,
          major: index % 9 === 0 || (row === Math.floor(rowCount / 2) && column === columnCount - 2),
          color: palette[Math.floor(random() * palette.length)],
          label: labels[Math.floor(random() * labels.length)],
        });
      }
    }

    links = [];
    for (let row = 0; row < rowCount; row += 1) {
      for (let column = 0; column < columnCount; column += 1) {
        const index = row * columnCount + column;
        if (column < columnCount - 1) links.push({ from: index, to: index + 1, alpha: 0.18 + random() * 0.18 });
        if (row < rowCount - 1 && random() > 0.28) links.push({ from: index, to: index + columnCount, alpha: 0.12 + random() * 0.14 });
        if (row < rowCount - 1 && column < columnCount - 1 && random() > 0.73) {
          links.push({ from: index, to: index + columnCount + 1, alpha: 0.1 + random() * 0.12 });
        }
      }
    }

    const pulseCount = Math.max(8, Math.min(22, Math.round(width / 95)));
    pulses = Array.from({ length: pulseCount }, (_, index) => ({
      linkIndex: Math.floor(random() * links.length),
      phase: random(),
      speed: 0.000035 + random() * 0.000045,
      size: index % 4 === 0 ? 5 : 3,
      color: palette[index % palette.length],
    }));
  }

  function getOffset(node) {
    if (!pointer.active || reducedMotion.matches) return { x: 0, y: 0 };
    return {
      x: pointer.x * 11 * node.depth,
      y: pointer.y * 7 * node.depth,
    };
  }

  function drawDinRail(x, y, railWidth) {
    context.fillStyle = "rgba(125, 151, 154, .34)";
    context.fillRect(x, y, railWidth, 14);
    context.fillStyle = "rgba(8, 20, 24, .7)";
    context.fillRect(x, y + 5, railWidth, 4);
    for (let hole = x + 12; hole < x + railWidth - 8; hole += 24) {
      context.fillStyle = "rgba(184, 203, 203, .26)";
      context.fillRect(hole, y + 2, 8, 2);
      context.fillRect(hole, y + 10, 8, 2);
    }
  }

  function drawPlcModule(x, y, moduleWidth, moduleHeight, module, index, time) {
    const accent = module.color || palette[index % palette.length];
    const ledOn = reducedMotion.matches || Math.sin(time * 0.004 + index * 1.35) > -0.25;
    const terminalCount = Math.max(3, Math.floor((moduleWidth - 12) / 9));

    context.fillStyle = index % 2 === 0 ? "rgba(28, 53, 59, .96)" : "rgba(36, 50, 62, .96)";
    context.fillRect(x, y, moduleWidth, moduleHeight);
    context.strokeStyle = "rgba(143, 190, 188, .34)";
    context.strokeRect(x, y, moduleWidth, moduleHeight);
    context.fillStyle = accent;
    context.fillRect(x + 1, y + 1, 3, moduleHeight - 2);

    context.fillStyle = "rgba(95, 137, 139, .2)";
    context.fillRect(x + 5, y + 6, moduleWidth - 10, 24);
    context.fillStyle = "rgba(219, 233, 231, .76)";
    context.font = `${moduleWidth < 48 ? 6 : 8}px Consolas, monospace`;
    context.fillText(module.code, x + 9, y + 17);
    if (moduleWidth >= 48) {
      context.fillStyle = "rgba(130, 157, 160, .72)";
      context.fillText(module.label, x + 9, y + 26);
    }

    const ledX = x + moduleWidth - 10;
    [0, 1, 2].forEach((led) => {
      const on = led === 0 ? ledOn : led === 1 ? index % 3 !== 1 : Math.sin(time * 0.002 + index + led) > 0.72;
      context.fillStyle = on ? (led === 2 ? "#d4b86f" : accent) : "rgba(107, 132, 135, .28)";
      context.fillRect(ledX, y + 9 + led * 8, 4, 4);
    });

    const channelRows = module.code === "CPU" ? 3 : 5;
    for (let row = 0; row < channelRows; row += 1) {
      const channelY = y + 42 + row * Math.max(13, (moduleHeight - 92) / channelRows);
      context.fillStyle = "rgba(5, 17, 21, .36)";
      context.fillRect(x + 8, channelY, moduleWidth - 16, 7);
      context.fillStyle = row === 0 && ledOn ? accent : "rgba(128, 158, 159, .3)";
      context.fillRect(x + 10, channelY + 2, Math.max(4, (moduleWidth - 22) * (row === 0 ? 0.72 : 0.35)), 3);
    }

    context.fillStyle = "rgba(9, 20, 25, .72)";
    context.fillRect(x + 5, y + moduleHeight - 29, moduleWidth - 10, 23);
    for (let terminal = 0; terminal < terminalCount; terminal += 1) {
      const terminalX = x + 8 + terminal * ((moduleWidth - 16) / terminalCount);
      context.fillStyle = terminal % 3 === 0 ? accent : "rgba(170, 189, 187, .38)";
      context.fillRect(terminalX, y + moduleHeight - 22, 4, 10);
    }
  }

  function drawPlcRack(x, y, rackWidth, rackHeight, modules, time, rackIndex) {
    context.fillStyle = "rgba(9, 24, 29, .78)";
    context.fillRect(x - 12, y - 28, rackWidth + 24, rackHeight + 42);
    context.strokeStyle = "rgba(118, 171, 169, .24)";
    context.strokeRect(x - 12, y - 28, rackWidth + 24, rackHeight + 42);
    context.fillStyle = "rgba(185, 213, 210, .62)";
    context.font = "700 8px Consolas, monospace";
    context.fillText(`PLC RACK ${String(rackIndex + 1).padStart(2, "0")}`, x, y - 12);
    context.fillStyle = "rgba(117, 170, 167, .56)";
    context.fillText(rackIndex === 0 ? "LOCAL BUS / RUN" : "REMOTE I/O / ONLINE", x + rackWidth - 108, y - 12);

    drawDinRail(x - 4, y + rackHeight * 0.48, rackWidth + 8);
    const gap = rackWidth < 360 ? 3 : 5;
    const weights = modules.map((module) => module.weight || 1);
    const totalWeight = weights.reduce((sum, value) => sum + value, 0);
    const usableWidth = rackWidth - gap * (modules.length - 1);
    let moduleX = x;
    modules.forEach((module, index) => {
      const moduleWidth = usableWidth * (weights[index] / totalWeight);
      drawPlcModule(moduleX, y, moduleWidth, rackHeight, module, index + rackIndex * 3, time);
      moduleX += moduleWidth + gap;
    });

    const busY = y + rackHeight + 7;
    context.fillStyle = "rgba(96, 142, 143, .34)";
    context.fillRect(x, busY, rackWidth, 2);
    const pulseRange = Math.max(1, rackWidth - 12);
    [0, 0.42, 0.77].forEach((phase, index) => {
      const progress = reducedMotion.matches ? phase : (phase + time * (0.00007 + index * 0.000015)) % 1;
      context.fillStyle = palette[(index + rackIndex) % palette.length];
      context.fillRect(x + 6 + pulseRange * progress, busY - 2, index === 0 ? 7 : 4, 6);
    });
  }

  function drawIndustrialBackdrop(time) {
    const mobile = width < 720;
    const sceneX = mobile ? width * 0.34 : width * 0.49;
    const sceneWidth = width - sceneX - (mobile ? 14 : 42);
    const rackTop = Math.max(mobile ? 102 : 132, height * 0.17);
    const rackHeight = Math.max(mobile ? 168 : 205, Math.min(mobile ? 190 : 250, height * 0.25));
    const secondRackTop = rackTop + rackHeight + (mobile ? 78 : 108);
    const secondRackHeight = Math.max(150, Math.min(220, height * 0.22));

    context.fillStyle = "#12262c";
    context.fillRect(width * 0.44, 82, width * 0.56, height - 82);
    context.fillStyle = "rgba(39, 52, 68, .58)";
    context.fillRect(width * 0.7, 82, width * 0.3, height - 82);
    context.fillStyle = "rgba(24, 70, 71, .25)";
    context.fillRect(width * 0.5, height * 0.58, width * 0.5, height * 0.24);

    context.fillStyle = "rgba(12, 31, 37, .84)";
    context.fillRect(sceneX - 28, rackTop - 62, sceneWidth + 56, Math.min(height - rackTop + 26, secondRackTop + secondRackHeight - rackTop + 94));
    context.strokeStyle = "rgba(124, 178, 176, .22)";
    context.strokeRect(sceneX - 28, rackTop - 62, sceneWidth + 56, Math.min(height - rackTop + 26, secondRackTop + secondRackHeight - rackTop + 94));

    context.fillStyle = "rgba(201, 222, 219, .7)";
    context.font = `700 ${mobile ? 8 : 10}px Consolas, monospace`;
    context.fillText("TX AUTOMATION CONTROL", sceneX - 10, rackTop - 40);
    context.fillStyle = "rgba(117, 170, 167, .6)";
    context.fillText(`CYCLE ${String(Math.floor(time / 100) % 1000).padStart(3, "0")} / BUS ONLINE`, sceneX + sceneWidth - (mobile ? 118 : 168), rackTop - 40);

    drawPlcRack(sceneX, rackTop, sceneWidth, rackHeight, [
      { code: "CPU", label: "RUN", weight: 1.35, color: palette[0] },
      { code: "PN", label: "NET", weight: 1.05, color: palette[1] },
      { code: "DI16", label: "24V", color: palette[2] },
      { code: "DO16", label: "24V", color: palette[3] },
      { code: "AI08", label: "4-20", color: palette[0] },
      { code: "AO04", label: "4-20", color: palette[1] },
      { code: "PWR", label: "DC24", weight: 0.82, color: palette[2] },
    ], time, 0);

    if (secondRackTop + secondRackHeight < height - 36) {
      drawPlcRack(sceneX + sceneWidth * 0.05, secondRackTop, sceneWidth * 0.9, secondRackHeight, [
        { code: "BUS", label: "PN", weight: 1.2, color: palette[1] },
        { code: "DI32", label: "INPUT", color: palette[0] },
        { code: "DO16", label: "OUTPUT", color: palette[3] },
        { code: "RTD4", label: "PT100", color: palette[2] },
        { code: "TC4", label: "TYPE K", color: palette[3] },
        { code: "COM2", label: "485", color: palette[1] },
      ], time, 1);

      for (let wire = 0; wire < 9; wire += 1) {
        const wireX = sceneX + sceneWidth * (0.1 + wire * 0.095);
        context.beginPath();
        context.moveTo(wireX, secondRackTop + secondRackHeight + 17);
        context.lineTo(wireX + (wire % 2 ? 18 : -14), height - 26);
        context.strokeStyle = `rgba(126, 183, 177, ${0.1 + (wire % 3) * 0.035})`;
        context.stroke();
      }
    }
  }

  function drawScene(time = 0) {
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#101b20";
    context.fillRect(0, 0, width, height);
    drawIndustrialBackdrop(time);

    context.lineWidth = 1;
    links.forEach((link) => {
      const from = nodes[link.from];
      const to = nodes[link.to];
      const fromOffset = getOffset(from);
      const toOffset = getOffset(to);
      context.beginPath();
      context.moveTo(from.x + fromOffset.x, from.y + fromOffset.y);
      context.lineTo(to.x + toOffset.x, to.y + toOffset.y);
      context.strokeStyle = `rgba(126, 196, 190, ${Math.min(.5, link.alpha + .09)})`;
      context.stroke();
    });

    nodes.forEach((node) => {
      const offset = getOffset(node);
      const x = node.x + offset.x;
      const y = node.y + offset.y;
      const size = node.major ? 8 : 4;

      context.fillStyle = node.major ? node.color : "rgba(156, 207, 201, .62)";
      context.fillRect(x - size / 2, y - size / 2, size, size);
      if (!node.major) return;

      context.strokeStyle = "rgba(199, 226, 222, .28)";
      context.strokeRect(x - 15, y - 15, 30, 30);
      context.fillStyle = "rgba(177, 205, 201, .68)";
      context.font = "700 9px Consolas, monospace";
      context.fillText(node.label, x + 20, y + 3);
    });

    pulses.forEach((pulse) => {
      const link = links[pulse.linkIndex];
      if (!link) return;
      const from = nodes[link.from];
      const to = nodes[link.to];
      const progress = (pulse.phase + time * pulse.speed) % 1;
      const fromOffset = getOffset(from);
      const toOffset = getOffset(to);
      const x = from.x + fromOffset.x + (to.x + toOffset.x - from.x - fromOffset.x) * progress;
      const y = from.y + fromOffset.y + (to.y + toOffset.y - from.y - fromOffset.y) * progress;
      context.fillStyle = pulse.color;
      context.fillRect(x - pulse.size / 2, y - pulse.size / 2, pulse.size, pulse.size);
    });

    context.fillStyle = "rgba(12, 27, 31, .72)";
    context.fillRect(0, 0, width < 720 ? width : width * 0.48, height);
    context.strokeStyle = "rgba(126, 183, 177, .28)";
    context.strokeRect(width - 190, 112, 142, 92);
    context.strokeRect(width - 310, height - 205, 216, 116);
  }

  function animate(time) {
    drawScene(time);
    animationFrame = window.requestAnimationFrame(animate);
  }

  function updateAnimation() {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    if (reducedMotion.matches || document.hidden) {
      drawScene(0);
      return;
    }
    animationFrame = window.requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    buildNetwork();
    updateAnimation();
  }

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX / Math.max(1, width) - 0.5;
    pointer.y = event.clientY / Math.max(1, height) - 0.5;
    pointer.active = true;
  }, { passive: true });
  window.addEventListener("pointerleave", () => { pointer.active = false; });
  document.addEventListener("visibilitychange", updateAnimation);
  reducedMotion.addEventListener?.("change", updateAnimation);

  if ("ResizeObserver" in window) {
    new ResizeObserver(resizeCanvas).observe(canvas);
  } else {
    window.addEventListener("resize", resizeCanvas, { passive: true });
  }
  resizeCanvas();
})();
