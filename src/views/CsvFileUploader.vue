<template>
  <h1 class="text" style="margin-right: 400px">Website Checker</h1>
  <div class="box container">
    <DropZone @drop.prevent="drop" @change="uploadFile" />
  </div>
  <FileUploadDisplay :name="dropzoneFile.name" />
  <WebsiteResults />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import FileUploadDisplay from '@/components/Displays/FileUploadDisplay.vue'
  import WebsiteResults from '@/components/Displays/WebsiteResults.vue'
  import DropZone from '@/components/Core/DropZone.vue'

  export default defineComponent({
    name: 'CsvFileUploader',
    components: {
      FileUploadDisplay,
      WebsiteResults,
      DropZone,
    },
    setup: () => {
      const url = import.meta.env.VITE_API_BASE_URL

      let dropzoneFile = ref('')

      const drop = (e: { dataTransfer: { files: string[] } }) => {
        dropzoneFile.value = e.dataTransfer.files[0]
      }

      const selectedFile = () => {
        dropzoneFile.value = document.querySelector('.dropzoneFile')?.files[0]
      }

      const uploadFile = async () => {
        dropzoneFile.value = document.querySelector('.dropzoneFile')?.files[0]

        const formData = new FormData()

        formData.append('file', dropzoneFile.value)

        console.log(url + '/csv')

        const response = await fetch(url + '/csv', {
          method: 'POST',
          body: formData,
        })
        const responseJson = await response.json()
        console.log(responseJson)
      }

      return {
        dropzoneFile,
        drop,
        selectedFile,
        uploadFile,
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
