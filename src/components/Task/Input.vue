<template>
  <div v-bind="getOptions()">
    <input
      :class="`${getBlock}__input`"
      autofocus
      autocomplete="off"
      :placeholder="taskPlaceholder"
      v-model="taskTitle"
      @keyup.enter="addTask()"
    />
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('task')

export default {
  name: 'TaskInput',
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'task-input',
      taskPlaceholder: 'Enter new task',
      taskTitle: '',
    }
  },
  methods: {
    ...mapActions(['createTask']),
    async addTask() {
      await this.createTask({title: taskTitle})
    }
  }
}
</script>
<style lang="scss" scoped></style>
