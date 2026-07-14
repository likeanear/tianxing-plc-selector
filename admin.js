const ADMIN_TOKEN_KEY = "tx-selector-admin-token";
const API_BASE = "/api/admin";

const state = {
  token: sessionStorage.getItem(ADMIN_TOKEN_KEY) || "",
  products: [],
  rules: {},
  features: { cloudSave: false },
  activeView: "products",
};

const el = {
  connectionState: document.querySelector("#connectionState"),
  loginView: document.querySelector("#loginView"),
  loginForm: document.querySelector("#loginForm"),
  adminTokenInput: document.querySelector("#adminTokenInput"),
  loginBtn: document.querySelector("#loginBtn"),
  loginStatus: document.querySelector("#loginStatus"),
  logoutBtn: document.querySelector("#logoutBtn"),
  adminWorkspace: document.querySelector("#adminWorkspace"),
  productStat: document.querySelector("#productStat"),
  projectStat: document.querySelector("#projectStat"),
  catalogStat: document.querySelector("#catalogStat"),
  cloudSaveFeature: document.querySelector("#cloudSaveFeature"),
  cloudSaveFeatureText: document.querySelector("#cloudSaveFeatureText"),
  cloudSaveFeatureHelp: document.querySelector("#cloudSaveFeatureHelp"),
  adminTabs: document.querySelector("#adminTabs"),
  productSearch: document.querySelector("#productSearch"),
  productStatusFilter: document.querySelector("#productStatusFilter"),
  refreshProductsBtn: document.querySelector("#refreshProductsBtn"),
  addProductBtn: document.querySelector("#addProductBtn"),
  productCount: document.querySelector("#productCount"),
  productTableBody: document.querySelector("#productTableBody"),
  productEmpty: document.querySelector("#productEmpty"),
  rulesEditor: document.querySelector("#rulesEditor"),
  rulesUpdatedAt: document.querySelector("#rulesUpdatedAt"),
  rulesStatus: document.querySelector("#rulesStatus"),
  formatRulesBtn: document.querySelector("#formatRulesBtn"),
  saveRulesBtn: document.querySelector("#saveRulesBtn"),
  productDialog: document.querySelector("#productDialog"),
  productDialogTitle: document.querySelector("#productDialogTitle"),
  productForm: document.querySelector("#productForm"),
  productId: document.querySelector("#productId"),
  productFamily: document.querySelector("#productFamily"),
  productGroup: document.querySelector("#productGroup"),
  productModel: document.querySelector("#productModel"),
  productName: document.querySelector("#productName"),
  productSummary: document.querySelector("#productSummary"),
  productTags: document.querySelector("#productTags"),
  productSource: document.querySelector("#productSource"),
  productSortOrder: document.querySelector("#productSortOrder"),
  productMetrics: document.querySelector("#productMetrics"),
  productActive: document.querySelector("#productActive"),
  closeProductDialogBtn: document.querySelector("#closeProductDialogBtn"),
  cancelProductBtn: document.querySelector("#cancelProductBtn"),
  disableProductBtn: document.querySelector("#disableProductBtn"),
  saveProductBtn: document.querySelector("#saveProductBtn"),
  adminToast: document.querySelector("#adminToast"),
};

bindEvents();
void restoreSession();

function bindEvents() {
  el.loginForm.addEventListener("submit", login);
  el.logoutBtn.addEventListener("click", logout);
  el.adminTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (button) setView(button.dataset.view);
  });
  el.cloudSaveFeature.addEventListener("change", saveCloudSaveFeature);
  el.productSearch.addEventListener("input", renderProducts);
  el.productStatusFilter.addEventListener("change", renderProducts);
  el.refreshProductsBtn.addEventListener("click", loadProducts);
  el.addProductBtn.addEventListener("click", () => openProductDialog());
  el.productTableBody.addEventListener("click", handleProductTableClick);
  el.productForm.addEventListener("submit", saveProduct);
  el.closeProductDialogBtn.addEventListener("click", () => el.productDialog.close());
  el.cancelProductBtn.addEventListener("click", () => el.productDialog.close());
  el.disableProductBtn.addEventListener("click", disableCurrentProduct);
  el.formatRulesBtn.addEventListener("click", formatRules);
  el.saveRulesBtn.addEventListener("click", saveRules);
}

async function restoreSession() {
  if (!state.token) return showLogin();
  try {
    await openWorkspace();
  } catch {
    logout();
  }
}

async function login(event) {
  event.preventDefault();
  const token = el.adminTokenInput.value.trim();
  if (!token) return;
  el.loginBtn.disabled = true;
  el.loginStatus.textContent = "正在验证…";
  state.token = token;
  try {
    await openWorkspace();
    sessionStorage.setItem(ADMIN_TOKEN_KEY, token);
    el.adminTokenInput.value = "";
  } catch (error) {
    state.token = "";
    el.loginStatus.textContent = error.message || "管理令牌无效";
  } finally {
    el.loginBtn.disabled = false;
  }
}

async function openWorkspace() {
  const session = await api("/session");
  el.loginView.hidden = true;
  el.adminWorkspace.hidden = false;
  el.logoutBtn.hidden = false;
  el.connectionState.classList.add("is-online");
  el.connectionState.querySelector("span").textContent = "D1 已连接";
  el.productStat.textContent = session.products;
  el.projectStat.textContent = session.projects;
  applyFeatureState(session.features);
  await Promise.all([loadProducts(), loadRules()]);
}

function applyFeatureState(features) {
  state.features.cloudSave = features?.cloudSave === true;
  el.cloudSaveFeature.checked = state.features.cloudSave;
  el.cloudSaveFeatureText.textContent = state.features.cloudSave ? "已开启" : "已关闭";
  el.cloudSaveFeatureHelp.textContent = state.features.cloudSave
    ? "选型页显示云端保存，分享方案接口可用"
    : "关闭时前端入口和方案接口均不可用";
}

async function saveCloudSaveFeature() {
  const previous = state.features.cloudSave;
  const requested = el.cloudSaveFeature.checked;
  el.cloudSaveFeature.disabled = true;
  el.cloudSaveFeatureText.textContent = "保存中";
  try {
    const payload = await api("/features", {
      method: "PUT",
      body: { cloudSave: requested },
    });
    applyFeatureState(payload.features);
    el.catalogStat.textContent = "已更新";
    showToast(requested ? "云端方案保存已开启" : "云端方案保存已关闭");
  } catch (error) {
    applyFeatureState({ cloudSave: previous });
    showToast(error.message || "功能开关保存失败");
  } finally {
    el.cloudSaveFeature.disabled = false;
  }
}

function showLogin() {
  el.loginView.hidden = false;
  el.adminWorkspace.hidden = true;
  el.logoutBtn.hidden = true;
  el.connectionState.classList.remove("is-online");
  el.connectionState.querySelector("span").textContent = "未连接";
  window.requestAnimationFrame(() => el.adminTokenInput.focus());
}

function logout() {
  state.token = "";
  state.products = [];
  sessionStorage.removeItem(ADMIN_TOKEN_KEY);
  el.loginStatus.textContent = "";
  showLogin();
}

function setView(view) {
  state.activeView = view;
  el.adminTabs.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.toggleAttribute("aria-current", active);
  });
  document.querySelectorAll("[data-admin-view]").forEach((section) => {
    section.hidden = section.dataset.adminView !== view;
  });
}

async function loadProducts() {
  el.refreshProductsBtn.disabled = true;
  try {
    const payload = await api("/products");
    state.products = payload.products || [];
    el.productStat.textContent = state.products.filter((product) => product.active).length;
    el.catalogStat.textContent = "已同步";
    renderProducts();
  } finally {
    el.refreshProductsBtn.disabled = false;
  }
}

function renderProducts() {
  const query = el.productSearch.value.trim().toLowerCase();
  const status = el.productStatusFilter.value;
  const products = state.products.filter((product) => {
    const matchesQuery = !query || [product.model, product.name, product.family, product.group, product.summary]
      .some((value) => String(value || "").toLowerCase().includes(query));
    const matchesStatus = status === "all" || (status === "active" ? product.active : !product.active);
    return matchesQuery && matchesStatus;
  });

  el.productCount.textContent = `${products.length} 条`;
  el.productEmpty.hidden = products.length > 0;
  el.productTableBody.innerHTML = products.map((product) => `
    <tr class="${product.active ? "" : "is-inactive"}">
      <td><span class="status-badge ${product.active ? "" : "is-inactive"}">${product.active ? "启用" : "停用"}</span></td>
      <td><div class="row-family"><strong>${escapeHtml(product.family)}</strong><span>${escapeHtml(product.group)}</span></div></td>
      <td><code>${escapeHtml(product.model)}</code></td>
      <td>${escapeHtml(product.name)}</td>
      <td>${escapeHtml(product.summary)}</td>
      <td>${Number(product.sortOrder || 0)}</td>
      <td><div class="row-actions"><button class="button button-quiet" type="button" data-edit-id="${product.id}">编辑</button>${product.active ? `<button class="button button-danger" type="button" data-disable-id="${product.id}">停用</button>` : ""}</div></td>
    </tr>
  `).join("");
}

function handleProductTableClick(event) {
  const editButton = event.target.closest("[data-edit-id]");
  if (editButton) {
    const product = state.products.find((item) => item.id === Number(editButton.dataset.editId));
    if (product) openProductDialog(product);
    return;
  }
  const disableButton = event.target.closest("[data-disable-id]");
  if (disableButton) void disableProduct(Number(disableButton.dataset.disableId));
}

function openProductDialog(product = null) {
  const nextSort = state.products.reduce((max, item) => Math.max(max, Number(item.sortOrder || 0)), 0) + 1;
  el.productDialogTitle.textContent = product ? "编辑产品" : "新增产品";
  el.productId.value = product?.id || "";
  el.productFamily.value = product?.family || "";
  el.productGroup.value = product?.group || "";
  el.productModel.value = product?.model || "";
  el.productName.value = product?.name || "";
  el.productSummary.value = product?.summary || "";
  el.productTags.value = (product?.tags || []).join(", ");
  el.productSource.value = product?.source || "";
  el.productSortOrder.value = product?.sortOrder ?? nextSort;
  el.productMetrics.value = JSON.stringify(product?.metrics || {}, null, 2);
  el.productActive.checked = product?.active !== false;
  el.disableProductBtn.hidden = !product || !product.active;
  el.productDialog.showModal();
  window.requestAnimationFrame(() => el.productFamily.focus());
}

async function saveProduct(event) {
  event.preventDefault();
  let metrics;
  try {
    metrics = JSON.parse(el.productMetrics.value || "{}");
    if (!metrics || typeof metrics !== "object" || Array.isArray(metrics)) throw new Error();
  } catch {
    showToast("指标 JSON 格式不正确");
    el.productMetrics.focus();
    return;
  }

  const id = Number(el.productId.value || 0);
  const payload = {
    family: el.productFamily.value,
    group: el.productGroup.value,
    model: el.productModel.value,
    name: el.productName.value,
    summary: el.productSummary.value,
    tags: el.productTags.value.split(",").map((item) => item.trim()).filter(Boolean),
    source: el.productSource.value,
    sortOrder: Number(el.productSortOrder.value || 0),
    metrics,
    active: el.productActive.checked,
  };

  el.saveProductBtn.disabled = true;
  try {
    await api(id ? `/products/${id}` : "/products", {
      method: id ? "PUT" : "POST",
      body: payload,
    });
    el.productDialog.close();
    await loadProducts();
    showToast(id ? "产品已更新" : "产品已新增");
  } catch (error) {
    showToast(error.message || "产品保存失败");
  } finally {
    el.saveProductBtn.disabled = false;
  }
}

async function disableCurrentProduct() {
  const id = Number(el.productId.value || 0);
  if (!id) return;
  if (!window.confirm("确定停用该产品吗？停用后选型页不再显示。")) return;
  const disabled = await disableProduct(id, true);
  if (disabled) el.productDialog.close();
}

async function disableProduct(id, confirmed = false) {
  const product = state.products.find((item) => item.id === id);
  if (!product) return false;
  if (!confirmed && !window.confirm(`确定停用“${product.model}”吗？`)) return false;
  try {
    await api(`/products/${id}`, { method: "DELETE" });
    await loadProducts();
    showToast("产品已停用");
    return true;
  } catch (error) {
    showToast(error.message || "产品停用失败");
    return false;
  }
}

async function loadRules() {
  const payload = await api("/rules");
  state.rules = payload.rules || {};
  el.rulesEditor.value = JSON.stringify(state.rules, null, 2);
  el.rulesUpdatedAt.textContent = payload.updatedAt ? `更新于 ${formatDate(payload.updatedAt)}` : "未记录更新时间";
  el.rulesStatus.textContent = "规则已读取";
}

function formatRules() {
  try {
    const rules = JSON.parse(el.rulesEditor.value);
    el.rulesEditor.value = JSON.stringify(rules, null, 2);
    el.rulesStatus.textContent = "JSON 格式正确";
  } catch {
    el.rulesStatus.textContent = "JSON 格式不正确";
    showToast("规则 JSON 格式不正确");
  }
}

async function saveRules() {
  let rules;
  try {
    rules = JSON.parse(el.rulesEditor.value);
    if (!rules || typeof rules !== "object" || Array.isArray(rules)) throw new Error();
  } catch {
    showToast("规则 JSON 格式不正确");
    return;
  }

  el.saveRulesBtn.disabled = true;
  el.rulesStatus.textContent = "正在发布…";
  try {
    await api("/rules", { method: "PUT", body: { rules } });
    state.rules = rules;
    el.rulesUpdatedAt.textContent = `更新于 ${formatDate(new Date().toISOString())}`;
    el.rulesStatus.textContent = "规则已发布";
    el.catalogStat.textContent = "已更新";
    showToast("选型规则已发布");
  } catch (error) {
    el.rulesStatus.textContent = error.message || "规则发布失败";
  } finally {
    el.saveRulesBtn.disabled = false;
  }
}

async function api(path, options = {}) {
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${state.token}`,
    ...(options.headers || {}),
  };
  const request = { method: options.method || "GET", headers };
  if (options.body !== undefined) {
    headers["content-type"] = "application/json";
    request.body = JSON.stringify(options.body);
  }
  const response = await fetch(`${API_BASE}${path}`, request);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) {
      state.token = "";
      sessionStorage.removeItem(ADMIN_TOKEN_KEY);
    }
    throw new Error(payload.error || `请求失败 (${response.status})`);
  }
  return payload;
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString("zh-CN", { hour12: false });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  el.adminToast.textContent = message;
  el.adminToast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => el.adminToast.classList.remove("is-visible"), 2600);
}
