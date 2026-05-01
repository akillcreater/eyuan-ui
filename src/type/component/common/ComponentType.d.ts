/**
 * 组件类型
 * 用于定义组件的语义化类型，通常影响组件的颜色和视觉表现
 *
 * - `normal`: 普通类型，默认样式，无特殊语义
 * - `info`: 信息类型，通常使用蓝色系，用于展示信息提示
 * - `warning`: 警告类型，通常使用橙色/黄色系，用于警示用户注意
 * - `error`: 错误类型，通常使用红色系，用于表示错误或危险状态
 */
export type ComponentType = 'normal' | 'info' | 'warning' | 'error'
