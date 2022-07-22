<template>
  <div id="data-view" ref="appRef">
    <top-header />

    <div class="main-content">
      <!-- left -->
      <div class="block-left-content">
        <line-bar-chart />

        <ring-bar-chart />

        <bar-chart />
      </div>

      <!-- middle -->
      <div class="block-middle-content">
        <!-- middle-top -->
        <div class="block-top-content">
          <rose-chart />

          <water-level-chart />

          <!-- <flyline-chart /> -->
        </div>

        <!-- middle-bottom -->
        <scroll-board />
      </div>

      <!-- right -->
      <div class="block-right-content">
        <ranking-board />

        <pie-chart />
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from './components/TopHeader'
import FlylineChart from './components/FlylineChart'
// import digitalFlop from './components/DigitalFlop'
import rankingBoard from './components/RankingBoard'
import roseChart from './components/RoseChart'
import waterLevelChart from './components/WaterLevelChart'
import scrollBoard from './components/ScrollBoard'
// import cards from './components/Cards'
import LineBarChart from './components/LineBarChart'
import RingBarChart from './components/RingBarChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

import resizeMixins from '@/mixins/resizeMixins'

export default {
  name: 'Index',
  mixins: [resizeMixins],
  components: {
    topHeader,
    FlylineChart,
    // digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    // cards,
    LineBarChart,
    RingBarChart,
    BarChart,
    PieChart,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
#data-view {
  width: 1920px;
  height: 1080px;
  color: #fff;
  background-image: url('@/assets/datav/bg.png');
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 3px blue;
  transform-origin: left top;

  .main-content {
    width: 100%;
    height: calc(100% - 100px);
    flex: 1;
    display: flex;
  }
  .block-left-content {
    width: 20%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .block-right-content {
    width: 20%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .block-middle-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
  }
  .block-top-content {
    height: 100%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
}
</style>
