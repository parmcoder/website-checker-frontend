<template>
  <!-- TODO: Move button here -->
  <span class="line"></span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'UploadButton',
  })
</script>

<style scoped>
  .line {
    position: relative;
    width: 112px;
    height: 0;
    border: 3px solid #b6bed0;
  }
</style>
