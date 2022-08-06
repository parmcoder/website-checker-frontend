<template>
  <h1 class="text" style="margin-right: 400px;">Website Checker</h1>

  <div class="box container">
    <img class="image-frame" alt="Vue logo" src="@/assets/csv.png" placeholder="Image of CSV?" />
    <div class="text">Drag your .csv file here to start uploading</div>
    <div class="center">
      <Line />
      <div class="safe-text">OR</div>
      <Line />
    </div>
    <button class="text" @click="doubleIncrement">Browse File</button>
    <input id="dropzoneFile" type="file" />
  </div>

  <FileUploadDisplay />
  <WebsiteResults />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Line from '@/components/Decorators/Line.vue'
import FileUploadDisplay from '@/components/Displays/FileUploadDisplay.vue'
import WebsiteResults from '@/components/Displays/WebsiteResults.vue'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  name: 'CsvFileUploader',
  components: {
    Line,
    FileUploadDisplay,
    WebsiteResults,
  },
  setup: () => {
    const store = useCounterStore()

    const { increment, doubleIncrement } = store

    return {
      doubleValue: computed(() => store.doubleCount),
      increment,
      doubleIncrement,
    }
  },
})
</script>

<style scoped>
.image-frame {
  /* display: relative; */
  height: 120px;
  margin-top: 30px;
  margin-bottom: 20px;
}

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
  height: 85px;
  width: 300px;
}

button:hover {
  background: rgb(68, 47, 173);
}

button.text {
  color: white;
}

input[type='file'] {
  display: none;
}
</style>
