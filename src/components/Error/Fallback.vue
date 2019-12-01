<template>
  <div v-bind="getOptions()">Something went wrong!</div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'

export default {
  name: 'ErrorFallback',
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'error-fallback',
    }
  },
}
</script>
<style lang="scss" scoped></style>
