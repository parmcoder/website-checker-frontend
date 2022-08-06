<template>
  <div class="box">
    <div class="title">Total {{ numberOfSites }} website</div>
    <div class="subtitle">(Used {{ mins }} minute and {{ secs }} second)</div>
    <div class="row">
      <div class="website-box up column">
        <h2>UP</h2>
        <div class="number">
          {{ numUp }}
        </div>
      </div>
      <div class="website-box down column">
        <h2>DOWN</h2>
        <div class="number">
          {{ numDown }}
        </div>
      </div>
    </div>
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
    height: 300px;
    background: #fff;
    box-shadow: 0 4px 30px 4px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }

  .title {
    width: 400px;
    height: 40px;
    padding-top: 35px;
    padding-left: 35px;
    font-size: 36px;
    text-align: left;
    font-weight: bold;
    color: #64697f;
  }

  .subtitle {
    width: 400px;
    height: 30px;
    padding-left: 35px;

    text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: #64697f;
  }

  .up h2 {
    text-align: left;
    padding-left: 20px;
    padding-top: 16px;
    line-height: 0px;
    color: #ffffff;
  }

  .down h2 {
    text-align: left;
    padding-left: 20px;
    padding-top: 16px;
    line-height: 0px;
  }

  .number {
    font-size: 60px;
    font-weight: bold;
  }

  .up .number {
    color: #ffffff;
  }

  .website-box {
    display: absolute;
    width: 151px;
    height: 151px;

    background: #3fe364;
    border-radius: 16px;
  }

  .up {
    margin: 0px 30px 25px 100px;

    background: #3fe364;
    border-radius: 16px;
  }

  .down {
    margin: 0px 150px 25px 10px;

    background: #f5f7fc;
    border-radius: 16px;
  }

  .row {
    margin-top: 20px;
    margin-left: 40px;
    display: flex;
  }

  .column {
    flex: 50%;
  }
</style>
