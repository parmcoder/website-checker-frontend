<template>
  <CsvFileUploader></CsvFileUploader>

  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import HelloWorld from '@/views/HelloWorld.vue'
  import CsvFileUploader from '@/views/CsvFileUploader.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
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
