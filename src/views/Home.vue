<template>
  <div v-bind="getOptions()">
    <task-list type="today">
      <!-- <h1>{{ nameList | withoutHyphens }}</h1> -->
      <task-item
        v-for="item in tasks"
        :key="`task-${item.id}`"
        :input-data="item"
      ></task-item>
    </task-list>
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'
import { List, Item } from '@/components/Task'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('task')

export default {
  name: 'HomePage',
  components: {
    'task-list': List,
    'task-item': Item,
  },
  // filters: {
  //   withoutHyphens(value) {
  //     return value.replace(/-/g, '')
  //   },
  // },
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'home-page',
      nameList: null,
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks,
    }),
  },
  async created() {
    await this.getTasks()
  },
  methods: {
    ...mapActions(['getTasks']),
  },
}
</script>
