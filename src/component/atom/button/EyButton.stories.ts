import type { Meta, StoryObj } from "@storybook/vue3-vite"

import { fn } from "storybook/test"

import EyButton from "~/component/atom/button/EyButton.vue"

/**
 * EyButton 原子组件的 Storybook 文档
 *
 * 展示按钮组件的各种样式、尺寸、状态和交互效果
 */
const meta = {
  title: "Component/Atom/Button",
  component: EyButton,
  tags: ["autodocs"],
  argTypes: {
    /** 按钮显示文本 */
    label: {
      control: "text",
      description: "按钮显示的文本内容",
    },
    /** 是否禁用按钮 */
    disabled: {
      control: "boolean",
      description: "设置按钮为禁用状态",
    },
    /** 按钮类型 */
    type: {
      control: "select",
      options: ["normal", "info", "warning", "error"],
      description: "按钮的语义类型，影响颜色样式",
    },
    /** 按钮变体样式 */
    variant: {
      control: "select",
      options: ["filled", "tinted", "outlined", "text", "icon"],
      description: "按钮的视觉变体",
    },
    /** 按钮尺寸 */
    size: {
      control: "select",
      options: ["tiny", "small", "medium", "large", "giant"],
      description: "按钮的尺寸大小",
    },
    /** 自定义字体大小 */
    fontSize: {
      control: "text",
      description: "自定义按钮文字大小",
    },
    /** 自定义背景色 */
    backgroundColor: {
      control: "color",
      description: "自定义按钮背景色",
    },
    /** 自定义激活状态背景色 */
    backgroundActiveColor: {
      control: "color",
      description: "自定义按钮激活状态背景色",
    },
    /** 自定义标签颜色 */
    labelColor: {
      control: "color",
      description: "自定义按钮文字颜色",
    },
    /** 自定义激活状态标签颜色 */
    labelActiveColor: {
      control: "color",
      description: "自定义按钮激活状态文字颜色",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof EyButton>

export default meta
type Story = StoryObj<typeof meta>

/** 默认按钮 - normal 类型，filled 变体，medium 尺寸 */
export const Normal: Story = {
  args: {
    label: "Button",
  },
}

/** 主要按钮 - info 类型 */
export const Info: Story = {
  args: {
    label: "Info Button",
    type: "info",
  },
}

/** 警告按钮 - warning 类型 */
export const Warning: Story = {
  args: {
    label: "Warning Button",
    type: "warning",
  },
}

/** 错误按钮 - error 类型 */
export const Error: Story = {
  args: {
    label: "Error Button",
    type: "error",
  },
}

/** 禁用状态按钮 */
export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
}

/** 禁用状态的主要按钮 */
export const DisabledInfo: Story = {
  args: {
    label: "Disabled Info",
    type: "info",
    disabled: true,
  },
}

/** 填充样式 - filled 变体 */
export const Filled: Story = {
  args: {
    label: "Filled",
    variant: "filled",
  },
}

/** 浅色填充样式 - tinted 变体 */
export const Tinted: Story = {
  args: {
    label: "Tinted",
    variant: "tinted",
  },
}

/** 边框样式 - outlined 变体 */
export const Outlined: Story = {
  args: {
    label: "Outlined",
    variant: "outlined",
  },
}

/** 文字样式 - text 变体 */
export const Text: Story = {
  args: {
    label: "Text",
    variant: "text",
  },
}

/** 图标样式 - icon 变体 */
export const Icon: Story = {
  args: {
    variant: "icon",
  },
}

/** 迷你尺寸 */
export const Tiny: Story = {
  args: {
    label: "Tiny",
    size: "tiny",
  },
}

/** 小号尺寸 */
export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
}

/** 大号尺寸 */
export const Large: Story = {
  args: {
    label: "Large",
    size: "large",
  },
}

/** 超大尺寸 */
export const Giant: Story = {
  args: {
    label: "Giant",
    size: "giant",
  },
}

/** 自定义颜色按钮 */
export const CustomColor: Story = {
  args: {
    label: "Custom Color",
    backgroundColor: "#6366f1",
    labelColor: "#ffffff",
  },
}

/** 组合示例 - 信息按钮的不同变体 */
export const InfoVariants: Story = {
  args: {
    type: "info",
    label: "Info",
  },
  render: (args) => ({
    components: { EyButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 0.5rem;">
        <EyButton v-bind="args" variant="filled" />
        <EyButton v-bind="args" variant="tinted" />
        <EyButton v-bind="args" variant="outlined" />
        <EyButton v-bind="args" variant="text" />
      </div>
    `,
  }),
}

/** 组合示例 - 不同类型的填充按钮 */
export const TypeVariants: Story = {
  args: {
    variant: "filled",
    label: "Button",
  },
  render: (args) => ({
    components: { EyButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 0.5rem;">
        <EyButton v-bind="args" type="normal" />
        <EyButton v-bind="args" type="info" />
        <EyButton v-bind="args" type="warning" />
        <EyButton v-bind="args" type="error" />
      </div>
    `,
  }),
}

/** 组合示例 - 不同尺寸 */
export const SizeVariants: Story = {
  args: {
    label: "Size",
  },
  render: (args) => ({
    components: { EyButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <EyButton v-bind="args" size="tiny" />
        <EyButton v-bind="args" size="small" />
        <EyButton v-bind="args" size="medium" />
        <EyButton v-bind="args" size="large" />
        <EyButton v-bind="args" size="giant" />
      </div>
    `,
  }),
}
