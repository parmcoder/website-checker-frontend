<template>
  <div class="box">
    <div>{{ name }}</div>
    <div>progress%</div>
    <progress id="file" value="32" max="100">32%</progress>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'FileUploadDisplay',
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  })
</script>

<style scoped>
  .box {
    height: 200px;
  }
</style>
