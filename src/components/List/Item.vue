<template>
  <div v-bind="getOptions()"></div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'

export default {
  name: 'ListItem',
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'list-item',
    }
  },
}
</script>
<style lang="scss" scoped></style>
