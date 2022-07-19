import { numStringPattern, numStringPointPattern, phonePattern, emailPattern } from '@/config/pattern'

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      formStatus: -1, // 0: 新增; 1: 编辑; 2: 详情.
      rules: {
        common: [{ required: true, message: '请输入' }],
        select: [{ required: true, message: '请选择' }],
        phone: [
          { required: true, message: '请输入手机号' },
          { pattern: phonePattern, message: '手机号格式不正确' },
        ],
        email: [
          { required: true, message: '请输入邮箱' },
          { pattern: emailPattern, message: '邮箱格式不正确' },
        ],
        name: [
          { required: true, message: '请输入名称' },
          { pattern: numStringPointPattern, message: '名称格式不正确' },
        ],
        code: [
          { required: true, message: '请输入编码' },
          { pattern: numStringPattern, message: '编码格式不正确' },
        ],
        desc: [
          { required: true, message: '请输入备注' },
          { maxLength: 100, message: '超出长度限制' },
        ],
      },
    }
  },
  methods: {
    // 为表单设置初始值
    setFieldsValue(formData) {
      const curFormData = { ...this.form.getFieldsValue(), ...(formData || {}) }
      this.$nextTick(() => {
        this.form.setFieldsValue(curFormData)
      })
    },
    // 点击确定
    clickConfirm() {
      this.form.validateFieldsAndScroll((err, values) => {
        try {
          if (err) return
          this.submit(values)
        } catch (e) {
          console.error(e)
          throw e
        }
      })
    },
    // 点击取消
    clickCancel() {
      this.form.resetFields()
      this.visible = false
    },
    // 表单提交事件
    submit(form) {
      this.$emit('submit', form, this.formStatus)
    },
  },
}
