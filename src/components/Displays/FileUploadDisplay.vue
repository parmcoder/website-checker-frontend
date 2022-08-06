<template>
  <div class="box">
    <div>
      <img
        class="image-frame"
        alt="Vue logo"
        src="@/assets/csv.png"
        placeholder="Image of CSV?"
      />
    </div>

    <!-- <span v-if="progress !== 1"> -->
    <div v-if="progress !== 1" class="center">
      <span class="text center">
        {{ name }}
      </span>
      <span class="percent center">{{ progress * 100 }}% </span>
      <div>
        <progress id=" file" :value="progress" max="1"></progress>
      </div>
    </div>
    <div v-if="progress === 1" class="center">
      <span class="text center"> Processing your request. Please wait! </span>
      <span class="percent center">{{ progress * 100 }}% </span>
      <div>
        <progress></progress>
      </div>
    </div>
    <!-- <span v-if="progress === 1">
      <div> Processing your request. Please wait!
      </div>
      <progress></progress>
    </span> -->
    <!-- </span> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'FileUploadDisplay',
    props: {
      name: {
        type: String,
        required: false,
      },
      progress: {
        type: Number,
        required: true,
      },
    },
  })
</script>

<style scoped>
  .image-frame {
    float: left;
    height: 60px;
    width: 60px;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 30px;
  }

  .center {
    display: absolute;
    margin-top: 25px;
  }

  .box {
    display: absolute;
    width: 650px;
    height: 120px;
    background: #fff;
    box-shadow: 0 4px 30px 4px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }

  .text {
    float: left;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-left: 30px;
    color: #a2aabd;
  }

  .percent {
    float: right;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-right: 30px;
    color: #a2aabd;
  }

  progress {
    width: 500px;
    height: 12px;
    border-radius: 21px;
    margin-top: 10px;
  }

  progress[value] {
    color: #6749f5;
  }

  progress:not([value]) {
    color: #6749f5;
  }
</style>
