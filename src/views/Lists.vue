<template>
  <div>
    <div></div>
    <list-list>
      <list-item
        v-for="item in lists"
        :key="`list-${item.id}`"
        :input-data="item"
      ></list-item>
    </list-list>
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'
import { Item, List } from '@/components/List'

export default {
  name: 'ListsPage',
  components: {
    'list-item': Item,
    'list-list': List,
  },
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'lists-page',
    }
  },
}
</script>

<style lang="scss" scoped></style>
