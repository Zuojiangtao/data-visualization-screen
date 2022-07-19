export default {
  data() {
    return {
      // query
      params: {}, // 查询数据的参数
      // table
      loading: false, // 表格 Loading 属性
      data: [], // 表格数据
      hasPagination: true, // 是否需要分页
      // 表格分页器
      pagination: {
        current: 1,
        pageSize: 20,
        total: 0,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: total => `共${total}项`, // 显示总数
        pageSizeOptions: ['5', '10', '20', '50', '100'], // 分页选项
      },
      // 表格行选择
      rowSelection: {
        selectedRows: [],
        selectedRowKeys: [],
        type: 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
          this.rowSelection.selectedRowKeys = selectedRowKeys
          this.rowSelection.selectedRows = selectedRows
        },
        onSelect: (record, selected, selectedRows) => {
          this.rowSelection.selectedRows = selectedRows
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          this.rowSelection.selectedRows = selectedRows
        },
      },
      serial: index => {
        return this.pagination.pageSize * (this.pagination.current - 1) + (index + 1)
      },
      crudMethod: {
        list: params => {},
        add: form => {},
        del: id => {},
        delAll: ids => {},
        edit: form => {},
      },
      // 是否在created时调用获取列表数据接口
      isloadTableDataCreated: true,
    }
  },
  created() {
    this.isloadTableDataCreated && this.getTableData()
  },
  async activated() {
    this.toQuery()
  },
  methods: {
    // 清除表格行选择项
    clearRowSelection() {
      this.$set(this.rowSelection, 'selectedRowKeys', [])
      this.$set(this.rowSelection, 'selectedRows', [])
    },
    // 查询方法
    toQuery() {
      this.pagination.current = 1
      this.getTableData()
    },
    // 模糊查询 - inputSearch
    inputSearch(value) {
      this.params = {
        ...this.params,
        fuzzyContent: value,
      }
      this.toQuery()
    },
    // 模糊查询清空查询字段重置
    inputChange(e) {
      if (!e.target.value) {
        this.resetSearch()
      }
    },
    // 清空查询条件
    resetSearch() {
      this.params = {}
      this.toQuery()
    },
    // 获取表格查询参数
    getQueryParams() {
      return this.hasPagination
        ? {
            offset: (this.pagination.current - 1) * this.pagination.pageSize,
            limit: this.pagination.pageSize,
            ...this.params,
          }
        : this.params
    },
    async getTableData() {
      this.loading = true
      try {
        // 请求数据
        const { data } = await this.crudMethod.list(this.getQueryParams())
        console.log('data:::', data)
        this.pagination.total = data.totalCount
        this.data = data.list
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    // 改变页码或每页显示数
    onChangeTable({ current, pageSize }) {
      this.pagination.current = current
      this.pagination.pageSize = pageSize
      this.getTableData()
    },
    // 预防删除最后一页最后一条数据时，或者多选删除第二页的数据时，页码错误导致请求无数据
    delChangePage(size) {
      if (size === undefined) {
        size = 1
      }
      if (this.data.length === size && this.pagination.current !== 0) {
        this.pagination.current--
      }
    },
    /**
     * 通用的提示封装
     */
    submitSuccessNotify() {
      this.$message.success('提交成功', 2)
    },
    submitFailNotify() {
      this.$message.error('提交失败', 2)
    },
    addSuccessNotify() {
      this.$message.success('新增成功', 2)
    },
    addFailNotify() {
      this.$message.error('新增失败', 2)
    },
    editSuccessNotify() {
      this.$message.success('编辑成功', 2)
    },
    editFailNotify() {
      this.$message.error('编辑失败', 2)
    },
    delSuccessNotify() {
      this.$message.success('删除成功', 2)
    },
    delFailNotify() {
      this.$message.error('删除失败', 2)
    },
    /**
     * 通用的删除
     */
    async delMethod(id) {
      try {
        const res = await this.crudMethod.del(id)
        if (res.success) {
          this.delChangePage()
          this.delSuccessNotify()
          await this.getTableData()
        } else {
          this.$message.error(res.message, 2)
        }
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * 多选删除
     */
    async delAllMethod() {
      const data = this.rowSelection.selectedRows
      const ids = []
      for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
      }
      try {
        const res = await this.crudMethod.delAll(ids)
        if (res.success) {
          this.delChangePage(ids.length)
          this.delSuccessNotify()
          await this.getTableData()
        } else {
          this.$message.error(res.message, 2)
        }
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * 新增方法
     */
    async addMethod(values) {
      console.log('新增表单提交form数据::' + JSON.stringify(values))
      this.loading = true
      try {
        const res = await this.crudMethod.add(values)
        if (res.success) {
          this.cancel()
          this.addSuccessNotify()
          await this.getTableData()
        } else {
          this.$message.error(res.message, 2)
        }
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    /**
     * 通用的编辑方法
     */
    async editMethod(values) {
      console.log('编辑表单提交form数据::' + JSON.stringify(values))
      this.loading = true
      try {
        const res = await this.crudMethod.edit({ ...values })
        if (res.success) {
          this.cancel()
          this.editSuccessNotify()
          await this.getTableData()
        } else {
          this.$message.error(res.message, 2)
        }
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    /**
     * 隐藏新增/编辑弹窗
     */
    cancel() {
      this.$refs.formPages.clickCancel()
    },
    /**
     * 显示删除提示弹窗
     */
    showDelTableFormDialog(id) {
      this.$confirm({
        title: '删除',
        content: '确定删除该信息?',
        closable: true,
        onOk: () => {
          this.delMethod(id)
        },
        onCancel() {},
      })
    },
    /**
     * 显示多选删除提示弹窗
     */
    showDelAllTableFormDialog() {
      this.$confirm({
        title: '删除',
        content: '确定删除所选信息?',
        closable: true,
        onOk: () => {
          this.delAllMethod()
        },
        onCancel() {},
      })
    },
    /**
     * 提交
     */
    async submitMethod(values, status) {
      const _this = this
      await [_this.addMethod, _this.editMethod][status](values)
    },
  },
}
