# 易元组件库

基于 Vue 3 + TypeScript + Vite 的现代化组件库，提供丰富的原子组件和设计系统支持。

## 环境配置

### 必要环境

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0（推荐）或 npm >= 9.0.0

### 推荐 IDE

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [VS Code](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code](https://code.visualstudio.com/) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

## 启动手顺

### 开发模式

启动 Vite 开发服务器：

```bash
pnpm dev
```

访问地址：http://localhost:5173

### Storybook 文档

启动组件文档和开发环境：

```bash
pnpm storybook
```

访问地址：http://localhost:6006

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 代码质量

### 代码检查

```bash
# 检查代码风格
pnpm lint

# 自动修复可修复的问题
pnpm lint:fix
```

### 代码格式化

```bash
pnpm format
```

## 项目结构

```
eyuan-ui/
├── src/
│   ├── asset/              # 静态资源
│   │   ├── component/      # 组件样式
│   │   ├── icon/          # 图标资源
│   │   └── main.css       # 全局样式与设计 Token
│   ├── component/          # Vue 组件
│   │   └── atom/          # 原子组件
│   │       └── button/     # 按钮组件
│   └── type/               # TypeScript 类型定义
│       └── component/      # 组件相关类型
├── .storybook/             # Storybook 配置
├── .vscode/                # VS Code 工作区配置
└── public/                 # 公共静态资源
```

## 技术栈

- **Vue 3.5** - 渐进式 JavaScript 框架
- **TypeScript 5.9** - JavaScript 超集，提供类型检查
- **Vite 7** - 下一代前端构建工具
- **Storybook 9** - 组件开发与文档工具
- **Sass** - CSS 预处理器
- **ESLint 10** - 代码质量检查
- **Prettier 3** - 代码格式化工具

## 设计系统

组件库使用统一的设计 Token 系统，包括：

- **间距系统** (`--spacing-*`)
- **字体系统** (`--font-size-*`, `--font-weight-*`)
- **颜色系统** (`--primary-*`, `--notice-*`, `--warning-*`, `--error-*`)
- **圆角系统** (`--radius-*`)
- **阴影系统** (`--shadow-*`)

详情请查看 [src/asset/main.css](./src/asset/main.css)

## 组件列表

### 原子组件

| 组件     | 说明         | 文档                                                         |
| -------- | ------------ | ------------------------------------------------------------ |
| EyButton | 基础按钮组件 | [Storybook](./src/component/atom/button/EyButton.stories.ts) |

## License

MIT
