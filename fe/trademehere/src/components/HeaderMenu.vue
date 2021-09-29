<template>
  <w-flex>
    <w-toolbar>
          <div class="title" v-on:click="showDrawer = !showDrawer">Title</div>
          <div class="spacer"></div>
          <span class="ml2">Item 1</span>
          <span class="ml2">Item 2</span>
          <span class="ml2">Item 3</span>
      </w-toolbar>
      <w-drawer
        v-model="showDrawer"
        v-bind:left= isLeft
        @close="showDrawer = false">
        <w-button
          class="button--close"
          @click="showDrawer = false"
          sm
          outline
          round
          absolute
          color="primary"
          icon="wi-cross">
        </w-button>
      </w-drawer>
  </w-flex>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
    isLeft: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showDrawer: false
    }
  }
}
</script>