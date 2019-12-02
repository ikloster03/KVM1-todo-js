<template>
  <div v-bind="getOptions()"></div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'

export default {
  name: 'LoaderDefault',
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'loader-default',
    }
  },
}
</script>

<style scoped>
.loader-default {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;

  border: 4px solid transparent;
  border-top: 4px solid green;
  border-bottom: 4px solid green;
  border-right: 4px solid green;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;

  z-index: 9999;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
