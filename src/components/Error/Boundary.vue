<template>
  <div v-bind="getOptions()">
    <slot v-if="err" name="error" :err="err" :vm="vm" :info="info">
      <error-fallback></error-fallback>
    </slot>
    <slot v-else></slot>
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'
import Fallback from './Fallback'
import errorLog from '@/api/logger'

export default {
  name: 'ErrorBoundary',
  components: {
    'error-fallback': Fallback,
  },
  mixins: [ComponentBuilder],
  props: {
    stopPropagation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      blockName: 'error-boundary',
      err: false,
      vm: null,
      info: null,
    }
  },
  errorCaptured(err, vm, info) {
    this.err = err
    this.vm = vm
    this.info = info

    errorLog(this.blockName, { err, vm, info })

    return !this.stopPropagation
  },
}
</script>
<style lang="scss" scoped></style>
