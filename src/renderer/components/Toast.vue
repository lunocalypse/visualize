<template>
  <div class="toast toast-primary">
    <button class="btn btn-clear float-right" @click="destroy()"></button>
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'toast',
    methods: {
      destroy () {
        this.$destroy()
      }
    },
    data: function () {
      return {
        msg: 'Twoja matka dzwoni do ciebie i sie martwi, odbierz synek'
      }
    }
  }
</script>
