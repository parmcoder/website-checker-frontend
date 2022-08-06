<template>
  <h1 class="text" style="margin-right: 400px">Website Checker</h1>
  <div class="box container">
    <DropZone @drop.prevent="drop" @change="uploadFile" />
  </div>
  <!-- <FileUploadDisplay :name="dropzoneFile.name" :progress="state.progress" /> -->
  <div style="margin-top: 40px">
    <div v-if="state.stage === 1">
      <FileUploadDisplay :name="dropzoneFile.name" :progress="state.progress" />
    </div>
    <div v-if="state.stage === 2">
      <WebsiteResults
        :number-of-sites="state.ups + state.downs"
        :num-up="state.ups"
        :num-down="state.downs"
        :mins="state.mins"
        :secs="state.secs"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import FileUploadDisplay from '@/components/Displays/FileUploadDisplay.vue'
  import WebsiteResults from '@/components/Displays/WebsiteResults.vue'
  import DropZone from '@/components/Core/DropZone.vue'
  import axios from 'axios'

  export default defineComponent({
    name: 'CsvFileUploader',
    components: {
      FileUploadDisplay,
      WebsiteResults,
      DropZone,
    },
    setup: () => {
      const state = reactive({
        stage: 0,
        ups: 0,
        downs: 0,
        mins: 0,
        secs: 0,
        progress: 0,
      })
      function millisToMinutes(millis: number) {
        var minutes = Math.floor(millis / 60000)
        return minutes
      }
      function millisToSeconds(millis: number) {
        var seconds = (millis % 60000) / 1000
        return seconds
      }

      const url = import.meta.env.VITE_API_BASE_URL

      let dropzoneFile = ref('')

      const drop = (e: { dataTransfer: { files: string[] } }) => {
        dropzoneFile.value = e.dataTransfer.files[0]
      }

      const uploadFile = async () => {
        dropzoneFile.value = document.querySelector('.dropzoneFile')?.files[0]
        const formData = new FormData()

        formData.append('file', dropzoneFile.value)
        if (dropzoneFile.value.type.match('text/csv')) {
          axios
            .request({
              method: 'post',
              url: url + '/csv',
              data: formData,
              onUploadProgress: (p) => {
                state.progress = p.loaded / p.total
                state.stage = 1
              },
            })
            .then((response) => {
              const output = response.data
              state.mins = millisToMinutes(output.duration)
              state.secs = millisToSeconds(output.duration)
              state.downs = output.downs
              state.ups = output.ups
              state.progress = 1
              state.stage = 2
            })
        } else {
          alert('Your file is not .csv!')
        }
      }

      return {
        dropzoneFile,
        drop,
        uploadFile,
        state,
      }
    },
  })
</script>

<style scoped>
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

  .container {
    width: 656px;
    height: 405px;
    background: #f5f7fc;
    border: 4px dashed #c7cddb;
    border-radius: 30px;
  }
</style>
