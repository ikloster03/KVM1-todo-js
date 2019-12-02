<template>
  <div v-bind="getOptions()">
    <div :class="`${getBlock}__title`">{{ inputData.title.dd.dd }}</div>
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'

export default {
  name: 'TaskItem',
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'task-item',
    }
  },
}
</script>
<style lang="scss" scoped></style>
