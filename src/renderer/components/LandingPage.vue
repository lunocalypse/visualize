<template>
  <div class="columns">
  </div>
</template>
<script>
  export default {
    name: 'landing-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
<style lang="scss">
  /* write SCSS here */
</style>
