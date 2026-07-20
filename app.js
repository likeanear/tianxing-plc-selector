const SOURCE = "宝信天行 PLC 系列产品选型手册 2025.09";
const DISCLAIMER = "本网站仅用于工具测试，不用于任何商业用途。本软件仅用于快速选型辅助，所有产品型号、技术参数和最终配置均以宝信软件官方手册及官方确认信息为准。";
const CREATOR = "FlyEnoch9";
const CONFIG_STORAGE_KEY = "tx-selector-configurations-v2";
const LEGACY_CART_STORAGE_KEY = "tx-selector-cart";
const THEME_STORAGE_KEY = "tx-selector-theme-v2";
const API_BASE = "/api";

const t4Base = "集成 6 个网络端口：1/2/3 为 GE，4/5 为 GE/EC 可配置，6 为 PN/GE/EC 可配置";
const t4Std = (extra) => `${t4Base}；${extra}；硬件版本 1.0`;
const t4Tags = ["T4", "GE", "EC", "PN", "1ms"];

const PRODUCTS = [
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426-XEP-10",
    name: "T4 标准性能 CPU",
    summary: t4Std("标准机箱，无扩展通讯端口"),
    tags: [...t4Tags, "标准机箱"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z0-10",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展机箱，无扩展通讯"),
    tags: [...t4Tags, "扩展机箱"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z0-10/1PN",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7 为 PN 双端口"),
    tags: [...t4Tags, "1PN"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z0-10/2PN",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7、13 为 PN 双端口"),
    tags: [...t4Tags, "2PN"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z1-10/1PN1DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7 为 PN 双端口，网口 14 为 DP 端口"),
    tags: [...t4Tags, "1PN", "1DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z1-10/2PN1DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7、13 为 PN 双端口，网口 14 为 DP 端口"),
    tags: [...t4Tags, "2PN", "1DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z2-10/2DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 13、14 为 DP 端口"),
    tags: [...t4Tags, "2DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z2-10/1PN2DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7 为 PN 双端口，网口 13、14 为 DP 端口"),
    tags: [...t4Tags, "1PN", "2DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z0-10/1RN",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 9 为 RN 端口"),
    tags: [...t4Tags, "RN"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z0-10/1PN1RN",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7 为 PN 双端口，网口 9 为 RN 端口"),
    tags: [...t4Tags, "1PN", "RN"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z0-10/2PN1RN",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7、13 为 PN 双端口，网口 9 为 RN 端口"),
    tags: [...t4Tags, "2PN", "RN"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z1-10/1PN1RN1DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7 为 PN 双端口，网口 9 为 RN 端口，网口 14 为 DP 端口"),
    tags: [...t4Tags, "1PN", "RN", "1DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z1-10/2PN1RN1DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7、13 为 PN 双端口，网口 9 为 RN 端口，网口 14 为 DP 端口"),
    tags: [...t4Tags, "2PN", "RN", "1DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z2-10/1RN2DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 9 为 RN 端口，网口 13、14 为 DP 端口"),
    tags: [...t4Tags, "RN", "2DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  {
    family: "T4 标准控制器",
    group: "CPU",
    model: "T426E-XEP-Z2-10/1PN1RN2DP",
    name: "T4 标准性能 CPU",
    summary: t4Std("扩展通讯卡：网口 7 为 PN 双端口，网口 9 为 RN 端口，网口 13、14 为 DP 端口"),
    tags: [...t4Tags, "1PN", "RN", "2DP"],
    source: "P14",
    metrics: { controller: 1 },
  },
  ...[
    ["T4CM-LB-PNXXXX-10", "左边托架；第 1 端口 PN，第 2/3 端口无配置"],
    ["T4CM-LB-PNXXDP-10", "左边托架；第 1 端口 PN，第 2 端口无配置，第 3 端口 DP"],
    ["T4CM-LB-PNXXPN-10", "左边托架；第 1 端口 PN，第 2 端口无配置，第 3 端口 PN"],
    ["T4CM-LB-XXXXDP-10", "左边托架；第 1/2 端口无配置，第 3 端口 DP"],
    ["T4CM-LB-PNRNXX-10", "左边托架；第 1 端口 PN，第 2 端口 RN，第 3 端口无配置"],
    ["T4CM-LB-PNRNDP-10", "左边托架；第 1 端口 PN，第 2 端口 RN，第 3 端口 DP"],
    ["T4CM-LB-PNRNPN-10", "左边托架；第 1 端口 PN，第 2 端口 RN，第 3 端口 PN"],
    ["T4CM-LB-XXRNDP-10", "左边托架；第 1 端口无配置，第 2 端口 RN，第 3 端口 DP"],
    ["T4CM-RB-XXXXDP-10", "右边托架；第 1/2 端口无配置，第 3 端口 DP"],
  ].map(([model, summary]) => ({
    family: "T4 标准控制器",
    group: "通讯模块备件",
    model,
    name: "T426E 通讯模块",
    summary,
    tags: ["T4", "通讯模块"],
    source: "P15",
    metrics: { commModule: 1 },
  })),
  {
    family: "T4 冗余控制器",
    group: "CPU",
    model: "T426EH-XEP-Z0-10",
    name: "T4 冗余 CPU",
    summary: "扩展外壳；标配 6 个网口；X9~X12 为冗余光纤通讯端口；无扩展 DP 端口",
    tags: ["T4H", "冗余", "GE", "EC", "PN"],
    source: "P19",
    metrics: { controller: 1, redundantController: 1 },
  },
  {
    family: "T4 冗余控制器",
    group: "CPU",
    model: "T426EH-XEP-Z1-10",
    name: "T4 冗余 CPU",
    summary: "扩展外壳；标配 6 个网口；X9~X12 为冗余光纤通讯端口；X14 为 DP 端口",
    tags: ["T4H", "冗余", "DP"],
    source: "P19",
    metrics: { controller: 1, redundantController: 1 },
  },
  {
    family: "T4 冗余控制器",
    group: "CPU",
    model: "T426EH-XEP-Z2-10",
    name: "T4 冗余 CPU",
    summary: "扩展外壳；标配 6 个网口；X9~X12 为冗余光纤通讯端口；X13、X14 为 DP 端口",
    tags: ["T4H", "冗余", "2DP"],
    source: "P19",
    metrics: { controller: 1, redundantController: 1 },
  },
  ...[
    ["T4CM-LB-XXHMXX-10", "左边托架；第 2 端口 HM 网口，第 1/3 端口无配置"],
    ["T4CM-LB-XXHMDP-10", "左边托架；第 2 端口 HM 网口，第 3 端口 DP"],
    ["T4CM-RB-XXHMXX-10", "右边托架；第 2 端口 HM 网口，第 1/3 端口无配置"],
    ["T4CM-RB-XXHMDP-10", "右边托架；第 2 端口 HM 网口，第 3 端口 DP"],
  ].map(([model, summary]) => ({
    family: "T4 冗余控制器",
    group: "通讯模块备件",
    model,
    name: "T426EH 通讯模块",
    summary,
    tags: ["T4H", "HM", "通讯模块"],
    source: "P20",
    metrics: { commModule: 1 },
  })),
  {
    family: "T3 标准控制器",
    group: "CPU",
    model: "T324-XE-CD-10",
    name: "T3 标准性能 CPU",
    summary: "X3 为 GE/EC 可配置；X4 为 EtherCAT 端口；集成板载数字 IO；硬件版本 1.0",
    tags: ["T3", "GE", "EC", "板载 IO"],
    source: "P25",
    metrics: { controller: 1 },
  },
  {
    family: "T3 标准控制器",
    group: "CPU",
    model: "T324-XE-CD-10/C",
    name: "T3 标准性能 CPU",
    summary: "X3 为 GE/EC 可配置；X4 为 EtherCAT 端口；集成板载数字 IO；喷涂三防漆",
    tags: ["T3", "EC", "三防漆"],
    source: "P25",
    metrics: { controller: 1 },
  },
  {
    family: "T3 标准控制器",
    group: "CPU",
    model: "T324-XP-CD-10",
    name: "T3 标准性能 CPU",
    summary: "X3 为 GE/EC 可配置；X4 为 P/X 端口（PN/GE/EC 可配置）；集成板载数字 IO",
    tags: ["T3", "PN", "GE", "EC"],
    source: "P25",
    metrics: { controller: 1 },
  },
  {
    family: "T3 标准控制器",
    group: "CPU",
    model: "T324-XP-CD-10/C",
    name: "T3 标准性能 CPU",
    summary: "X3 为 GE/EC 可配置；X4 为 P/X 端口（PN/GE/EC 可配置）；集成板载数字 IO；喷涂三防漆",
    tags: ["T3", "PN", "三防漆"],
    source: "P25",
    metrics: { controller: 1 },
  },
  ...[
    ["TH22-07RT-20", "TH22 HMI", "7 英寸 16:9", "1024×600", "2GB DDR4 / 32GB eMMC；无 HDMI；额定功率 <10W"],
    ["TH22-10RT-10", "TH22 HMI", "10.1 英寸 16:10", "1280×800", "2GB DDR4 / 8GB eMMC；HDMI 2.0a；额定功率 <15W"],
    ["TH22-12RT-10", "TH22 HMI", "12.1 英寸 16:10", "1280×800", "2GB DDR4 / 8GB eMMC；HDMI 2.0a；额定功率 <15W"],
    ["TH22-15RT-10", "TH22 HMI", "15.6 英寸 16:10", "1920×1080", "2GB DDR4 / 8GB eMMC；HDMI 2.0a；额定功率 <15W"],
    ["TH22-10RT-20", "TH22 HMI", "10.1 英寸 16:10", "1280×800", "2GB DDR4 / 32GB eMMC；HDMI 2.0a；额定功率 <15W"],
    ["TH22-12RT-20", "TH22 HMI", "12.1 英寸 16:10", "1280×800", "2GB DDR4 / 32GB eMMC；HDMI 2.0a；额定功率 <15W"],
    ["TH22-15RT-20", "TH22 HMI", "15.6 英寸 16:10", "1920×1080", "2GB DDR4 / 32GB eMMC；HDMI 2.0a；额定功率 <15W"],
    ["TH32-10RT-10", "TH32 HMI", "10.1 英寸 16:10", "1280×800", "4GB DDR4 / 32GB eMMC；AI 算力 6.0TOPS；HDMI 2.0a"],
    ["TH32-12RT-10", "TH32 HMI", "12.1 英寸 16:10", "1280×800", "4GB DDR4 / 32GB eMMC；AI 算力 6.0TOPS；HDMI 2.0a"],
    ["TH32-15RT-10", "TH32 HMI", "15.6 英寸 16:10", "1920×1080", "4GB DDR4 / 32GB eMMC；AI 算力 6.0TOPS；HDMI 2.0a"],
  ].map(([model, name, size, resolution, spec]) => ({
    family: "TH HMI 触摸屏",
    group: "HMI",
    model,
    name,
    summary: `${size}；${resolution}；${spec}；DC24V，前面板 IP65`,
    tags: ["HMI", size.split(" ")[0], resolution],
    source: model.startsWith("TH32") ? "P29-P30" : "P27-P28",
    metrics: { hmi: 1 },
  })),
  {
    family: "TM30 远程 IO",
    group: "耦合器",
    model: "TM30-C1EC-10",
    name: "TM30 EtherCAT 耦合器",
    summary: "EtherCAT 总线；2×RJ45（switch）；最多支持 32 个 I/O 模块；24VDC 供电",
    tags: ["TM30", "EtherCAT", "32 模块"],
    source: "P33",
    metrics: { coupler: 1, tm30Coupler: 1 },
  },
  {
    family: "TM30 远程 IO",
    group: "耦合器",
    model: "TM30-C1PN-10",
    name: "TM30 Profinet 耦合器",
    summary: "Profinet RT mode；2×RJ45（switch）；最多支持 32 个 I/O 模块；24VDC 供电",
    tags: ["TM30", "Profinet", "32 模块"],
    source: "P33",
    metrics: { coupler: 1, tm30Coupler: 1 },
  },
  ...[
    ["TM30-DI16-NN-20", "数字量输入模块", "16 通道；24VDC；源型；NPN 输入；输入滤波 0~32ms 可配置；外接电源缺失诊断", { di: 16, tm30Module: 1 }],
    ["TM30-DI16-PP-20", "数字量输入模块", "16 通道；24VDC；漏型；PNP 输入；输入滤波 0~32ms 可配置；外接电源缺失诊断", { di: 16, tm30Module: 1 }],
    ["TM30-DQ16-NN-10", "数字量输出模块", "16 通道；24VDC；输出电流 0.5A；PNP 输出；短路保护；停止输出可配置", { dq: 16, tm30Module: 1 }],
    ["TM30-DQ16-PP-20", "数字量输出模块", "16 通道；24VDC；输出电流 0.5A；PNP 输出；短路保护；外接电源缺失诊断", { dq: 16, tm30Module: 1 }],
    ["TM30-RQ04-NO-10", "继电器输出模块", "4 通道；常开继电器输出；停止输出可配置；外接电源缺失诊断", { relay: 4, dq: 4, tm30Module: 1 }],
    ["TM30-AI04-UI-10", "模拟量输入模块", "4 通道；电压 / 电流；支持 2/3/4 线制；16 位精度；滤波参数可配置", { ai: 4, tm30Module: 1 }],
    ["TM30-AQ04-UI-10", "模拟量输出模块", "4 通道；电压 / 电流；16 位精度；通道诊断；停止输出可配置", { aq: 4, tm30Module: 1 }],
    ["TM30-TR04-10", "热电阻温度输入模块", "4 通道；24 位分辨率；0.1℃精度；支持 2/3 线；采样周期可配置", { temp: 4, rtd: 4, tm30Module: 1 }],
    ["TM30-TC04-10", "热电偶温度输入模块", "4 通道；24 位分辨率；0.1℃精度；内部冷端补偿；采样周期可配置", { temp: 4, tc: 4, tm30Module: 1 }],
    ["TM30-SI02-DF-10", "SSI 绝对值编码器输入模块", "2 通道；差分信号；32 位数据类型；波特率和奇偶校验可配置", { encoder: 2, tm30Module: 1 }],
    ["TM30-HC02-DF-10", "高速计数器输入模块", "2 通道；差分信号；支持单相、双相、脉冲+方向、A/B/Z 相输入；最高 1MHz", { hsc: 2, tm30Module: 1 }],
    ["TM30-PO04-DS-10", "脉冲输出模块", "4 通道；2 通道差分 1MHz + 2 通道单端 200kHz；支持 PTO/PWM 模式", { pulse: 4, tm30Module: 1 }],
    ["TM30-PS02-24-10", "电源中继模块", "2 通道（系统总线 + IO 电源）；24VDC 输入；支持外接电源缺失诊断", { powerModule: 1, tm30Module: 1 }],
  ].map(([model, name, summary, metrics]) => ({
    family: "TM30 远程 IO",
    group: "I/O 模块",
    model,
    name,
    summary,
    tags: ["TM30", name.replace("模块", "")],
    source: "P44",
    metrics,
  })),
  {
    family: "TD11 远程 IO",
    group: "耦合器",
    model: "TD11-C2ECT13",
    name: "TD11 EtherCAT 耦合器",
    summary: "EtherCAT 总线；2 个 RJ45；可扩展 32 个模块；24VDC 供电；带 8 位拨码站 ID",
    tags: ["TD11", "EtherCAT", "32 模块"],
    source: "P57",
    metrics: { coupler: 1, td11Coupler: 1 },
  },
  {
    family: "TD11 远程 IO",
    group: "耦合器",
    model: "TD11-C2PNT13",
    name: "TD11 Profinet 耦合器",
    summary: "Profinet-RT 总线；2 个 RJ45；可扩展 32 个模块；24VDC 供电；自带复位设备名称、IP 按钮",
    tags: ["TD11", "Profinet", "32 模块"],
    source: "P57",
    metrics: { coupler: 1, td11Coupler: 1 },
  },
  {
    family: "TD11 远程 IO",
    group: "耦合器",
    model: "TD11-C2DPT13",
    name: "TD11 Profibus-DP 耦合器",
    summary: "Profibus-DP 协议总线；1 个 DB9 接口；可扩展 32 个模块；24VDC 供电；8 位拨码设置",
    tags: ["TD11", "Profibus-DP", "32 模块"],
    source: "P57",
    metrics: { coupler: 1, td11Coupler: 1 },
  },
  {
    family: "TD11 远程 IO",
    group: "耦合器",
    model: "TD11-C2TCP13",
    name: "TD11 TCP 耦合器",
    summary: "Modbus-TCP、S7-TCP/IP 总线耦合器；2 个 RJ45；具有交换机功能；可扩展 32 个模块",
    tags: ["TD11", "Modbus-TCP", "S7-TCP/IP"],
    source: "P57",
    metrics: { coupler: 1, td11Coupler: 1 },
  },
  ...[
    ["TD11-DI16M13", "数字量输入模块", "16 输入；支持共阴 / 共阳；额定 24VDC；模块诊断；端子可插拔", { di: 16, td11Module: 1 }],
    ["TD11-DI32M13", "数字量输入模块", "32 输入；支持共阴 / 共阳；额定 24VDC；模块诊断；端子可插拔", { di: 32, td11Module: 1 }],
    ["TD11-DQ16P13", "数字量输出模块", "16 输出；晶体管 PNP 型；24VDC/0.5A；模块诊断；端子可插拔", { dq: 16, td11Module: 1 }],
    ["TD11-DQ32P13", "数字量输出模块", "32 输出；晶体管 PNP 型；24VDC/0.5A；模块诊断；端子可插拔", { dq: 32, td11Module: 1 }],
    ["TD11-DQ16N13", "数字量输出模块", "16 输出；晶体管 NPN 型；24VDC/0.5A；模块诊断；端子可插拔", { dq: 16, td11Module: 1 }],
    ["TD11-DQ32N13", "数字量输出模块", "32 输出；晶体管 NPN 型；24VDC/0.5A；模块诊断；端子可插拔", { dq: 32, td11Module: 1 }],
    ["TD11-DQ04C11", "继电器输出模块", "4 输出；继电器；220V AC / 24V DC；2A；模块诊断；端子可插拔", { dq: 4, relay: 4, td11Module: 1 }],
    ["TD11-AI04U23", "模拟量输入模块", "4 输入；电压输入；16bit 高精度；模块诊断；端子可插拔", { ai: 4, td11Module: 1 }],
    ["TD11-AI08U23", "模拟量输入模块", "8 输入；电压输入；16bit 高精度；模块诊断；端子可插拔", { ai: 8, td11Module: 1 }],
    ["TD11-AI04I23", "模拟量输入模块", "4 输入；电流输入；16bit 高精度；模块诊断；端子可插拔", { ai: 4, td11Module: 1 }],
    ["TD11-AI08I23", "模拟量输入模块", "8 输入；电流输入；16bit 高精度；模块诊断；端子可插拔", { ai: 8, td11Module: 1 }],
    ["TD11-AQ04U23", "模拟量输出模块", "4 输出；16 位精度；电压输出 ±10V；模块诊断；端子可插拔", { aq: 4, td11Module: 1 }],
    ["TD11-AQ04I23", "模拟量输出模块", "4 输出；16 位精度；电流输出 0~20mA；模块诊断；端子可插拔", { aq: 4, td11Module: 1 }],
    ["TD11-AQ08U23", "模拟量输出模块", "8 输出；16 位精度；电压输出 ±10V；模块诊断；端子可插拔", { aq: 8, td11Module: 1 }],
    ["TD11-AQ08I23", "模拟量输出模块", "8 输出；16 位精度；电流输出 0~20mA；模块诊断；端子可插拔", { aq: 8, td11Module: 1 }],
    ["TD11-AT4RD23", "热电阻模块", "4 输入；16 位精度；PT100、PT1000 等；模块诊断；端子可插拔", { temp: 4, rtd: 4, td11Module: 1 }],
    ["TD11-AT4TC23", "热电偶模块", "4 输入；16 位精度；J、K 等；自带隔离电源；端子可插拔", { temp: 4, tc: 4, td11Module: 1 }],
    ["TD11-PS1AA13", "电源中继模块", "24VDC 电源中继，同时也是 5VDC 隔离总线电源中继；占用一个槽位；端子可插拔", { powerModule: 1, td11Module: 1, td11Power: 1 }],
    ["TD11-F2SSI23", "高速计数器模块", "2 组同步串行 SSI 输入；最大通信速率 1MHz；支持多圈或单圈 SSI 编码器输入", { encoder: 2, td11Module: 1, td11FastModule: 1 }],
    ["TD11-F2CNT23", "高速计数器模块", "2 组 A/B/C 计数输入；单端 24VDC/PNP 最大 200kHz，差分 5V 最大 4MHz", { hsc: 2, td11Module: 1, td11FastModule: 1 }],
    ["TD11-F2COM21", "串口通讯模块", "自带 2 个串口；支持 RS422/RS232 全双工和 RS485 半双工；支持 Modbus RTU / 自由口", { serial: 2, td11Module: 1 }],
    ["TD11-AX1END3", "终端盖板", "用于机架最后挡板，避免总线金手指裸露；与耦合器配套发货时无需额外订购", { accessory: 1 }],
  ].map(([model, name, summary, metrics]) => ({
    family: "TD11 远程 IO",
    group: name === "终端盖板" ? "辅件" : "I/O 模块",
    model,
    name,
    summary,
    tags: ["TD11", name.replace("模块", "")],
    source: model === "TD11-AX1END3" ? "P56-P58" : "P57-P58",
    metrics,
  })),
];

const savedConfigurations = loadConfigurations();

const state = {
  query: "",
  family: "全部",
  network: "全部",
  step: "plc",
  sort: "default",
  selectedOnly: false,
  configurations: savedConfigurations.configurations,
  activeConfigId: savedConfigurations.activeConfigId,
  catalogVersion: "embedded",
  features: { cloudSave: false },
  cloudProjectId: null,
};

const el = {
  topbar: document.querySelector(".topbar"),
  overviewBar: document.querySelector(".overview-bar"),
  catalogStickyHeader: document.querySelector(".catalog-sticky-header"),
  search: document.querySelector("#searchInput"),
  familyFilter: document.querySelector("#familyFilter"),
  networkFilterWrap: document.querySelector("#networkFilterWrap"),
  networkFilter: document.querySelector("#networkFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  selectedOnlyToggle: document.querySelector("#selectedOnlyToggle"),
  clearSearchBtn: document.querySelector("#clearSearchBtn"),
  resetFiltersBtn: document.querySelector("#resetFiltersBtn"),
  stepTabs: document.querySelector("#stepTabs"),
  familyTabs: document.querySelector("#familyTabs"),
  cartTabs: document.querySelector("#cartTabs"),
  addCartBtn: document.querySelector("#addCartBtn"),
  rows: document.querySelector("#productRows"),
  resultCount: document.querySelector("#resultCount"),
  selectedCount: document.querySelector("#selectedCount"),
  cartList: document.querySelector("#cartList"),
  metricList: document.querySelector("#metricList"),
  overviewMetrics: document.querySelector("#overviewMetrics"),
  overviewDetailTrigger: document.querySelector("#overviewDetailTrigger"),
  overviewDetailPanel: document.querySelector("#overviewDetailPanel"),
  overviewDetailTitle: document.querySelector("#overviewDetailTitle"),
  overviewDetailCount: document.querySelector("#overviewDetailCount"),
  overviewDetailMetrics: document.querySelector("#overviewDetailMetrics"),
  compatibilityStats: document.querySelector("#compatibilityStats"),
  warningList: document.querySelector("#warningList"),
  checkSummaryStat: document.querySelector("#checkSummaryStat"),
  checkPanel: document.querySelector(".config-check-panel"),
  checkBarToggle: document.querySelector("#checkBarToggle"),
  checkPreview: document.querySelector("#checkPreview"),
  checkToggleText: document.querySelector("#checkToggleText"),
  exportBtn: document.querySelector("#exportBtn"),
  wechatQrBtn: document.querySelector("#wechatQrBtn"),
  feedbackBtn: document.querySelector("#feedbackBtn"),
  backupBtn: document.querySelector("#backupBtn"),
  importBtn: document.querySelector("#importBtn"),
  cloudSaveBtn: document.querySelector("#cloudSaveBtn"),
  importFile: document.querySelector("#importFile"),
  renameCartBtn: document.querySelector("#renameCartBtn"),
  duplicateCartBtn: document.querySelector("#duplicateCartBtn"),
  deleteCartBtn: document.querySelector("#deleteCartBtn"),
  clearBtn: document.querySelector("#clearBtn"),
  totalProductStat: document.querySelector("#totalProductStat"),
  configCountStat: document.querySelector("#configCountStat"),
  selectedItemStat: document.querySelector("#selectedItemStat"),
  healthStat: document.querySelector("#healthStat"),
  mobileQuickNav: document.querySelector("#mobileQuickNav"),
  mobileSelectedSummary: document.querySelector("#mobileSelectedSummary"),
  mobileHealthText: document.querySelector("#mobileHealthText"),
  progressTracker: document.querySelector("#progressTracker"),
  toast: document.querySelector("#toast"),
  themeSwitcher: document.querySelector("#themeSwitcher"),
  smartSelectBtn: document.querySelector("#smartSelectBtn"),
  smartDialog: document.querySelector("#smartDialog"),
  smartForm: document.querySelector("#smartForm"),
  closeSmartBtn: document.querySelector("#closeSmartBtn"),
  cancelSmartBtn: document.querySelector("#cancelSmartBtn"),
  calculateSmartBtn: document.querySelector("#calculateSmartBtn"),
  applySmartBtn: document.querySelector("#applySmartBtn"),
  recommendationResult: document.querySelector("#recommendationResult"),
  recommendationStatus: document.querySelector("#recommendationStatus"),
  feedbackDialog: document.querySelector("#feedbackDialog"),
  closeFeedbackBtn: document.querySelector("#closeFeedbackBtn"),
  shareDialog: document.querySelector("#shareDialog"),
  shareForm: document.querySelector("#shareForm"),
  closeShareBtn: document.querySelector("#closeShareBtn"),
  cancelShareBtn: document.querySelector("#cancelShareBtn"),
  submitShareBtn: document.querySelector("#submitShareBtn"),
  shareProjectTitle: document.querySelector("#shareProjectTitle"),
  shareProjectNote: document.querySelector("#shareProjectNote"),
  shareResult: document.querySelector("#shareResult"),
  shareResultTitle: document.querySelector("#shareResultTitle"),
  shareUrl: document.querySelector("#shareUrl"),
  copyShareBtn: document.querySelector("#copyShareBtn"),
  openShareBtn: document.querySelector("#openShareBtn"),
  shareStatus: document.querySelector("#shareStatus"),
};

let currentSmartRecommendation = null;
let stickyResizeObserver = null;

const metricLabels = [
  ["controller", "控制器"],
  ["coupler", "耦合器"],
  ["di", "DI 点数"],
  ["dq", "DO 点数"],
  ["ai", "AI 点数"],
  ["aq", "AO 点数"],
  ["rtd", "热电阻 RTD"],
  ["tc", "热电偶 TC"],
  ["encoder", "编码器通道"],
  ["hsc", "高速计数通道"],
  ["pulse", "脉冲输出通道"],
  ["serial", "串口数"],
  ["commModule", "通讯模块"],
  ["powerModule", "电源模块"],
  ["hmi", "HMI"],
  ["accessory", "其他"],
];

const overviewMetricLabels = [
  ["controller", "PLC"],
  ["coupler", "耦合器"],
  ["di", "DI"],
  ["dq", "DO"],
  ["ai", "AI"],
  ["aq", "AO"],
];

const networkFilters = [
  ["全部", "全部网络接口"],
  ["GE", "GE 千兆以太网"],
  ["EC", "EC / EtherCAT"],
  ["PN", "PN / PROFINET"],
  ["DP", "DP / PROFIBUS DP"],
  ["RN", "RN / RapidNet"],
  ["HM", "HM 冗余通讯"],
  ["NO_EXT", "无扩展通讯"],
];

const workflowSteps = [
  ["plc", "1 PLC", "选择控制器和通讯模块"],
  ["remote", "2 远程 IO", "选择耦合器和 I/O 模块"],
  ["hmi", "3 HMI", "选择触摸屏"],
  ["all", "全部", "查看全部型号"],
];

let remoteIoCompatibility = {
  PN: {
    label: "PROFINET",
    models: ["TM30-C1PN-10", "TD11-C2PNT13"],
  },
  EC: {
    label: "EtherCAT",
    models: ["TM30-C1EC-10", "TD11-C2ECT13"],
  },
  DP: {
    label: "PROFIBUS DP",
    models: ["TD11-C2DPT13"],
  },
};

const compatibilityDefaults = {
  series: {
    tm30: {
      label: "TM30",
      moduleMetric: "tm30Module",
      couplerMetric: "tm30Coupler",
      couplers: { PN: "TM30-C1PN-10", EC: "TM30-C1EC-10" },
      powerRelayModel: "TM30-PS02-24-10",
    },
    td11: {
      label: "TD11",
      moduleMetric: "td11Module",
      couplerMetric: "td11Coupler",
      couplers: { PN: "TD11-C2PNT13", EC: "TD11-C2ECT13", DP: "TD11-C2DPT13", TCP: "TD11-C2TCP13" },
      powerRelayModel: "TD11-PS1AA13",
      bundledAccessoryModel: "TD11-AX1END3",
    },
  },
  couplerProtocols: {
    "TM30-C1PN-10": "PN",
    "TM30-C1EC-10": "EC",
    "TD11-C2PNT13": "PN",
    "TD11-C2ECT13": "EC",
    "TD11-C2DPT13": "DP",
    "TD11-C2TCP13": "TCP",
  },
};

let selectionRules = {
  limits: {
    modulesPerCoupler: 32,
    td11PowerSegment: 16,
    td11FastPerCoupler: 4,
  },
  protocolLabels: { PN: "PROFINET", EC: "EtherCAT", DP: "PROFIBUS DP", TCP: "Modbus TCP / S7-TCP" },
  extensionLabels: { none: "不需要", PN: "PROFINET", DP: "PROFIBUS DP", RN: "RapidNet" },
  remoteIoCompatibility,
  compatibility: compatibilityDefaults,
};

void init();

async function init() {
  applyTheme(document.documentElement.dataset.theme || "cyber");
  renderStepControls();
  renderFamilyControls();
  bindEvents();
  el.totalProductStat.textContent = PRODUCTS.length;
  render();
  setupStickyMeasurements();
  await hydrateCatalog();
  await loadSharedProjectFromUrl();
}

async function hydrateCatalog() {
  try {
    const response = await fetch(`${API_BASE}/catalog`, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`catalog ${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.products) || payload.products.length === 0) {
      throw new Error("catalog is empty");
    }

    PRODUCTS.splice(0, PRODUCTS.length, ...payload.products);
    state.catalogVersion = String(payload.version || "unversioned");
    state.features.cloudSave = payload.features?.cloudSave === true;
    el.cloudSaveBtn.hidden = !state.features.cloudSave;
    if (payload.rules && typeof payload.rules === "object") {
      selectionRules = { ...selectionRules, ...payload.rules };
      if (payload.rules.remoteIoCompatibility) {
        remoteIoCompatibility = payload.rules.remoteIoCompatibility;
      }
    }
    renderFamilyControls();
    el.totalProductStat.textContent = PRODUCTS.length;
    render();
  } catch (error) {
    console.warn("Using embedded catalog fallback", error);
  }
}

async function loadSharedProjectFromUrl() {
  const publicId = new URLSearchParams(window.location.search).get("project");
  if (!publicId) return;
  if (!state.features.cloudSave) {
    showToast("云端方案功能当前已关闭");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/projects/${encodeURIComponent(publicId)}`, {
      headers: { accept: "application/json" },
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "共享方案读取失败");
    if (!Array.isArray(payload.configurations) || payload.configurations.length === 0) {
      throw new Error("共享方案没有有效配置");
    }

    const knownModels = new Set(PRODUCTS.map((product) => product.model));
    const configurations = payload.configurations.map(normalizeConfiguration);
    configurations.forEach((configuration) => {
      configuration.items = Object.fromEntries(
        Object.entries(configuration.items)
          .filter(([model, quantity]) => knownModels.has(model) && Number(quantity) > 0)
          .map(([model, quantity]) => [model, Math.min(9999, Math.floor(Number(quantity)))]),
      );
    });
    state.configurations = configurations;
    state.activeConfigId = configurations.some((item) => item.id === payload.activeConfigId)
      ? payload.activeConfigId
      : configurations[0].id;
    state.cloudProjectId = publicId;
    persistConfigurations();
    render();
    document.title = `${payload.title || "共享方案"} | 天行 PLC 智能选型工作台`;
    showToast(`已载入云端方案“${payload.title || configurations[0].name}”`);
  } catch (error) {
    showToast(error.message || "共享方案读取失败");
  }
}

function renderStepControls() {
  el.stepTabs.innerHTML = workflowSteps
    .map(
      ([value, label, description]) => `
        <button type="button" data-step="${escapeAttr(value)}">
          <strong>${escapeHtml(label)}</strong>
          <span>${escapeHtml(description)}</span>
        </button>`,
    )
    .join("");
}

function renderFamilyControls() {
  const seenFamilies = [...new Set(PRODUCTS.map((item) => item.family))];
  const stepOrder = { plc: 1, remote: 2, hmi: 3, all: 4 };
  const productFamilies = seenFamilies
    .map((family, index) => ({ family, index, step: getFamilyStep(family) }))
    .sort((a, b) => stepOrder[a.step] - stepOrder[b.step] || a.index - b.index)
    .map((item) => item.family);
  const families = ["全部", ...productFamilies];
  el.familyFilter.innerHTML = families
    .map((family) => `<option value="${escapeAttr(family)}">${escapeHtml(family)}</option>`)
    .join("");
  el.networkFilter.innerHTML = networkFilters
    .map(([value, label]) => `<option value="${escapeAttr(value)}">${escapeHtml(label)}</option>`)
    .join("");
  el.familyTabs.innerHTML = productFamilies
    .map((family) => `<button type="button" data-family="${escapeAttr(family)}" data-family-step="${escapeAttr(getFamilyStep(family))}">${escapeHtml(family)}</button>`)
    .join("");
}

function bindEvents() {
  const mobileOverviewQuery = window.matchMedia("(max-width: 720px)");
  const syncOverviewDetailAvailability = () => {
    const disabled = mobileOverviewQuery.matches;
    el.overviewDetailTrigger.disabled = disabled;
    el.overviewDetailTrigger.setAttribute("aria-disabled", String(disabled));
    el.overviewDetailTrigger.title = disabled ? "手机端暂不展开完整统计" : "查看完整配置统计";
    if (disabled) setOverviewDetailExpanded(false);
  };

  syncOverviewDetailAvailability();
  if (typeof mobileOverviewQuery.addEventListener === "function") {
    mobileOverviewQuery.addEventListener("change", syncOverviewDetailAvailability);
  } else {
    mobileOverviewQuery.addListener(syncOverviewDetailAvailability);
  }

  el.mobileQuickNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-scroll-target]");
    if (!button) return;
    const target = document.querySelector(`#${button.dataset.scrollTarget}`);
    if (!target) return;
    setMobileNavActive(button.dataset.scrollTarget);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    target.scrollIntoView({ behavior, block: "start" });
  });

  let mobileNavFrame = 0;
  window.addEventListener("scroll", () => {
    if (mobileNavFrame || window.innerWidth > 720) return;
    mobileNavFrame = window.requestAnimationFrame(() => {
      mobileNavFrame = 0;
      const configPanel = document.querySelector("#configPanel");
      const activeTarget = window.scrollY + window.innerHeight * 0.35 >= configPanel.offsetTop ? "configPanel" : "catalogPanel";
      setMobileNavActive(activeTarget);
    });
  }, { passive: true });

  el.search.addEventListener("input", () => {
    state.query = el.search.value.trim().toLowerCase();
    renderProducts();
  });

  el.familyFilter.addEventListener("change", () => {
    setFamily(el.familyFilter.value);
  });

  el.networkFilter.addEventListener("change", () => {
    state.network = el.networkFilter.value;
    render();
  });

  el.sortFilter.addEventListener("change", () => {
    state.sort = el.sortFilter.value;
    renderProducts();
  });

  el.selectedOnlyToggle.addEventListener("change", () => {
    state.selectedOnly = el.selectedOnlyToggle.checked;
    renderProducts();
  });

  el.clearSearchBtn.addEventListener("click", () => {
    el.search.value = "";
    state.query = "";
    el.search.focus();
    renderProducts();
  });

  el.resetFiltersBtn.addEventListener("click", resetFilters);

  el.stepTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-step]");
    if (!button) return;
    setStep(button.dataset.step);
  });

  el.familyTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-family]");
    if (!button) return;
    setFamily(button.dataset.family);
  });

  el.cartTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cart-id]");
    if (!button) return;
    state.activeConfigId = button.dataset.cartId;
    persistConfigurations();
    render();
  });

  el.addCartBtn.addEventListener("click", () => {
    const nextIndex = state.configurations.length + 1;
    const config = createConfiguration(`配置方案 ${nextIndex}`);
    state.configurations.push(config);
    state.activeConfigId = config.id;
    state.step = "plc";
    persistConfigurations();
    render();
  });

  el.rows.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const model = button.dataset.model;
    const qty = getQty(model);
    if (button.dataset.action === "inc") setQty(model, qty + 1);
    if (button.dataset.action === "dec") setQty(model, qty - 1);
  });

  el.rows.addEventListener("change", (event) => {
    const input = event.target.closest("[data-qty]");
    if (!input) return;
    setQty(input.dataset.model, input.value);
  });

  el.rows.addEventListener("keydown", (event) => {
    const input = event.target.closest("[data-qty]");
    if (!input || event.key !== "Enter") return;
    event.preventDefault();
    setQty(input.dataset.model, input.value);
  });

  el.cartList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cart-remove]");
    if (!button) return;
    setQty(button.dataset.cartRemove, 0);
    showToast(`${button.dataset.cartRemove} 已从当前方案移除`);
  });

  el.clearBtn.addEventListener("click", () => {
    if (Object.keys(getActiveConfiguration().items).length === 0) return;
    if (!window.confirm(`确定清空“${getActiveConfiguration().name}”中的全部设备吗？\n\n方案本身会保留，此操作不会删除方案。`)) return;
    getActiveConfiguration().items = {};
    persistConfigurations();
    render();
    showToast("当前方案已清空");
  });

  el.deleteCartBtn.addEventListener("click", () => {
    if (state.configurations.length <= 1) return;
    if (!window.confirm(`确定删除整个方案“${getActiveConfiguration().name}”吗？\n\n方案及其中的全部设备都会被删除。`)) return;
    const activeIndex = state.configurations.findIndex((config) => config.id === state.activeConfigId);
    state.configurations.splice(activeIndex, 1);
    state.activeConfigId = state.configurations[Math.max(0, activeIndex - 1)].id;
    persistConfigurations();
    render();
    showToast("配置方案已删除");
  });

  el.renameCartBtn.addEventListener("click", renameActiveConfiguration);
  el.duplicateCartBtn.addEventListener("click", duplicateActiveConfiguration);
  el.backupBtn.addEventListener("click", backupConfigurations);
  el.importBtn.addEventListener("click", () => el.importFile.click());
  el.cloudSaveBtn.addEventListener("click", openShareDialog);
  el.importFile.addEventListener("change", importConfigurations);
  el.exportBtn.addEventListener("click", exportConfiguration);

  el.themeSwitcher.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-value]");
    if (!button) return;
    applyTheme(button.dataset.themeValue, true);
  });

  el.smartSelectBtn.addEventListener("click", openSmartSelector);
  el.overviewDetailTrigger.addEventListener("click", () => {
    if (mobileOverviewQuery.matches) return;
    setOverviewDetailExpanded(!el.overviewMetrics.classList.contains("is-expanded"));
  });
  el.checkBarToggle.addEventListener("click", () => {
    setCheckBarExpanded(!el.checkPanel.classList.contains("is-expanded"));
  });
  el.warningList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-compat-action]");
    if (!button) return;
    const model = button.dataset.model;
    if (!PRODUCTS.some((product) => product.model === model)) return;
    const action = button.dataset.compatAction;
    const quantity = Math.max(1, Number(button.dataset.qty) || 1);
    if (action === "add") {
      setQty(model, getQty(model) + quantity);
      showToast(`${model} 已补入当前方案 ×${quantity}`);
    }
    if (action === "remove") {
      setQty(model, 0);
      showToast(`${model} 已从当前方案移除`);
    }
  });
  el.wechatQrBtn.addEventListener("click", () => el.feedbackDialog.showModal());
  el.feedbackBtn.addEventListener("click", () => el.feedbackDialog.showModal());
  el.closeSmartBtn.addEventListener("click", () => el.smartDialog.close());
  el.cancelSmartBtn.addEventListener("click", () => el.smartDialog.close());
  el.closeFeedbackBtn.addEventListener("click", () => el.feedbackDialog.close());
  el.closeShareBtn.addEventListener("click", () => el.shareDialog.close());
  el.cancelShareBtn.addEventListener("click", () => el.shareDialog.close());
  el.shareForm.addEventListener("submit", saveProjectToCloud);
  el.copyShareBtn.addEventListener("click", copyShareUrl);
  el.calculateSmartBtn.addEventListener("click", calculateSmartRecommendation);
  el.applySmartBtn.addEventListener("click", applySmartRecommendation);
  el.smartForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateSmartRecommendation();
  });
  el.smartForm.addEventListener("input", () => {
    syncSmartConditionalFields();
    if (!currentSmartRecommendation) return;
    currentSmartRecommendation = null;
    el.applySmartBtn.disabled = true;
    setRecommendationStatus("需求已变更", "");
  });
  el.smartDialog.addEventListener("click", (event) => {
    if (event.target === el.smartDialog) el.smartDialog.close();
  });
  el.feedbackDialog.addEventListener("click", (event) => {
    if (event.target === el.feedbackDialog) el.feedbackDialog.close();
  });

  document.addEventListener("click", (event) => {
    if (!el.overviewMetrics.classList.contains("is-expanded") || el.overviewMetrics.contains(event.target)) return;
    setOverviewDetailExpanded(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      el.search.focus();
    }
    if (event.key === "Escape" && document.activeElement === el.search && el.search.value) {
      el.clearSearchBtn.click();
    }
    if (event.key === "Escape" && el.checkPanel.classList.contains("is-expanded")) {
      setCheckBarExpanded(false);
      el.checkBarToggle.focus();
    }
    if (event.key === "Escape" && el.overviewMetrics.classList.contains("is-expanded")) {
      setOverviewDetailExpanded(false);
      el.overviewDetailTrigger.focus();
    }
  });
}

function setOverviewDetailExpanded(expanded) {
  el.overviewMetrics.classList.toggle("is-expanded", expanded);
  el.overviewDetailTrigger.setAttribute("aria-expanded", String(expanded));
}

function setCheckBarExpanded(expanded) {
  el.checkPanel.classList.toggle("is-expanded", expanded);
  el.checkBarToggle.setAttribute("aria-expanded", String(expanded));
  el.checkToggleText.textContent = expanded ? "收起" : "展开";
}

function setupStickyMeasurements() {
  const update = () => {
    const topbarHeight = window.innerWidth > 1280 ? el.topbar.getBoundingClientRect().height : 0;
    const overviewHeight = el.overviewBar.getBoundingClientRect().height;
    const catalogControlsHeight = el.catalogStickyHeader.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--sticky-topbar-height", `${topbarHeight.toFixed(3)}px`);
    document.documentElement.style.setProperty("--sticky-overview-height", `${overviewHeight.toFixed(3)}px`);
    document.documentElement.style.setProperty("--catalog-controls-height", `${catalogControlsHeight.toFixed(3)}px`);
  };

  window.addEventListener("resize", update, { passive: true });
  if ("ResizeObserver" in window) {
    stickyResizeObserver = new ResizeObserver(update);
    stickyResizeObserver.observe(el.topbar);
    stickyResizeObserver.observe(el.overviewBar);
    stickyResizeObserver.observe(el.catalogStickyHeader);
  }
  window.requestAnimationFrame(update);
}

function applyTheme(theme, announce = false) {
  const themes = {
    cyber: { label: "深色工业", color: "#101820" },
    light: { label: "浅色工业", color: "#f3f5f4" },
  };
  const nextTheme = themes[theme] ? theme : "cyber";
  document.documentElement.dataset.theme = nextTheme;
  document.querySelector('meta[name="theme-color"]').setAttribute("content", themes[nextTheme].color);
  el.themeSwitcher.querySelectorAll("[data-theme-value]").forEach((button) => {
    const active = button.dataset.themeValue === nextTheme;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {
    // The selected theme still applies for the current session.
  }
  if (announce) showToast(`已切换为${themes[nextTheme].label}主题`);
}

function openSmartSelector() {
  currentSmartRecommendation = null;
  el.applySmartBtn.disabled = true;
  syncSmartConditionalFields();
  setRecommendationStatus("等待计算", "");
  el.recommendationResult.innerHTML = `
    <div class="engine-empty">
      <span>✦</span>
      <strong>输入需求后生成方案</strong>
      <p>系统将校核协议兼容性、模块容量、耦合器上限和设计余量。</p>
    </div>`;
  el.smartDialog.showModal();
}

function syncSmartConditionalFields() {
  const hmiSize = el.smartForm.elements.hmiSize.value;
  const controllerFamily = el.smartForm.elements.controllerFamily.value;
  const hmiAiVisible = ["10", "12", "15"].includes(hmiSize);
  const coatingVisible = controllerFamily === "t3";
  const hmiAiField = document.querySelector("#hmiAiField");
  const coatingField = document.querySelector("#coatingField");

  hmiAiField.hidden = !hmiAiVisible;
  coatingField.hidden = !coatingVisible;
  if (!hmiAiVisible) el.smartForm.elements.hmiAi.checked = false;
  if (!coatingVisible) el.smartForm.elements.coating.checked = false;
  document.querySelector("#hmiSizeField").classList.toggle("field-wide", !hmiAiVisible && !coatingVisible);
}

function calculateSmartRecommendation() {
  const requirements = readSmartRequirements();
  const recommendation = buildSmartRecommendation(requirements);
  currentSmartRecommendation = recommendation;
  renderSmartRecommendation(recommendation);
  el.applySmartBtn.disabled = recommendation.errors.length > 0 || recommendation.rows.length === 0;
}

function readSmartRequirements() {
  const data = new FormData(el.smartForm);
  const numberValue = (name) => Math.max(0, Math.floor(Number(data.get(name)) || 0));
  return {
    projectName: String(data.get("projectName") || "").trim().slice(0, 30),
    controllerFamily: String(data.get("controllerFamily") || "t4"),
    extensionProtocol: String(data.get("extensionProtocol") || "none"),
    protocol: String(data.get("protocol") || "PN"),
    ioSeries: String(data.get("ioSeries") || "auto"),
    reserve: numberValue("reserve"),
    digitalType: String(data.get("digitalType") || "PNP"),
    analogType: String(data.get("analogType") || "current"),
    hmiSize: String(data.get("hmiSize") || "none"),
    hmiAi: data.get("hmiAi") === "on",
    coating: data.get("coating") === "on",
    di: numberValue("di"),
    dq: numberValue("dq"),
    ai: numberValue("ai"),
    aq: numberValue("aq"),
    rtd: numberValue("rtd"),
    tc: numberValue("tc"),
    hsc: numberValue("hsc"),
    encoder: numberValue("encoder"),
    pulse: numberValue("pulse"),
    serial: numberValue("serial"),
  };
}

function buildSmartRecommendation(req) {
  const rows = [];
  const items = {};
  const notes = [];
  const warnings = [];
  const errors = [];
  const protocolLabels = selectionRules.protocolLabels || { PN: "PROFINET", EC: "EtherCAT", DP: "PROFIBUS DP", TCP: "Modbus TCP / S7-TCP" };
  const extensionLabels = selectionRules.extensionLabels || { none: "不需要", PN: "PROFINET", DP: "PROFIBUS DP", RN: "RapidNet" };
  const ioDemand = [req.di, req.dq, req.ai, req.aq, req.rtd, req.tc, req.hsc, req.encoder, req.pulse, req.serial].some((value) => value > 0);

  let ioSeries = req.ioSeries;
  if (ioSeries === "auto") {
    if (req.pulse > 0 && req.serial > 0) {
      errors.push("当前产品表中，脉冲输出由 TM30 提供，串口由 TD11 提供，单一远程 I/O 系列无法同时满足。请拆分站点或手动配置两套耦合器。");
      ioSeries = "td11";
    } else if (req.pulse > 0) {
      ioSeries = "tm30";
      notes.push("检测到 PTO 脉冲输出需求，自动选择具备 TM30-PO04-DS-10 的 TM30 系列。");
    } else if (["DP", "TCP"].includes(req.protocol) || req.serial > 0 || req.digitalType === "NPN") {
      ioSeries = "td11";
      notes.push("根据通讯或信号类型，自动选择接口覆盖更完整的 TD11 系列。");
    } else {
      ioSeries = "td11";
      notes.push("常规点数场景优先选择点位较少的 TD11 模块，便于精细配置并减少空余通道。");
    }
  }

  if (ioSeries === "tm30" && !["PN", "EC"].includes(req.protocol) && ioDemand) {
    errors.push(`TM30 耦合器不支持 ${protocolLabels[req.protocol]}，请改用 TD11 或调整主通讯协议。`);
  }
  if (ioSeries === "td11" && req.pulse > 0) {
    errors.push("当前 TD11 产品表中没有脉冲输出模块；有 PTO 需求时请选择 TM30，或由专用运动控制设备承担。 ");
  }
  if (ioSeries === "tm30" && req.serial > 0) {
    errors.push("当前 TM30 产品表中没有串口通讯模块；有 RS232/RS485 需求时请选择 TD11。 ");
  }
  if (ioSeries === "tm30" && req.digitalType === "NPN" && req.dq > 0) {
    errors.push("当前 TM30 输出模块参数为 PNP 输出，无法满足 NPN 数字量输出需求；请选择 TD11。 ");
  }
  if (req.controllerFamily === "t3" && req.protocol === "DP") {
    errors.push("T3 控制器产品表未提供 PROFIBUS DP 接口型号，请改用 T4 标准或 T4 冗余控制器。 ");
  }
  if (req.controllerFamily === "t3" && req.extensionProtocol !== "none") {
    errors.push("当前 T3 控制器产品表没有对应扩展通讯机型；需要扩展通讯时请选择 T4 标准控制器。 ");
  }
  if (req.controllerFamily === "redundant" && ["PN", "RN"].includes(req.extensionProtocol)) {
    errors.push(`当前 T4 冗余控制器只提供 DP 扩展型号，无法增加 ${extensionLabels[req.extensionProtocol]} 扩展接口。`);
  }
  if (req.controllerFamily !== "t3" && req.coating) {
    warnings.push("三防漆选项只在当前 T3 型号表中有明确对应型号，本次控制器推荐不应用该选项。 ");
  }
  if (req.protocol === "TCP") {
    warnings.push("TD11-C2TCP13 支持 Modbus-TCP / S7-TCP/IP；控制器侧具体协议授权和工程配置仍需单独确认。 ");
  }

  const controllerModel = chooseSmartController(req);
  if (controllerModel) {
    const extensionBasis = req.extensionProtocol === "none" ? "" : `，附加 ${extensionLabels[req.extensionProtocol]} 接口`;
    addSmartRow(rows, items, controllerModel, 1, "控制器", `${protocolLabels[req.protocol]} 主站/网络需求${extensionBasis}`);
  }

  const moduleDefinitions = getSmartModuleDefinitions(ioSeries, req);
  const demandKeys = ["di", "dq", "ai", "aq", "rtd", "tc", "hsc", "encoder", "pulse", "serial"];
  const capacitySummary = [];
  demandKeys.forEach((key) => {
    const requested = req[key];
    if (requested <= 0) return;
    const definition = moduleDefinitions[key];
    if (!definition) return;
    const target = Math.ceil(requested * (1 + req.reserve / 100));
    const quantity = Math.ceil(target / definition.capacity);
    const provided = quantity * definition.capacity;
    addSmartRow(rows, items, definition.model, quantity, "I/O 模块", `${requested} 点需求 + ${req.reserve}% 余量，配置 ${provided} 点`);
    capacitySummary.push({ key, requested, target, provided });
  });

  const ioModuleQuantity = rows
    .filter((row) => row.role === "I/O 模块")
    .reduce((sum, row) => sum + row.qty, 0);
  if (ioDemand && ioModuleQuantity > 0 && errors.length === 0) {
    const modulesPerCoupler = Math.max(1, Number(selectionRules.limits?.modulesPerCoupler) || 32);
    let couplerQuantity = Math.ceil(ioModuleQuantity / modulesPerCoupler);
    let powerQuantity = 0;
    if (ioSeries === "td11") {
      const powerSegment = Math.max(1, Number(selectionRules.limits?.td11PowerSegment) || 16);
      while (true) {
        powerQuantity = Math.max(0, Math.ceil(ioModuleQuantity / powerSegment) - couplerQuantity);
        if (ioModuleQuantity + powerQuantity <= couplerQuantity * modulesPerCoupler) break;
        couplerQuantity += 1;
      }
    }

    const couplerModel = chooseSmartCoupler(ioSeries, req.protocol);
    if (couplerModel) {
      const occupiedSlots = ioModuleQuantity + powerQuantity;
      addSmartRow(rows, items, couplerModel, couplerQuantity, "总线耦合器", `${occupiedSlots} 个模块槽位，按每站最多 ${modulesPerCoupler} 个模块计算`);
    } else {
      errors.push(`未找到 ${ioSeries.toUpperCase()} 与 ${protocolLabels[req.protocol]} 匹配的耦合器。`);
    }

    if (powerQuantity > 0) {
      const powerSegment = Math.max(1, Number(selectionRules.limits?.td11PowerSegment) || 16);
      addSmartRow(rows, items, "TD11-PS1AA13", powerQuantity, "电源中继", `每个耦合器后超过 ${powerSegment} 个模块时增加电源中继`);
    }
  }

  const hmiModel = chooseSmartHmi(req);
  if (hmiModel) {
    addSmartRow(rows, items, hmiModel, 1, "HMI", `${req.hmiSize === "7" ? "7" : `${req.hmiSize}.1`} 英寸操作界面${req.hmiAi ? "，AI 增强型" : ""}`);
  }
  if (req.hmiAi && req.hmiSize === "7") {
    warnings.push("TH32 AI 增强型当前没有 7 英寸型号，已回退为 TH22-07RT-20。 ");
  }

  notes.unshift(`控制器选择 ${controllerModel || "未匹配"}，远程 I/O 选择 ${ioSeries.toUpperCase()}，主通讯为 ${protocolLabels[req.protocol]}，PLC 扩展通讯为${extensionLabels[req.extensionProtocol]}。`);
  if (req.reserve > 0 && capacitySummary.length > 0) {
    notes.push(`所有点数均先增加 ${req.reserve}% 设计余量，再按单模块通道数向上取整。`);
  }

  return {
    name: req.projectName || `智能方案 ${state.configurations.length + 1}`,
    requirements: req,
    ioSeries,
    rows,
    items,
    notes,
    warnings,
    errors,
    capacitySummary,
  };
}

function chooseSmartController(req) {
  const configured = selectionRules.controllers || {};
  if (req.controllerFamily === "t3") {
    if (req.extensionProtocol !== "none") return "";
    const rules = configured.t3 || {};
    const base = req.protocol === "PN" ? (rules.pn || "T324-XP-CD-10") : (rules.default || "T324-XE-CD-10");
    return req.coating ? `${base}${rules.coatingSuffix || "/C"}` : base;
  }
  if (req.controllerFamily === "redundant") {
    if (["PN", "RN"].includes(req.extensionProtocol)) return "";
    const rules = configured.redundant || {};
    return req.protocol === "DP" || req.extensionProtocol === "DP"
      ? (rules.dp || "T426EH-XEP-Z1-10")
      : (rules.default || "T426EH-XEP-Z0-10");
  }
  const rules = configured.t4 || {};
  if (req.extensionProtocol === "RN") {
    return req.protocol === "DP"
      ? (rules.rnDp || "T426E-XEP-Z1-10/1PN1RN1DP")
      : (rules.rn || "T426E-XEP-Z0-10/1RN");
  }
  if (req.protocol === "DP" || req.extensionProtocol === "DP") return rules.dp || "T426E-XEP-Z1-10/1PN1DP";
  if (req.extensionProtocol === "PN") return rules.extensionPN || "T426E-XEP-Z0-10/1PN";
  return rules.default || "T426-XEP-10";
}

function chooseSmartCoupler(series, protocol) {
  const configured = selectionRules.couplers?.[series]?.[protocol];
  if (configured) return configured;
  const models = {
    tm30: { PN: "TM30-C1PN-10", EC: "TM30-C1EC-10" },
    td11: { PN: "TD11-C2PNT13", EC: "TD11-C2ECT13", DP: "TD11-C2DPT13", TCP: "TD11-C2TCP13" },
  };
  return models[series]?.[protocol] || "";
}

function getSmartModuleDefinitions(series, req) {
  const configured = selectionRules.modules?.[series];
  if (configured) {
    const resolve = (definition, variant) => {
      if (!definition) return undefined;
      if (definition.model) return definition;
      return definition[variant] || definition.PNP || definition.current || Object.values(definition)[0];
    };
    return {
      di: resolve(configured.di, req.digitalType),
      dq: resolve(configured.dq, req.digitalType),
      ai: resolve(configured.ai, req.analogType),
      aq: resolve(configured.aq, req.analogType),
      rtd: resolve(configured.rtd),
      tc: resolve(configured.tc),
      hsc: resolve(configured.hsc),
      encoder: resolve(configured.encoder),
      pulse: resolve(configured.pulse),
      serial: resolve(configured.serial),
    };
  }
  if (series === "tm30") {
    return {
      di: { model: req.digitalType === "NPN" ? "TM30-DI16-NN-20" : "TM30-DI16-PP-20", capacity: 16 },
      dq: { model: "TM30-DQ16-PP-20", capacity: 16 },
      ai: { model: "TM30-AI04-UI-10", capacity: 4 },
      aq: { model: "TM30-AQ04-UI-10", capacity: 4 },
      rtd: { model: "TM30-TR04-10", capacity: 4 },
      tc: { model: "TM30-TC04-10", capacity: 4 },
      hsc: { model: "TM30-HC02-DF-10", capacity: 2 },
      encoder: { model: "TM30-SI02-DF-10", capacity: 2 },
      pulse: { model: "TM30-PO04-DS-10", capacity: 4 },
    };
  }
  return {
    di: { model: "TD11-DI16M13", capacity: 16 },
    dq: { model: req.digitalType === "NPN" ? "TD11-DQ16N13" : "TD11-DQ16P13", capacity: 16 },
    ai: { model: req.analogType === "voltage" ? "TD11-AI04U23" : "TD11-AI04I23", capacity: 4 },
    aq: { model: req.analogType === "voltage" ? "TD11-AQ04U23" : "TD11-AQ04I23", capacity: 4 },
    rtd: { model: "TD11-AT4RD23", capacity: 4 },
    tc: { model: "TD11-AT4TC23", capacity: 4 },
    hsc: { model: "TD11-F2CNT23", capacity: 2 },
    encoder: { model: "TD11-F2SSI23", capacity: 2 },
    serial: { model: "TD11-F2COM21", capacity: 2 },
  };
}

function chooseSmartHmi(req) {
  if (req.hmiSize === "none") return "";
  const configured = selectionRules.hmi || {};
  if (req.hmiAi && req.hmiSize !== "7") {
    return configured.ai?.[req.hmiSize] || `TH32-${req.hmiSize}RT-10`;
  }
  const standard = {
    7: "TH22-07RT-20",
    10: "TH22-10RT-20",
    12: "TH22-12RT-20",
    15: "TH22-15RT-20",
  };
  return configured.standard?.[req.hmiSize] || standard[req.hmiSize] || "";
}

function addSmartRow(rows, items, model, qty, role, basis) {
  if (!model || qty <= 0) return;
  const product = PRODUCTS.find((item) => item.model === model);
  if (!product) return;
  items[model] = (items[model] || 0) + qty;
  const existing = rows.find((row) => row.model === model && row.role === role);
  if (existing) {
    existing.qty += qty;
    existing.basis = basis;
  } else {
    rows.push({ model, qty, role, basis, product });
  }
}

function renderSmartRecommendation(recommendation) {
  const { rows, notes, warnings, errors, capacitySummary, ioSeries } = recommendation;
  setRecommendationStatus(errors.length ? `${errors.length} 项冲突` : "计算完成", errors.length ? "error" : "ready");
  const capacityLabels = { di: "DI", dq: "DO", ai: "AI", aq: "AO", rtd: "热电阻", tc: "热电偶", hsc: "高速计数", encoder: "SSI", pulse: "PTO", serial: "串口" };

  el.recommendationResult.innerHTML = `
    <div class="recommendation-summary">
      <strong>${errors.length ? "方案存在兼容性冲突" : `推荐 ${ioSeries.toUpperCase()} 远程 I/O 方案`}</strong>
      <span>${rows.length} 个型号，${rows.reduce((sum, row) => sum + row.qty, 0)} 件设备 / 模块</span>
    </div>
    ${rows.length ? `
      <table class="recommendation-table">
        <thead><tr><th>推荐型号</th><th>用途与依据</th><th>数量</th></tr></thead>
        <tbody>${rows.map((row) => `
          <tr>
            <td>${escapeHtml(row.model)}</td>
            <td><strong>${escapeHtml(row.role)}</strong><br><span>${escapeHtml(row.basis)}</span></td>
            <td>×${row.qty}</td>
          </tr>`).join("")}</tbody>
      </table>` : ""}
    ${capacitySummary.length ? `
      <div class="capacity-grid">
        ${capacitySummary.map((item) => `<div><span>${escapeHtml(capacityLabels[item.key])} 需求 / 含余量 / 实配</span><strong>${item.requested} / ${item.target} / ${item.provided}</strong></div>`).join("")}
      </div>` : ""}
    <ul class="recommendation-notes">
      ${notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
      ${warnings.map((warning) => `<li class="warn">${escapeHtml(warning)}</li>`).join("")}
      ${errors.map((error) => `<li class="error">${escapeHtml(error)}</li>`).join("")}
    </ul>`;
}

function setRecommendationStatus(text, type) {
  el.recommendationStatus.textContent = text;
  el.recommendationStatus.className = `engine-status${type ? ` is-${type}` : ""}`;
}

function applySmartRecommendation() {
  if (!currentSmartRecommendation || currentSmartRecommendation.errors.length > 0) return;
  const config = createConfiguration(currentSmartRecommendation.name);
  config.items = { ...currentSmartRecommendation.items };
  state.configurations.push(config);
  state.activeConfigId = config.id;
  state.step = "all";
  state.family = "全部";
  state.network = "全部";
  persistConfigurations();
  el.smartDialog.close();
  render();
  showToast(`智能方案“${config.name}”已生成`);
}

function resetFilters() {
  state.query = "";
  state.family = "全部";
  state.network = "全部";
  state.step = "plc";
  state.sort = "default";
  state.selectedOnly = false;
  el.search.value = "";
  el.familyFilter.value = "全部";
  el.networkFilter.value = "全部";
  el.sortFilter.value = "default";
  el.selectedOnlyToggle.checked = false;
  render();
  showToast("筛选条件已重置");
}

function setFamily(family) {
  state.family = family;
  if (family !== "全部") {
    const product = PRODUCTS.find((item) => item.family === family);
    const productStep = product ? getProductStep(product) : "all";
    if (state.step !== "all" && productStep !== state.step) {
      state.step = productStep;
    }
  }
  if (!usesNetworkFilter()) {
    state.network = "全部";
    el.networkFilter.value = "全部";
  }
  el.familyFilter.value = family;
  render();
}

function setStep(step) {
  state.step = step;
  if (!usesNetworkFilter()) {
    state.network = "全部";
    el.networkFilter.value = "全部";
  }
  if (state.family !== "全部" && !PRODUCTS.some((product) => product.family === state.family && matchesStep(product))) {
    state.family = "全部";
    el.familyFilter.value = "全部";
  }
  renderProducts();
}

function render() {
  renderCartTabs();
  renderProducts();
  renderConfiguration();
  renderOverview();
}

function renderCartTabs() {
  el.cartTabs.innerHTML = state.configurations
    .map((config) => {
      const itemCount = Object.values(config.items).reduce((sum, qty) => sum + Number(qty || 0), 0);
      return `
        <button type="button" data-cart-id="${escapeAttr(config.id)}" class="${config.id === state.activeConfigId ? "is-active" : ""}">
          <strong>${escapeHtml(config.name)}</strong>
          <span>${itemCount} 件</span>
        </button>`;
    })
    .join("");
  el.deleteCartBtn.disabled = state.configurations.length <= 1;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  el.resultCount.textContent = `${filtered.length} 个型号`;
  el.networkFilterWrap.hidden = !usesNetworkFilter();
  el.stepTabs.querySelectorAll("[data-step]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.step === state.step);
  });
  el.familyTabs.querySelectorAll("[data-family]").forEach((button) => {
    const matchesCurrentStep = button.dataset.familyStep === state.step || state.step === "all" || button.dataset.family === "全部";
    button.classList.toggle("is-active", button.dataset.family === state.family);
    button.classList.toggle("is-step-match", matchesCurrentStep);
    button.classList.toggle("is-step-other", !matchesCurrentStep);
  });

  el.rows.innerHTML = filtered.length
    ? filtered.map(productRow).join("")
    : `<tr class="empty-results"><td colspan="5">没有匹配的产品，请调整搜索或筛选条件。</td></tr>`;
}

function getFilteredProducts() {
  const filtered = PRODUCTS.filter((product) => {
    const matchesCurrentStep = matchesStep(product);
    const matchesFamily = state.family === "全部" || product.family === state.family;
    const matchesNetwork = state.network === "全部" || getNetworkTokens(product).has(state.network);
    const haystack = `${product.family} ${product.group} ${product.model} ${product.name} ${product.summary} ${product.tags.join(" ")}`.toLowerCase();
    const matchesQuery = !state.query || haystack.includes(state.query);
    const matchesSelected = !state.selectedOnly || getQty(product.model) > 0;
    return matchesCurrentStep && matchesFamily && matchesNetwork && matchesQuery && matchesSelected;
  });

  if (state.sort === "model") {
    return filtered.sort((a, b) => a.model.localeCompare(b.model, "zh-CN", { numeric: true }));
  }
  if (state.sort === "selected") {
    return filtered.sort((a, b) => getQty(b.model) - getQty(a.model));
  }
  return filtered;
}

function getProductStep(product) {
  if (product.family.includes("远程 IO")) return "remote";
  if (product.family.includes("HMI")) return "hmi";
  if (product.family.includes("控制器")) return "plc";
  return "all";
}

function getFamilyStep(family) {
  if (family === "全部") return "all";
  const product = PRODUCTS.find((item) => item.family === family);
  return product ? getProductStep(product) : "all";
}

function matchesStep(product) {
  return state.step === "all" || getProductStep(product) === state.step;
}

function usesNetworkFilter() {
  return state.step === "plc" || state.step === "remote";
}

function getStepLabel(step) {
  const labels = {
    plc: "PLC",
    remote: "远程 IO",
    hmi: "HMI",
    all: "全部",
  };
  return labels[step] || "其他";
}

function getNetworkTokens(product) {
  const text = `${product.model} ${product.summary} ${product.tags.join(" ")}`.toUpperCase();
  const tokens = new Set();

  if (/(^|[^A-Z0-9])GE([^A-Z0-9]|$)|千兆|以太网/.test(text)) tokens.add("GE");
  if (/(^|[^A-Z0-9])EC([^A-Z0-9]|$)|ETHERCAT/.test(text)) tokens.add("EC");
  if (/(^|[^A-Z0-9])PN([^A-Z0-9]|$)|PROFINET|POFINET/.test(text)) tokens.add("PN");
  if (/(^|[^A-Z0-9])DP([^A-Z0-9]|$)|PROFIBUS/.test(text)) tokens.add("DP");
  if (/(^|[^A-Z0-9])RN([^A-Z0-9]|$)|RAPIDNET/.test(text)) tokens.add("RN");
  if (/(^|[^A-Z0-9])HM([^A-Z0-9]|$)|冗余光纤|冗余通讯/.test(text)) tokens.add("HM");
  if (/无扩展通讯|无扩展通讯端口|无扩展 DP 端口|无扩展DP端口/.test(product.summary)) tokens.add("NO_EXT");

  return tokens;
}

function getActiveProtocolRecommendations() {
  const protocols = new Set();

  if (remoteIoCompatibility[state.network]) {
    protocols.add(state.network);
  }

  getSelectedProducts().forEach((product) => {
    if (!product.metrics?.controller && !product.metrics?.commModule) return;
    const tokens = getNetworkTokens(product);
    Object.keys(remoteIoCompatibility).forEach((protocol) => {
      if (tokens.has(protocol)) protocols.add(protocol);
    });
  });

  return [...protocols].map((protocol) => ({
    protocol,
    ...remoteIoCompatibility[protocol],
  }));
}

function getRemoteIoRecommendation(product) {
  return getActiveProtocolRecommendations().find((item) => item.models.includes(product.model));
}

function productRow(product) {
  const qty = getQty(product.model);
  const recommendation = getRemoteIoRecommendation(product);
  const rowTags = recommendation ? [...product.tags, `推荐 ${recommendation.label}`] : product.tags;
  const tags = rowTags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  return `
    <tr class="${[qty > 0 ? "is-selected" : "", recommendation ? "is-recommended" : ""].filter(Boolean).join(" ")}">
      <td class="family">${escapeHtml(product.family)}<br><span class="muted">${escapeHtml(product.group)}</span></td>
      <td class="model">${escapeHtml(product.model)}</td>
      <td class="name">${escapeHtml(product.name)}</td>
      <td class="summary">${escapeHtml(product.summary)}<div class="tags">${tags}</div></td>
      <td class="qty-cell">
        <div class="qty-control" aria-label="${escapeAttr(product.model)} 数量">
          <button type="button" data-action="dec" data-model="${escapeAttr(product.model)}" title="减少">−</button>
          <input type="number" min="0" max="9999" step="1" inputmode="numeric" value="${qty}" data-qty data-model="${escapeAttr(product.model)}" aria-label="${escapeAttr(product.model)} 数量" />
          <button type="button" data-action="inc" data-model="${escapeAttr(product.model)}" title="增加">+</button>
        </div>
      </td>
    </tr>`;
}

function renderConfiguration() {
  const selected = getSelectedProducts();
  const totals = getTotals(selected);
  const totalQty = selected.reduce((sum, item) => sum + item.qty, 0);
  const activeConfig = getActiveConfiguration();
  el.selectedCount.textContent = `${activeConfig.name}：${selected.length} 个型号，${totalQty} 件`;
  el.exportBtn.disabled = getAllSelectedRows().length === 0;

  el.cartList.innerHTML =
    selected.length === 0
      ? `<div class="empty-state">暂无配置</div>`
      : renderSelectedGroups(selected);

  el.metricList.innerHTML = overviewMetricLabels
    .map(([key, label]) => {
      const value = totals[key] || 0;
      return `<div class="${value > 0 ? "is-active" : ""}"><dt>${escapeHtml(label)}</dt><dd>${value}</dd></div>`;
    })
    .join("");

  el.overviewDetailTitle.textContent = activeConfig.name;
  el.overviewDetailCount.textContent = `${selected.length} 个型号 · ${totalQty} 件`;
  el.overviewDetailMetrics.innerHTML = metricLabels
    .map(([key, label]) => {
      const value = totals[key] || 0;
      return `<div class="${value > 0 ? "is-active" : ""}"><dt>${escapeHtml(label)}</dt><dd>${value}</dd></div>`;
    })
    .join("");

  const compatibility = buildCompatibilityReport(selected);
  el.checkPanel.dataset.status = compatibility.status;
  el.checkSummaryStat.textContent = compatibility.summary;
  el.checkPreview.textContent = compatibility.preview;
  el.compatibilityStats.innerHTML = compatibility.stats
    .map((stat) => `
      <div data-tone="${escapeAttr(stat.tone)}">
        <span>${escapeHtml(stat.label)}</span>
        <strong>${escapeHtml(stat.value)}</strong>
      </div>`)
    .join("");
  el.warningList.innerHTML = compatibility.checks.length
    ? compatibility.checks.map((check) => {
        const icons = { error: "×", warn: "!", info: "i", ok: "✓" };
        return `
          <li class="${escapeAttr(check.type)}">
            <span class="check-message-icon" aria-hidden="true">${icons[check.type] || "i"}</span>
            <span class="check-message-copy">
              <small>${escapeHtml(check.category)}</small>
              <strong>${escapeHtml(check.title)}</strong>
              <span>${escapeHtml(check.text)}</span>
              ${check.action ? `
                <button
                  class="compatibility-action"
                  type="button"
                  data-compat-action="${escapeAttr(check.action.type)}"
                  data-model="${escapeAttr(check.action.model)}"
                  data-qty="${check.action.qty}"
                >${escapeHtml(check.action.label)}</button>` : ""}
            </span>
          </li>`;
      }).join("")
    : `
      <li class="ready">
        <span class="check-message-icon" aria-hidden="true">·</span>
        <span class="check-message-copy"><strong>等待选型</strong><span>加入设备后将自动生成兼容性报告。</span></span>
      </li>`;

  renderProgress(selected);
}

function renderOverview() {
  const selected = getSelectedProducts();
  const totalQty = selected.reduce((sum, item) => sum + item.qty, 0);
  const compatibility = buildCompatibilityReport(selected);
  let healthText = "等待选型";
  let healthStatus = "ready";
  el.configCountStat.textContent = state.configurations.length;
  el.selectedItemStat.textContent = totalQty;
  el.healthStat.className = "health-stat";

  if (selected.length === 0) {
    el.healthStat.classList.add("is-ready");
  } else if (compatibility.errors > 0) {
    healthText = `${compatibility.errors} 项兼容冲突`;
    healthStatus = "error";
    el.healthStat.classList.add("is-error");
  } else if (compatibility.warnings > 0) {
    healthText = `${compatibility.warnings} 项待确认`;
    healthStatus = "warn";
    el.healthStat.classList.add("is-warn");
  } else {
    healthText = "配置状态正常";
    healthStatus = "ok";
    el.healthStat.classList.add("is-ok");
  }

  el.healthStat.querySelector("strong").textContent = healthText;
  el.mobileSelectedSummary.textContent = `${selected.length} 个型号 · ${totalQty} 件`;
  el.mobileHealthText.textContent = healthText;
  el.mobileQuickNav.dataset.status = healthStatus;
}

function setMobileNavActive(targetId) {
  el.mobileQuickNav.querySelectorAll("[data-scroll-target]").forEach((button) => {
    const isActive = button.dataset.scrollTarget === targetId;
    button.classList.toggle("is-active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

function renderProgress(selected) {
  const progress = [
    ["plc", "PLC"],
    ["remote", "远程 IO"],
    ["hmi", "HMI"],
  ];
  el.progressTracker.innerHTML = progress
    .map(([step, label]) => {
      const complete = selected.some((item) => getProductStep(item) === step);
      return `<div class="progress-step ${complete ? "is-complete" : ""}">${complete ? "✓ " : ""}${label}</div>`;
    })
    .join("");
}

function renderSelectedGroups(selected) {
  const groups = [
    ["plc", "PLC"],
    ["remote", "远程 IO"],
    ["hmi", "HMI"],
  ];

  return groups
    .map(([step, label]) => {
      const items = selected.filter((item) => getProductStep(item) === step);
      if (items.length === 0) {
        return `
          <section class="cart-stage">
            <h4>${escapeHtml(label)}</h4>
            <div class="stage-empty">未选择</div>
          </section>`;
      }
      return `
        <section class="cart-stage">
          <h4>${escapeHtml(label)}</h4>
          ${items
            .map(
              (item) => `
            <div class="cart-item">
              <div>
                <strong>${escapeHtml(item.model)}</strong>
                <span>${escapeHtml(item.name)} · ${escapeHtml(item.family)}</span>
              </div>
              <div class="cart-item-actions">
                <div class="item-qty">×${item.qty}</div>
                <button type="button" data-cart-remove="${escapeAttr(item.model)}" title="移除 ${escapeAttr(item.model)}" aria-label="移除 ${escapeAttr(item.model)}">×</button>
              </div>
            </div>`,
            )
            .join("")}
        </section>`;
    })
    .join("");
}

function getSelectedProducts() {
  const activeItems = getActiveConfiguration().items;
  return PRODUCTS.filter((product) => Number(activeItems[product.model] || 0) > 0).map((product) => ({
    ...product,
    qty: Number(activeItems[product.model] || 0),
  }));
}

function getSelectedProductsForConfiguration(config) {
  return PRODUCTS.filter((product) => Number(config.items[product.model] || 0) > 0).map((product) => ({
    ...product,
    qty: Number(config.items[product.model] || 0),
  }));
}

function getAllSelectedRows() {
  return state.configurations.flatMap((config) =>
    PRODUCTS.filter((product) => Number(config.items[product.model] || 0) > 0).map((product) => ({
      ...product,
      configId: config.id,
      configName: config.name,
      qty: Number(config.items[product.model] || 0),
    })),
  );
}

function getTotals(selected) {
  return selected.reduce((totals, product) => {
    Object.entries(product.metrics || {}).forEach(([key, value]) => {
      totals[key] = (totals[key] || 0) + value * product.qty;
    });
    totals.items = (totals.items || 0) + product.qty;
    return totals;
  }, {});
}

function getCompatibilityRules() {
  const configured = selectionRules.compatibility || {};
  const configuredSeries = configured.series || {};
  return {
    series: Object.fromEntries(
      Object.entries(compatibilityDefaults.series).map(([key, value]) => [
        key,
        {
          ...value,
          ...(configuredSeries[key] || {}),
          couplers: { ...value.couplers, ...(configuredSeries[key]?.couplers || {}) },
        },
      ]),
    ),
    couplerProtocols: { ...compatibilityDefaults.couplerProtocols, ...(configured.couplerProtocols || {}) },
  };
}

function getControllerExpansionCapacity(product) {
  const capacity = { PN: 0, DP: 0, RN: 0, HM: 0 };
  if (product.family === "T4 冗余控制器") {
    capacity.HM = 1;
    capacity.DP = /-Z2-/i.test(product.model) ? 2 : /-Z1-/i.test(product.model) ? 1 : 0;
    return capacity;
  }
  if (product.family !== "T4 标准控制器" || !product.model.startsWith("T426E")) return capacity;
  const suffix = product.model.split("/")[1] || "";
  [...suffix.matchAll(/(\d+)(PN|DP|RN)/gi)].forEach((match) => {
    capacity[match[2].toUpperCase()] += Number(match[1]);
  });
  return capacity;
}

function getCommModuleRequirements(product) {
  return Object.fromEntries(
    ["PN", "DP", "RN", "HM"].map((token) => [token, product.model.match(new RegExp(token, "gi"))?.length || 0]),
  );
}

function getControllerNetworkTokens(product) {
  const tokens = getNetworkTokens(product);
  if (["T4 标准控制器", "T4 冗余控制器"].includes(product.family)) {
    tokens.add("GE");
    tokens.add("EC");
    tokens.add("PN");
  }
  return tokens;
}

function chooseMissingCoupler(seriesKey, controllers) {
  const seriesRule = getCompatibilityRules().series[seriesKey];
  if (!seriesRule || controllers.length === 0) return "";
  const controllerProtocols = new Set();
  controllers.forEach((controller) => {
    getControllerNetworkTokens(controller).forEach((token) => controllerProtocols.add(token));
  });
  return ["PN", "EC", "DP", "TCP"]
    .map((protocol) => ({ protocol, model: seriesRule.couplers[protocol] }))
    .find((item) => item.model && (item.protocol === "TCP" ? controllerProtocols.has("GE") : controllerProtocols.has(item.protocol)))?.model || "";
}

function calculateTd11Layout(nonPowerModules, couplerFloor, maxModulesPerCoupler, powerSegment) {
  let couplers = Math.max(couplerFloor, nonPowerModules > 0 ? Math.ceil(nonPowerModules / maxModulesPerCoupler) : 0);
  let powerRelays = 0;
  while (couplers > 0) {
    powerRelays = Math.max(0, Math.ceil(nonPowerModules / powerSegment) - couplers);
    if (nonPowerModules + powerRelays <= couplers * maxModulesPerCoupler) break;
    couplers += 1;
  }
  return { couplers, powerRelays };
}

function buildCompatibilityReport(selected) {
  const rules = getCompatibilityRules();
  const totals = getTotals(selected);
  const checks = [];
  const controllers = selected.filter((product) => product.metrics?.controller);
  const commModules = selected.filter((product) => product.metrics?.commModule);
  const controllerQuantity = controllers.reduce((sum, product) => sum + product.qty, 0);
  const couplerQuantity = selected
    .filter((product) => product.metrics?.coupler)
    .reduce((sum, product) => sum + product.qty, 0);
  const maxModulesPerCoupler = Math.max(1, Number(selectionRules.limits?.modulesPerCoupler) || 32);
  const td11PowerSegment = Math.max(1, Number(selectionRules.limits?.td11PowerSegment) || 16);
  const td11FastPerCoupler = Math.max(1, Number(selectionRules.limits?.td11FastPerCoupler) || 4);
  const td11Rule = rules.series.td11;
  const td11Couplers = Number(totals[td11Rule.couplerMetric] || 0);
  const td11NonPowerModules = selected
    .filter((product) => product.metrics?.td11Module && !product.metrics?.td11Power)
    .reduce((sum, product) => sum + product.qty, 0);
  const providedTd11Power = Number(totals.td11Power || 0);
  const td11Layout = calculateTd11Layout(td11NonPowerModules, td11Couplers, maxModulesPerCoupler, td11PowerSegment);
  let usedSlots = 0;
  let slotCapacity = 0;
  let hasSlotLayoutError = false;

  const addCheck = (type, category, title, text, action = null) => {
    checks.push({ type, category, title, text, action });
  };

  if (selected.length === 0) {
    return {
      status: "ready",
      summary: "等待选型",
      preview: "选择设备后实时检查协议、槽位和缺失配件。",
      stats: [
        { label: "控制器", value: "未配置", tone: "ready" },
        { label: "远程站", value: "0", tone: "ready" },
        { label: "模块槽位", value: "0 / —", tone: "ready" },
        { label: "扩展余量", value: "—", tone: "ready" },
      ],
      checks,
      errors: 0,
      warnings: 0,
    };
  }

  if (controllers.length === 0) {
    addCheck("error", "控制器", "缺少 PLC 控制器", "当前方案已有外围设备，但没有可用于协议校核的 CPU。请先选择控制器。 ");
  } else if (controllers.length > 1) {
    addCheck("warn", "控制器", "包含多个 CPU 型号", `当前共选择 ${controllers.length} 个 CPU 型号，协议能力按并集检查。若它们属于不同控制系统，建议拆分为多个配置方案。`);
  } else {
    addCheck("ok", "控制器", "CPU 已确认", `${controllers[0].model} 将作为当前配置的接口能力基准。`);
  }

  const controllerProtocols = new Set();
  controllers.forEach((controller) => {
    getControllerNetworkTokens(controller).forEach((token) => controllerProtocols.add(token));
  });

  Object.entries(rules.series).forEach(([seriesKey, seriesRule]) => {
    const moduleCount = Number(totals[seriesRule.moduleMetric] || 0);
    const seriesCouplerCount = Number(totals[seriesRule.couplerMetric] || 0);
    const seriesCouplers = selected.filter((product) => product.metrics?.[seriesRule.couplerMetric]);
    const capacity = seriesCouplerCount * maxModulesPerCoupler;
    const requiredCouplerCount = Math.max(
      Math.ceil(moduleCount / maxModulesPerCoupler),
      seriesKey === "td11" ? td11Layout.couplers : 0,
    );
    usedSlots += moduleCount;
    slotCapacity += capacity;

    if (moduleCount > 0 && seriesCouplerCount === 0) {
      const missingQuantity = requiredCouplerCount;
      const missingModel = chooseMissingCoupler(seriesKey, controllers);
      const action = missingModel
        ? { type: "add", model: missingModel, qty: missingQuantity, label: `补齐 ${missingModel} ×${missingQuantity}` }
        : null;
      addCheck(
        "error",
        "远程 I/O",
        `${seriesRule.label} 缺少耦合器`,
        `已选 ${moduleCount} 个 ${seriesRule.label} 扩展模块，但没有同系列耦合器。${missingModel ? `按当前 CPU 接口可使用 ${missingModel}。` : "请先确认 CPU 主通讯协议。"}`,
        action,
      );
    }

    if (seriesCouplerCount > 0 && moduleCount === 0) {
      addCheck("warn", "远程 I/O", `${seriesRule.label} 远程站尚未配置模块`, `已选 ${seriesCouplerCount} 个耦合器，但其后没有 ${seriesRule.label} I/O 或电源模块。`);
    }

    if (seriesCouplerCount > 0 && requiredCouplerCount > seriesCouplerCount) {
      hasSlotLayoutError = true;
      const missingQuantity = requiredCouplerCount - seriesCouplerCount;
      const selectedModels = [...new Set(seriesCouplers.map((product) => product.model))];
      const missingModel = selectedModels.length === 1 ? selectedModels[0] : chooseMissingCoupler(seriesKey, controllers);
      const action = missingModel
        ? { type: "add", model: missingModel, qty: missingQuantity, label: `增加 ${missingModel} ×${missingQuantity}` }
        : null;
      const currentRequiredPower = seriesKey === "td11"
        ? Math.max(0, Math.ceil(td11NonPowerModules / td11PowerSegment) - seriesCouplerCount)
        : 0;
      const projectedSlots = seriesKey === "td11"
        ? td11NonPowerModules + Math.max(providedTd11Power, currentRequiredPower)
        : moduleCount;
      addCheck(
        "error",
        "槽位容量",
        `${seriesRule.label} 模块超过耦合器上限`,
        `按当前供电分段预计占用 ${projectedSlots} / ${capacity} 个槽位，至少需要 ${requiredCouplerCount} 个耦合器；单站最多带 ${maxModulesPerCoupler} 个扩展模块。`,
        action,
      );
    } else if (seriesCouplerCount > 0 && moduleCount > 0) {
      const remaining = capacity - moduleCount;
      addCheck(
        remaining <= 4 ? "warn" : "ok",
        "槽位容量",
        `${seriesRule.label} 槽位 ${moduleCount} / ${capacity}`,
        remaining > 0 ? `当前仍可扩展 ${remaining} 个模块槽位。` : "当前没有剩余模块槽位，继续扩展需要增加远程站。",
      );
    }

    seriesCouplers.forEach((coupler) => {
      const protocol = rules.couplerProtocols[coupler.model];
      if (!protocol || controllers.length === 0) return;
      const protocolLabel = selectionRules.protocolLabels?.[protocol] || protocol;
      if (protocol === "TCP") {
        if (!controllerProtocols.has("GE")) {
          addCheck("error", "接口协议", `${coupler.model} 缺少控制器侧以太网接口`, "该 TCP 耦合器需要控制器侧具备可用以太网接口。 ");
        } else {
          addCheck("warn", "接口协议", `${protocolLabel} 需工程确认`, `${coupler.model} 可接入以太网，但控制器侧具体协议授权、连接资源和工程配置仍需确认。`);
        }
      } else if (!controllerProtocols.has(protocol)) {
        addCheck("error", "接口协议", `${protocolLabel} 接口不匹配`, `${coupler.model} 需要 ${protocolLabel}，当前所选 CPU 型号未显示对应接口。`);
      } else {
        addCheck("ok", "接口协议", `${protocolLabel} 接口匹配`, `${coupler.model} 与当前 CPU 的 ${protocolLabel} 接口能力一致。`);
      }
    });
  });

  commModules.forEach((module) => {
    const matchingControllers = controllers.filter((controller) => controller.family === module.family);
    if (matchingControllers.length === 0) {
      addCheck("error", "通讯模块", `${module.model} 系列不匹配`, `该通讯模块备件属于${module.family}，当前没有选择同系列 CPU。`);
      return;
    }
    const requiredCapacity = getCommModuleRequirements(module);
    const compatibleController = matchingControllers.find((controller) => {
      const availableCapacity = getControllerExpansionCapacity(controller);
      return Object.entries(requiredCapacity).every(([token, quantity]) => availableCapacity[token] >= quantity);
    });
    if (!compatibleController) {
      addCheck("error", "通讯模块", `${module.model} 与 CPU 扩展配置不一致`, "通讯模块上的扩展接口组合未在当前同系列 CPU 型号中找到对应配置。");
    } else {
      addCheck("info", "通讯模块", `${module.model} 备件匹配`, `与 ${compatibleController.model} 的扩展接口组合一致；该产品为通讯模块备件，不会额外增加 CPU 接口数量。`);
    }
  });

  const requiredTd11Power = td11Layout.powerRelays;
  if (requiredTd11Power > providedTd11Power) {
    const missingQuantity = requiredTd11Power - providedTd11Power;
    addCheck(
      "warn",
      "缺失配件",
      "TD11 电源中继不足",
      `${td11NonPowerModules} 个扩展模块按每段 ${td11PowerSegment} 个估算，至少需要 ${requiredTd11Power} 个 ${td11Rule.powerRelayModel}，当前已配置 ${providedTd11Power} 个。`,
      { type: "add", model: td11Rule.powerRelayModel, qty: missingQuantity, label: `补齐 ${td11Rule.powerRelayModel} ×${missingQuantity}` },
    );
  } else if (requiredTd11Power > 0) {
    addCheck("ok", "供电分段", "TD11 电源中继数量满足规则", `已配置 ${providedTd11Power} 个 ${td11Rule.powerRelayModel}，规则估算至少需要 ${requiredTd11Power} 个。`);
  }

  if (td11Couplers > 0 && Number(totals.td11FastModule || 0) > td11Couplers * td11FastPerCoupler) {
    addCheck("warn", "高速模块", "TD11 高速模块密度需确认", `高速计数 / SSI 模块共 ${totals.td11FastModule} 个，超过每个耦合器 ${td11FastPerCoupler} 个的规则建议。`);
  }

  const bundledAccessoryQuantity = selected
    .filter((product) => product.model === td11Rule.bundledAccessoryModel)
    .reduce((sum, product) => sum + product.qty, 0);
  if (td11Couplers > 0 && bundledAccessoryQuantity > 0) {
    addCheck(
      "warn",
      "辅件",
      "终端盖板可能重复配置",
      `${td11Rule.bundledAccessoryModel} 随 TD11 耦合器配套发货，通常无需额外订购。`,
      { type: "remove", model: td11Rule.bundledAccessoryModel, qty: bundledAccessoryQuantity, label: "移除额外终端盖板" },
    );
  } else if (td11Couplers > 0) {
    addCheck("info", "辅件", "终端盖板无需单独补齐", `${td11Rule.bundledAccessoryModel} 随 TD11 耦合器配套发货，当前未计入额外采购。`);
  } else if (bundledAccessoryQuantity > 0) {
    addCheck(
      "warn",
      "辅件",
      "终端盖板没有对应 TD11 耦合器",
      `当前单独选择了 ${td11Rule.bundledAccessoryModel}，但方案中没有 TD11 耦合器。`,
      { type: "remove", model: td11Rule.bundledAccessoryModel, qty: bundledAccessoryQuantity, label: "移除孤立辅件" },
    );
  }

  const tm30NonPowerModules = selected
    .filter((product) => product.metrics?.tm30Module && product.model !== rules.series.tm30.powerRelayModel)
    .reduce((sum, product) => sum + product.qty, 0);
  const tm30PowerSelected = selected.some((product) => product.model === rules.series.tm30.powerRelayModel);
  if (tm30NonPowerModules > 0 && !tm30PowerSelected) {
    addCheck("info", "供电分段", "TM30 电源分段需按负载确认", "当前产品表未给出固定数量阈值，是否增加 TM30 电源中继需结合 24VDC 负载和现场分段设计确认。 ");
  }

  const order = { error: 0, warn: 1, info: 2, ok: 3 };
  checks.sort((a, b) => order[a.type] - order[b.type]);
  const errors = checks.filter((check) => check.type === "error").length;
  const warnings = checks.filter((check) => check.type === "warn").length;
  const status = errors ? "error" : warnings ? "warn" : "ok";
  const headline = errors ? `${errors} 项兼容冲突` : warnings ? `${warnings} 项待确认` : "兼容性检查通过";
  const previewCheck = checks.find((check) => ["error", "warn"].includes(check.type)) || checks[0];
  const remainingSlots = slotCapacity - usedSlots;

  return {
    status,
    summary: headline,
    preview: previewCheck?.text || "当前未发现协议、槽位或配件问题。",
    stats: [
      { label: "控制器", value: controllerQuantity ? `${controllerQuantity} 台` : "未配置", tone: controllerQuantity ? "ok" : "error" },
      { label: "远程站", value: `${couplerQuantity}`, tone: couplerQuantity ? "ok" : "ready" },
      { label: "模块槽位", value: slotCapacity ? `${usedSlots} / ${slotCapacity}` : `${usedSlots} / —`, tone: usedSlots > slotCapacity || hasSlotLayoutError ? "error" : "ok" },
      { label: "扩展余量", value: slotCapacity ? `${Math.max(0, remainingSlots)} 槽` : "—", tone: remainingSlots < 0 || hasSlotLayoutError ? "error" : remainingSlots <= 4 && slotCapacity ? "warn" : "ok" },
    ],
    checks,
    errors,
    warnings,
  };
}

function getQty(model) {
  return Number(getActiveConfiguration().items[model] || 0);
}

function setQty(model, rawQty) {
  const qty = Math.min(9999, Math.max(0, Math.floor(Number(rawQty) || 0)));
  const activeItems = getActiveConfiguration().items;
  if (qty === 0) {
    delete activeItems[model];
  } else {
    activeItems[model] = qty;
  }
  persistConfigurations();
  render();
}

function getActiveConfiguration() {
  let active = state.configurations.find((config) => config.id === state.activeConfigId);
  if (!active) {
    active = state.configurations[0] || createConfiguration("配置方案 1");
    if (state.configurations.length === 0) state.configurations.push(active);
    state.activeConfigId = active.id;
  }
  return active;
}

function createConfiguration(name) {
  return {
    id: `cfg-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    items: {},
  };
}

function renameActiveConfiguration() {
  const active = getActiveConfiguration();
  const nextName = window.prompt("请输入配置方案名称", active.name)?.trim();
  if (!nextName || nextName === active.name) return;
  active.name = nextName.slice(0, 30);
  persistConfigurations();
  render();
  showToast("方案名称已更新");
}

function duplicateActiveConfiguration() {
  const active = getActiveConfiguration();
  const copy = createConfiguration(`${active.name} - 副本`);
  copy.items = { ...active.items };
  state.configurations.push(copy);
  state.activeConfigId = copy.id;
  persistConfigurations();
  render();
  showToast("已复制当前配置方案");
}

function openShareDialog() {
  if (!state.features.cloudSave) {
    showToast("云端方案功能当前已关闭");
    return;
  }
  const active = getActiveConfiguration();
  el.shareProjectTitle.value = active.name;
  el.shareProjectNote.value = "";
  el.shareResult.hidden = true;
  el.shareUrl.value = "";
  el.openShareBtn.href = "#";
  el.shareStatus.textContent = `${state.configurations.length} 个配置方案将保存为云端快照`;
  el.submitShareBtn.disabled = false;
  el.shareDialog.showModal();
  window.requestAnimationFrame(() => el.shareProjectTitle.select());
}

async function saveProjectToCloud(event) {
  event.preventDefault();
  const title = el.shareProjectTitle.value.trim();
  if (!title) {
    el.shareProjectTitle.focus();
    return;
  }

  el.submitShareBtn.disabled = true;
  el.shareStatus.textContent = "正在保存…";
  try {
    const response = await fetch(`${API_BASE}/projects`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        title,
        note: el.shareProjectNote.value.trim(),
        catalogVersion: state.catalogVersion,
        activeConfigId: state.activeConfigId,
        configurations: state.configurations,
      }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "云端保存失败");

    state.cloudProjectId = payload.id;
    el.shareUrl.value = payload.url;
    el.openShareBtn.href = payload.url;
    el.shareResultTitle.textContent = payload.title;
    el.shareResult.hidden = false;
    el.shareStatus.textContent = "云端快照已生成";
    showToast("方案已保存到云端");
  } catch (error) {
    el.shareStatus.textContent = error.message || "云端保存失败";
  } finally {
    el.submitShareBtn.disabled = false;
  }
}

async function copyShareUrl() {
  if (!el.shareUrl.value) return;
  try {
    await navigator.clipboard.writeText(el.shareUrl.value);
  } catch {
    el.shareUrl.select();
    document.execCommand("copy");
  }
  el.shareStatus.textContent = "共享链接已复制";
  showToast("共享链接已复制");
}

function backupConfigurations() {
  const payload = {
    format: "tianxing-plc-selector",
    version: 1,
    catalogVersion: state.catalogVersion,
    exportedAt: new Date().toISOString(),
    activeConfigId: state.activeConfigId,
    configurations: state.configurations,
  };
  const dateText = new Date().toISOString().slice(0, 10);
  downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" }), `天行PLC选型方案_${dateText}.json`);
  showToast("配置方案备份已生成");
}

async function importConfigurations(event) {
  const [file] = event.target.files;
  event.target.value = "";
  if (!file) return;

  try {
    const payload = JSON.parse(await file.text());
    if (payload.format !== "tianxing-plc-selector" || !Array.isArray(payload.configurations) || payload.configurations.length === 0) {
      throw new Error("invalid format");
    }
    const normalized = payload.configurations.map(normalizeConfiguration);
    const knownModels = new Set(PRODUCTS.map((product) => product.model));
    normalized.forEach((config) => {
      config.items = Object.fromEntries(
        Object.entries(config.items)
          .filter(([model, qty]) => knownModels.has(model) && Number(qty) > 0)
          .map(([model, qty]) => [model, Math.floor(Number(qty))]),
      );
    });
    if (!window.confirm(`将导入 ${normalized.length} 个配置方案，并替换当前方案。是否继续？`)) return;
    state.configurations = normalized;
    state.activeConfigId = normalized.some((config) => config.id === payload.activeConfigId)
      ? payload.activeConfigId
      : normalized[0].id;
    persistConfigurations();
    render();
    showToast(`已导入 ${normalized.length} 个配置方案`);
  } catch {
    window.alert("无法导入：文件不是有效的天行 PLC 选型方案备份。");
  }
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => el.toast.classList.remove("is-visible"), 2400);
}

function loadConfigurations() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONFIG_STORAGE_KEY) || "null");
    if (saved?.configurations?.length) {
      return {
        configurations: saved.configurations.map(normalizeConfiguration),
        activeConfigId: saved.activeConfigId || saved.configurations[0].id,
      };
    }
  } catch {
    // Fall through to legacy migration.
  }

  const legacyItems = loadLegacyCart();
  const firstConfig = createConfiguration("配置方案 1");
  firstConfig.items = legacyItems;
  return {
    configurations: [firstConfig],
    activeConfigId: firstConfig.id,
  };
}

function normalizeConfiguration(config, index) {
  const savedName = String(config.name || `配置方案 ${index + 1}`);
  return {
    id: config.id || `cfg-${index + 1}`,
    name: savedName.replace(/^购物车/, "配置方案"),
    items: config.items && typeof config.items === "object" ? config.items : {},
  };
}

function loadLegacyCart() {
  try {
    return JSON.parse(localStorage.getItem(LEGACY_CART_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function persistConfigurations() {
  localStorage.setItem(
    CONFIG_STORAGE_KEY,
    JSON.stringify({
      activeConfigId: state.activeConfigId,
      configurations: state.configurations,
    }),
  );
}

function exportConfiguration() {
  const selected = getAllSelectedRows();
  if (selected.length === 0) return;

  const totals = getTotals(selected);
  const now = new Date();
  const dateText = now.toISOString().slice(0, 10);

  const configRows = [
    ["序号", "配置方案", "产品系列", "分类", "选型步骤", "型号", "用途", "关键配置", "数量", "来源", "备注"],
    ...selected.map((item, index) => [
      index + 1,
      item.configName,
      item.family,
      item.group,
      getStepLabel(getProductStep(item)),
      item.model,
      item.name,
      item.summary,
      item.qty,
      `${SOURCE} ${item.source}`,
      item.tags.join(" / "),
    ]),
  ];

  const summaryRows = [
    ["配置方案", "项目", "内容"],
    ["全部", "导出日期", dateText],
    ["全部", "数据来源", SOURCE],
    ["全部", "免责声明", DISCLAIMER],
    ["全部", "软件编写", CREATOR],
    ["全部", "型号数量", selected.length],
    ["全部", "总件数", selected.reduce((sum, item) => sum + item.qty, 0)],
    ...metricLabels
      .map(([key, label]) => ["全部", label, totals[key] || 0])
      .filter(([, , value]) => value > 0),
    ...state.configurations.flatMap((config) => buildConfigurationSummaryRows(config)),
  ];

  const workbook = makeXlsx([
    { name: "配置清单", rows: configRows },
    { name: "统计", rows: summaryRows },
  ]);
  downloadBlob(workbook, `天行PLC选型配置_${dateText}.xlsx`);
  showToast("Excel 配置清单已生成");
}

function buildConfigurationSummaryRows(config) {
  const selected = getSelectedProductsForConfiguration(config);
  if (selected.length === 0) return [];
  const totals = getTotals(selected);
  const compatibility = buildCompatibilityReport(selected);
  const compatibilityMessages = compatibility.checks
    .filter((check) => check.type !== "ok")
    .map((check) => `${check.category}：${check.title} - ${check.text}`);
  return [
    [config.name, "型号数量", selected.length],
    [config.name, "总件数", selected.reduce((sum, item) => sum + item.qty, 0)],
    ...metricLabels
      .map(([key, label]) => [config.name, label, totals[key] || 0])
      .filter(([, , value]) => value > 0),
    [config.name, "兼容性检查", compatibilityMessages.join("；") || "当前配置兼容性检查通过"],
  ];
}

function makeXlsx(sheets) {
  const files = {
    "[Content_Types].xml": contentTypesXml(sheets),
    "_rels/.rels": rootRelsXml(),
    "xl/workbook.xml": workbookXml(sheets),
    "xl/_rels/workbook.xml.rels": workbookRelsXml(sheets),
    "xl/styles.xml": stylesXml(),
  };

  sheets.forEach((sheet, index) => {
    files[`xl/worksheets/sheet${index + 1}.xml`] = sheetXml(sheet.rows);
  });

  return zipFiles(files);
}

function contentTypesXml(sheets) {
  const sheetOverrides = sheets
    .map((_, index) => `<Override PartName="/xl/worksheets/sheet${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`)
    .join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  ${sheetOverrides}
</Types>`;
}

function rootRelsXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`;
}

function workbookXml(sheets) {
  const sheetEntries = sheets
    .map((sheet, index) => `<sheet name="${escapeXml(sheet.name)}" sheetId="${index + 1}" r:id="rId${index + 1}"/>`)
    .join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>${sheetEntries}</sheets>
</workbook>`;
}

function workbookRelsXml(sheets) {
  const sheetRels = sheets
    .map((_, index) => `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${index + 1}.xml"/>`)
    .join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${sheetRels}
  <Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;
}

function stylesXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="1"><font><sz val="11"/><name val="Microsoft YaHei"/></font></fonts>
  <fills count="1"><fill><patternFill patternType="none"/></fill></fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/></cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
  <dxfs count="0"/>
  <tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/>
</styleSheet>`;
}

function sheetXml(rows) {
  const columnWidths = rows[0]
    .map((_, columnIndex) => {
      const width = Math.min(
        60,
        Math.max(
          10,
          ...rows.map((row) => String(row[columnIndex] ?? "").replace(/[^\x00-\xff]/g, "aa").length + 2),
        ),
      );
      return `<col min="${columnIndex + 1}" max="${columnIndex + 1}" width="${width}" customWidth="1"/>`;
    })
    .join("");

  const xmlRows = rows
    .map((row, rowIndex) => {
      const cells = row
        .map((value, columnIndex) => {
          const ref = `${columnName(columnIndex + 1)}${rowIndex + 1}`;
          if (typeof value === "number") {
            return `<c r="${ref}"><v>${value}</v></c>`;
          }
          return `<c r="${ref}" t="inlineStr"><is><t>${escapeXml(String(value ?? ""))}</t></is></c>`;
        })
        .join("");
      return `<row r="${rowIndex + 1}">${cells}</row>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <cols>${columnWidths}</cols>
  <sheetData>${xmlRows}</sheetData>
</worksheet>`;
}

function columnName(index) {
  let name = "";
  while (index > 0) {
    const remainder = (index - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    index = Math.floor((index - 1) / 26);
  }
  return name;
}

function zipFiles(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const data = typeof content === "string" ? encoder.encode(content) : content;
    const crc = crc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    writeLocalHeader(localView, nameBytes, data, crc);
    localHeader.set(nameBytes, 30);
    localParts.push(localHeader, data);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    writeCentralHeader(centralView, nameBytes, data, crc, offset);
    centralHeader.set(nameBytes, 46);
    centralParts.push(centralHeader);

    offset += localHeader.length + data.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, Object.keys(files).length, true);
  endView.setUint16(10, Object.keys(files).length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, offset, true);

  return new Blob([...localParts, ...centralParts, end], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}

function writeLocalHeader(view, nameBytes, data, crc) {
  view.setUint32(0, 0x04034b50, true);
  view.setUint16(4, 20, true);
  view.setUint16(6, 0, true);
  view.setUint16(8, 0, true);
  view.setUint16(10, dosTime(), true);
  view.setUint16(12, dosDate(), true);
  view.setUint32(14, crc, true);
  view.setUint32(18, data.length, true);
  view.setUint32(22, data.length, true);
  view.setUint16(26, nameBytes.length, true);
}

function writeCentralHeader(view, nameBytes, data, crc, offset) {
  view.setUint32(0, 0x02014b50, true);
  view.setUint16(4, 20, true);
  view.setUint16(6, 20, true);
  view.setUint16(8, 0, true);
  view.setUint16(10, 0, true);
  view.setUint16(12, dosTime(), true);
  view.setUint16(14, dosDate(), true);
  view.setUint32(16, crc, true);
  view.setUint32(20, data.length, true);
  view.setUint32(24, data.length, true);
  view.setUint16(28, nameBytes.length, true);
  view.setUint16(40, 0, true);
  view.setUint32(42, offset, true);
}

function dosTime() {
  const date = new Date();
  return (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
}

function dosDate() {
  const date = new Date();
  return ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
}

function crc32(data) {
  let crc = -1;
  for (let i = 0; i < data.length; i += 1) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ data[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let c = i;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
