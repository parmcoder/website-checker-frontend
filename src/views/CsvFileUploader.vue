<template>
  <h1 class="text">Website Checker</h1>

  <div class="box container">
    <img alt="Vue logo" src="@/assets/logo.png" placeholder="Image of CSV?" />
    <div class="text">Drag your .csv file here to start uploading</div>
    <div class="center">
      <Line />
      <div class="safe-text">OR</div>
      <Line />
    </div>
    <button class="text">Browse File</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Line from '@/components/Decorators/Line.vue'
  export default defineComponent({
    name: 'CsvFileUploader',
    components: {
      Line,
    },
    setup: () => {
      console.log('Ready to upload file')
    },
  })
</script>

<style scoped>
  .center {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .text {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: #64697f;
  }

  .box {
    margin: auto;
  }

  .safe-text {
    margin: 2%;
  }

  .container {
    width: 656px;
    height: 405px;
    background: #f5f7fc;
    border: 4px dashed #c7cddb;
    border-radius: 30px;
  }

  button {
    background: #6749f5;
    border-radius: 10px;
    margin: 20px 2px 2px 2px;
  }

  button.text {
    color: white;
  }
</style>
