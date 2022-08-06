<template>
  <div
    :class="{ 'active-dropzone': active }"
    class="dropzone"
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
  >
    <img
      class="image-frame"
      alt="Vue logo"
      src="@/assets/csv.png"
      placeholder="Image of CSV?"
    />
    <div class="text">Drag your .csv file here to start uploading</div>
    <div class="center">
      <Line />
      <div class="safe-text">OR</div>
      <Line />
    </div>
    <label class="text center" for="dropzoneFile">Select File</label>
    <input id="dropzoneFile" type="file" class="dropzoneFile" />
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import Line from '@/components/Decorators/Line.vue'
  export default {
    name: 'DropZone',
    components: {
      Line,
    },
    setup() {
      const active = ref(false)
      const toggleActive = () => {
        active.value = !active.value
      }
      return { active, toggleActive }
    },
  }
</script>

<style scoped lang="scss">
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

  .safe-text {
    margin: 2%;
  }

  .image-frame {
    height: 120px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  input[type='file'] {
    display: none;
  }

  .active-dropzone {
    color: #fff;
    border-color: #fff;
    background-color: #6a9aad;

    label {
      background-color: #fff;
      color: #41b883;
    }
  }

  .dropzone {
    width: 656px;
    height: 405px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    transition: 0.3s ease all;

    label {
      padding: 8px 12px;
      color: #fff;
      border-radius: 10px;
      margin: 0 2px 40px 2px;
      height: 85px;
      width: 250px;
      background: #6749f5;
      transition: 0.3s ease all;
    }

    label:hover {
      background: #563dd4;
    }

    input {
      display: none;
    }
  }
</style>
