# 开发指南

本节将介绍如何参与 dock-next 的开发和贡献。

## 项目结构

```
dock-next/
├── docs/                 # VitePress 文档
├── lib/                  # 构建后的文件
├── packages/             # 组件源码
│   ├── advanced-query/   # 高级查询组件
│   ├── bg-selector/      # 背景选择器组件
│   ├── clipboard/        # 剪贴板组件
│   ├── link-viewer/      # 链接查看器组件
│   ├── position-selector/ # 位置选择器组件
│   ├── qrcode/           # 二维码组件
│   ├── sku-spec/         # SKU 规格组件
│   ├── sku-table/        # SKU 表格组件
│   ├── svg-icon/         # SVG 图标组件
│   ├── theme-chalk/      # 主题文件
│   └── title-bar/        # 标题栏组件
├── examples/             # 示例文件 (已备份)
└── public/               # 静态资源
```

## 开发环境搭建

克隆项目：

```bash
git clone https://github.com/santiago-fan/dock-next.git
cd dock-next
npm install
```

启动开发服务器：

```bash
npm run dev
```

## 创建新组件

使用脚本创建新组件：

```bash
npm run new:comp
```

## 构建

构建组件库：

```bash
npm run lib
```

构建文档：

```bash
npm run build:docs
```

## 发布

发布到 npm：

```bash
npm publish
```

## 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 组件命名使用帕斯卡命名法
- Props 使用驼峰命名法
- 组件文件使用 `.vue` 扩展名