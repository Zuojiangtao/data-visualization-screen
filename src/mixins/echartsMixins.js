import * as echarts from 'echarts/core'

export default {
  data() {
    return {
      charts: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts()
    })
    window.addEventListener('resize', this.resize)
  },
  activated() {
    this.resize()
  },
  beforeDestroy() {
    this.charts && this.charts.dispose()
    window.removeEventListener('resize', this.resize)
    this.charts = null
  },
  methods: {
    initCharts() {
      const chartDom = this.$refs.charts
      this.charts = echarts.init(chartDom)
      this.options && this.charts.setOption(this.options)
    },
    resize() {
      this.charts && this.charts.resize()
    },
  },
}
