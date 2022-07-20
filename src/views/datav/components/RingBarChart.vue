<template>
  <div class="top-right-cmp">
    <div class="line-bar-chart-title">机电设备完好率</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: 'RingBarChart',
  data() {
    return {
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '监控系统', value: 93, radius: ['30%', '33%'] },
              { name: '收费系统', value: 65, radius: ['32%', '35%'] },
              { name: '通信系统', value: 32, radius: ['31%', '37%'] },
              { name: '供配电系统', value: 44, radius: ['31%', '32%'] },
              { name: '其它', value: 52, radius: ['32%', '35%'] },
            ],
            outsideLabel: {
              labelLineEndLength: 20,
              formatter: '{percent}%\n{name}',
              style: {
                fill: '#fff',
              },
            },
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [{ value: 10, radius: ['50%', '53%'] }],
            outsideLabel: {
              show: false,
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)',
            },
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [{ value: 10, radius: ['45%', '46%'] }],
            outsideLabel: {
              show: false,
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)',
            },
          },
        ],
        color: ['#00c0ff', '#3de7c9', '#fff', '#00c0ff', '#3de7c9', '#fff'],
      },
    }
  },
}
</script>

<style lang="less" scoped>
.top-right-cmp {
  height: calc((100% - 40px) / 3);
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  padding: 0 5px;
  margin-bottom: 10px;
  .line-bar-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
}
</style>
