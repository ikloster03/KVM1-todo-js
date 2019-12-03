<template>
  <div v-bind="getOptions()">
    <task-list v-if="!loading" type="today">
      <!-- <h1>{{ nameList | withoutHyphens }}</h1> -->
      <error-boundary
        v-for="item in tasks"
        :key="`task-${item.id}`"
        name="task-item"
      >
        <task-item :input-data="item"></task-item>
        <template #error>
          <div>No name task</div>
        </template>
      </error-boundary>
    </task-list>
    <loader-default v-else></loader-default>
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'
import { createNamespacedHelpers } from 'vuex'
import { List, Item } from '@/components/Task'
import { Default } from '@/components/Loader'
import { Boundary } from '@/components/Error'

const { mapState, mapActions } = createNamespacedHelpers('task')

export default {
  name: 'HomePage',
  components: {
    'task-list': List,
    'task-item': Item,
    'loader-default': Default,
    'error-boundary': Boundary,
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
      // nameList: null,
    }
  },
  computed: {
    // ...mapState({
    //   tasks: state => state.tasks,
    // }),
    ...mapState(['loading', 'tasks']),
  },
  async created() {
    await this.fetch()
  },
  methods: {
    // ...mapActions({
    //   fetch: 'fetch'
    // }),
    ...mapActions(['fetch']),
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
}
</style>
