<template>
  <!-- EyButton 按钮组件模板 -->
  <!-- 主容器：包含图标、文本区域 -->
  <div
    type="button"
    role="button"
    :tabindex="props.disabled ? -1 : 0"
    :style="styles"
    :class="classes"
    @click="props.disabled ? null : emit('click')"
    @keydown.enter="props.disabled ? null : emit('click')"
  >
    <!-- 左侧图标区域 -->
    <div class="eyuan-button-icon-left">
      <component :is="props.iconLeft" v-if="props.iconLeft" />
    </div>
    <!-- 按钮文本区域（非图标模式显示） -->
    <div v-if="props.variant !== 'icon'" class="eyuan-button-text">
      <slot>{{ props.label }}</slot>
    </div>
    <!-- 右侧图标区域 -->
    <div class="eyuan-button-icon-right">
      <component :is="props.iconRight" v-if="props.iconRight" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  /**
   * EyButton 原子组件 - 基础按钮组件
   *
   * 提供多种样式、尺寸、状态的按钮，支持自定义图标和颜色
   */

  import { computed, type Component } from 'vue'
  import type { ComponentSize } from '~/type/component/common/ComponentSize'
  import type { ComponentType } from '~/type/component/common/ComponentType'
  import type { ComponentVariant } from '~/type/component/common/ComponentVariant'

  /**
   * 按钮组件属性接口
   */
  interface Prop {
    /** 按钮显示文本 */
    label?: string
    /** 是否禁用 */
    disabled?: boolean
    /** 按钮类型：normal / primary / success / warning / danger */
    type?: ComponentType
    /** 按钮变体：filled / outline / ghost / icon */
    variant?: ComponentVariant
    /** 按钮尺寸：small / medium / large */
    size?: ComponentSize
    /** 左侧图标组件 */
    iconLeft?: Component
    /** 右侧图标组件 */
    iconRight?: Component
    /** 自定义背景色 */
    backgroundColor?: string
    /** 自定义激活状态背景色 */
    backgroundActiveColor?: string
    /** 自定义标签颜色 */
    labelColor?: string
    /** 自定义激活状态标签颜色 */
    labelActiveColor?: string
    /** 自定义字体大小 */
    fontSize?: string
    /** 是否启用悬停动效（默认启用，设置为 false 可关闭 translateY 动效） */
    activeEffect?: boolean
  }

  /**
   * 属性默认值配置
   */
  const props = withDefaults(defineProps<Prop>(), {
    label: '',
    disabled: false,
    type: 'normal',
    variant: 'filled',
    size: 'medium',
    iconLeft: undefined,
    iconRight: undefined,
    backgroundColor: '',
    backgroundActiveColor: '',
    labelColor: '',
    labelActiveColor: '',
    fontSize: '',
    activeEffect: true,
  })

  /**
   * 事件发射器
   * @event click - 按钮点击事件
   */
  const emit = defineEmits<{
    (e: 'click'): void
  }>()

  /**
   * 动态样式计算
   * 将自定义颜色属性注入CSS变量
   */
  const styles = computed(() => ({
    '--ey-btn-bg': props.backgroundColor,
    '--ey-btn-bg-active': props.backgroundActiveColor,
    '--ey-btn-label-color': props.labelColor,
    '--ey-btn-label-color-active': props.labelActiveColor,
    '--ey-btn-label-font-size': props.fontSize,
  }))

  /**
   * 动态类名计算
   * 根据属性组合生成对应的CSS类名
   */
  const classes = computed(() => ({
    'eyuan-button': true,
    [`eyuan-button--${props.type}`]: true,
    [`eyuan-button--${props.variant}`]: true,
    [`eyuan-button--${props.size}`]: true,
    [`eyuan-button--disabled`]: props.disabled,
    [`eyuan-button--${props.variant}--disabled`]: props.disabled,
    'eyuan-button--no-active-effect': !props.activeEffect,
    unselectable: true,
  }))
</script>

<style lang="scss" src="~/asset/component/atom/button.scss" scoped />
