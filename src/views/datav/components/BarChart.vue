<template>
  <div class="left-chart-1">
    <div class="line-chart-title">设备运行数</div>
    <div class="lc1-details">设备运行总数<span>430</span></div>
    <dv-capsule-chart class="lc1-chart" :config="config" />
    <dv-decoration-2 style="height: 10px" />
  </div>
</template>

<script>
export default {
  name: 'BarChart',
  data() {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 167,
          },
          {
            name: '通信系统',
            value: 67,
          },
          {
            name: '监控系统',
            value: 123,
          },
          {
            name: '供配电系统',
            value: 55,
          },
          {
            name: '其他',
            value: 98,
          },
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '件',
      },
    }
  },
}
</script>

<style lang="less" scoped>
.left-chart-1 {
  width: 100%;
  height: calc((100% - 20px) / 3);
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  padding: 0 5px;
  .line-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .lc1-details {
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }
  .lc1-chart {
    flex: 1;
  }
}
</style>
