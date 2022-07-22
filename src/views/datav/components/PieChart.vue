<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
      <div class="pie-chart-title">机电设备完好率</div>
      <dv-active-ring-chart :config="config1" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PieChart',
  data() {
    return {
      config1: {
        data: [
          {
            name: '收费站',
            value: 356,
          },
          {
            name: '监控中心',
            value: 215,
          },
          {
            name: '道路外场',
            value: 90,
          },
          {
            name: '其他',
            value: 317,
          },
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%',
      },
      labelConfig: {
        data: ['收费站', '监控中心', '道路外场', '其他'],
      },
    }
  },
}
</script>

<style lang="less" scoped>
.bottom-charts {
  width: 100%;
  height: calc((100% - 20px) / 3);
  display: flex;
  position: relative;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  padding: 0 5px;
  margin-top: 10px;
  .bc-chart-item {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .pie-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .dv-active-ring-chart {
    height: calc(~'100% - 80px');
  }
  .label-tag {
    height: 30px;
  }
  .active-ring-name {
    font-size: 18px !important;
  }
  .decoration-1 {
    position: absolute;
    left: 0%;
  }
}
</style>
