<template>
  <div id="data-view">
    <dv-full-screen-container>
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
    </dv-full-screen-container>
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

export default {
  name: 'Index',
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
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url('@/assets/datav/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    width: 100%;
    height: 100%;
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
