import type { Meta, StoryObj } from "@storybook/vue3-vite"

import IconSearch from "./icon-search.vue"

const meta = {
  title: "Asset/Icon",

  tags: ["autodocs"],
} satisfies Meta<typeof IconSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  args: {},
  render: (args) => ({
    components: { IconSearch },
    setup() {
      return { args }
    },
    template: `<IconSearch v-bind="args" />`,
  }),
}
