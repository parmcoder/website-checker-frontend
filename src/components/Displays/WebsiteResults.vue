<template>
  <div class="box">
    <div>Total {{ numberOfSites }} website</div>
    <div>(Used {{ mins }} minute and {{ secs }} second)</div>
    <span>UP {{ numUp }}</span>
    <span>UP {{ numDown }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'WebsiteResults',
    props: {
      numberOfSites: {
        required: false,
      },
      mins: {
        required: false,
      },
      secs: {
        required: false,
      },
      numUp: {
        required: false,
      },
      numDown: {
        required: false,
      },
    },
  })
</script>

<style scoped>
  .box {
    width: 650px;
    height: 240px;
    background: #fff;
    box-shadow: 0 4px 30px 4px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }

  h1 {
    color: #64697f;
  }

  h3 {
    color: #64697f;
  }
</style>
