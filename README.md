# 天行 PLC 选型配置网页

纯静态网页应用，可直接部署到公网静态托管平台。产品数据整理自《宝信天行 PLC 系列产品选型手册 2025.09》。

## 功能

- 按 `PLC → 远程 IO → HMI` 步骤选型
- 支持多个配置方案，每个方案保存一套独立配置
- 支持按系列、网络接口、关键词筛选
- 选择 PN/EC/DP 等通讯接口后，自动推荐匹配的远程 IO 耦合器
- 智能选型向导：按通讯协议、DI/DO/AI/AO/温度/高速计数/SSI/PTO/串口点数和设计余量自动生成配置
- 自动校核 TM30/TD11 协议覆盖、模块通道容量、32 模块耦合器上限及 TD11 电源中继需求
- 支持赛博青、极光紫、工业亮三套主题并记忆用户选择
- 支持方案重命名、复制、JSON 备份与恢复、仅看已选和排序
- 支持导出 `.xlsx` Excel 配置清单

## 公网部署

这是静态站点，部署时把仓库根目录作为发布目录即可。

### GitHub Pages

1. 把本目录推送到 GitHub 仓库。
2. 在仓库 `Settings → Pages` 中选择 `Deploy from a branch`。
3. 分支选择 `main`，目录选择 `/root`。
4. 保存后等待 GitHub Pages 生成公网地址。

### Vercel

1. 在 Vercel 导入该 Git 仓库。
2. Framework Preset 选择 `Other`。
3. Build Command 留空，Output Directory 留空或填 `.`。
4. 部署即可。

### Netlify

1. 在 Netlify 导入该 Git 仓库。
2. Build command 留空。
3. Publish directory 填 `.`。
4. 部署即可。

## 本地检查

```bash
npm run check
```

## 注意

`manual.pdf` 会随网站一起公开发布。如果该手册不适合公开传播，请在部署前删除 `manual.pdf`，并移除页面里的“查看手册”入口。

免责声明：本软件仅用于快速选型辅助，所有产品型号、技术参数和最终配置均以宝信软件官方手册及官方确认信息为准。

软件编写：FlyEnoch9。
