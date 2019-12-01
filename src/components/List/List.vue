<template>
  <div v-bind="getOptions()">
    <slot></slot>
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'

export default {
  name: 'ListList',
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'list-list',
    }
  },
}
</script>
<style lang="scss" scoped></style>
