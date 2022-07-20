<template>
  <dv-full-screen-container id="index" ref="appRef">
    <div class="bg">
      <div class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">数据大屏</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColor" />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>
            </div>
          </div>
        </div>

        <router-view />
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
// import drawMixin from '../utils/drawMixin'
import { formatTime } from '@/utils/util'

export default {
  data() {
    return {
      timing: null,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000'],
    }
  },
  mounted() {
    this.timeFn()
  },
  beforeDestroy() {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
  },
}
</script>

<style lang="less" scoped>
#index {
  color: #d3d6dd;
  width: 100%;
  height: 100%;
  //width: 1920px;
  //height: 1080px;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //transform-origin: left top;
  overflow: hidden;

  .bg {
    width: 100%;
    height: 100%;
    padding: 16px 16px 0 16px;
    background-image: url('@/assets/pageBg.png');
    background-size: cover;
    background-position: center center;
  }

  .host-body {
    .dv-dec-10,
    .dv-dec-10-s {
      width: 33.3%;
      height: 5px;
    }
    .dv-dec-10-s {
      transform: rotateY(180deg);
    }
    .dv-dec-8 {
      width: 200px;
      height: 50px;
    }
    .title {
      position: relative;
      width: 500px;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-size: 24px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }

      .dv-dec-6 {
        position: absolute;
        bottom: -30px;
        left: 50%;
        width: 250px;
        height: 8px;
        transform: translate(-50%);
      }
    }

    // 第二行
    .aside-width {
      width: 40%;
    }
    .react-r-s,
    .react-l-s {
      background-color: #0f1325;
    }

    // 平行四边形
    .react-right {
      &.react-l-s {
        text-align: right;
        width: 500px;
      }
      font-size: 18px;
      width: 300px;
      line-height: 50px;
      text-align: center;
      transform: skewX(-45deg);

      .react-after {
        position: absolute;
        right: -25px;
        top: 0;
        height: 50px;
        width: 50px;
        background-color: #0f1325;
        transform: skewX(45deg);
      }

      .text {
        display: inline-block;
        transform: skewX(45deg);
      }
    }

    .react-left {
      &.react-l-s {
        width: 500px;
        text-align: left;
      }
      font-size: 18px;
      width: 300px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      transform: skewX(45deg);
      background-color: #0f1325;

      .react-left {
        position: absolute;
        left: -25px;
        top: 0;
        height: 50px;
        width: 50px;
        background-color: #0f1325;
        transform: skewX(-45deg);
      }

      .text {
        display: inline-block;
        transform: skewX(-45deg);
      }
    }

    .body-box {
      margin-top: 16px;
      display: flex;
      flex-direction: column;

      //下方区域的布局
      .content-box {
        display: grid;
        grid-template-columns: 2fr 3fr 5fr 3fr 2fr;
      }

      // 底部数据
      .bottom-box {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(2, 50%);
      }
    }
  }
}
</style>
