<template>
  <div v-bind="getOptions()">
    <slot></slot>
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'

export default {
  name: 'TaskList',
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'task-list',
    }
  },
}
</script>
<style lang="scss" scoped></style>
