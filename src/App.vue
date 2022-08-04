<template>
  <CsvFileUploader></CsvFileUploader>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import CsvFileUploader from '@/views/CsvFileUploader.vue'

  export default defineComponent({
    name: 'App',
    components: {
      CsvFileUploader,
    },
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif, Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
