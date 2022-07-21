/**
 * 全屏自适应适配
 * 全屏铺满方案： 根据设计稿全屏铺满，保证绝大多数分辨率屏幕且无论是否全屏都铺满
 * */

export default {
  data() {
    return {
      baseWidth: 1920, // 设计稿宽度
      baseHeight: 1080, // 设计稿高度
    }
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      const appRef = this.$refs['appRef']
      if (!appRef) return
      const scaleX = (window.innerWidth / this.baseWidth).toFixed(5)
      const scaleY = (window.innerHeight / this.baseHeight).toFixed(5)
      appRef.style.transform = `scale(${scaleX}, ${scaleY})`
    },
  },
}
