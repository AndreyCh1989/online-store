<template>
  <div class="search">
      <input type="text" class="search-input" v-model="filter" placeholder="Search for Item...">
      <b-link class="button-search" :to="{ name: 'Product', params: { filter: filter } }" @click.prevent="setFilter"></b-link>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      filter: ''
    }
  },
  methods: {
    setFilter () {
      if (this.$root.$children[0].$refs.view.$el.id === 'product') {
        this.$root.$children[0].$refs.view.setFilter(this.filter)
      }
    }
  }
}
</script>
