<template>
  <div class="box">
    <div>Total {{ numberOfSites }} website</div>
    <div>Use {{ mins }} minute and {{ secs }} second</div>
    <div>UP {{ numUp }}</div>
    <div>UP {{ numDown }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'WebsiteResults',
    props: {
      numberOfSites: {
        required: false,
      },
      mins: {
        required: false,
      },
      secs: {
        required: false,
      },
      numUp: {
        required: false,
      },
      numDown: {
        required: false,
      },
    },
  })
</script>

<style scoped>
  .box {
    height: 200px;
  }
</style>
