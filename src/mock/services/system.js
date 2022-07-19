import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 5701

const userDataList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      name: Mock.mock('@cname'), // 名称
      sex: Mock.mock({ 'sex|1': ['男', '女'] }), // 性别
      phone: Mock.mock('@integer(11)'), // 手机号
      email: Mock.mock('@email'), // 邮箱
      role: Mock.mock('@integer(0, 3)'), // 角色
      status: Mock.mock('@integer(0, 1)'), // 状态
      createTime: Mock.mock('@datetime'), // 创建时间
      fullName: Mock.mock('@name'), // 全称
      startTime: Mock.mock('@datetime'), // 起始时间
      endTime: Mock.mock('@datetime'), // 结束时间
      CertificationStatus: Mock.mock('@integer(0, 3)'), // 认证状态
      editable: false,
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

const roleDataList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      name: Mock.mock('@cname'), // 名称
      role: Mock.mock('@integer(0, 3)'), // 角色
      code: Mock.mock('@string("number", 5)'), // 编码
      remark: Mock.mock('@cparagraph(1, 3)'), // 备注
      createTime: Mock.mock('@datetime'), // 创建时间
      CertificationStatus: Mock.mock('@integer(0, 3)'), // 认证状态
      editable: false,
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

const permissionDataList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      ID: tmpKey,
      name: Mock.mock('@cname'), // 名称
      code: Mock.mock('@string("number", 5)'), // 编码
      type: 'menu', // 类型
      queueNum: Mock.mock('@integer(0, 3)'), // 排序号
      createTime: Mock.mock('@datetime'), // 创建时间
      children: Mock.mock([
        {
          key: tmpKey * 5,
          ID: tmpKey * 5,
          name: Mock.mock('@cname'), // 名称
          code: Mock.mock('@string("number", 5)'), // 编码
          type: 'action', // 类型
          queueNum: Mock.mock('@integer(0, 3)'), // 排序号
          createTime: Mock.mock('@datetime'), // 创建时间
        },
      ]),
      editable: false,
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

const dictionaryDataList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      ID: tmpKey,
      name: Mock.mock('@cname'), // 名称
      code: Mock.mock('@string("number", 5)'), // 编码
      desc: Mock.mock('@csentence(1, 3)'), // 描述
      queue: Mock.mock('@integer(0, 3)'), // 排序
      createTime: Mock.mock('@datetime'), // 创建时间
      editable: false,
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

const paramsDaraList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      ID: tmpKey,
      name: Mock.mock('@cname'), // 名称
      code: Mock.mock('@string("number", 5)'), // 编码
      value: Mock.mock('@integer(1, 3)'), // 值
      desc: Mock.mock('@csentence(3, 8)'), // 描述
      queue: Mock.mock('@integer(0, 3)'), // 排序
      createTime: Mock.mock('@datetime'), // 创建时间
      type: 'menu',
      editable: false,
      children: Mock.mock([
        {
          key: tmpKey * 5,
          ID: tmpKey * 5,
          name: Mock.mock('@cname'), // 名称
          code: Mock.mock('@string("number", 5)'), // 编码
          value: Mock.mock('@integer(1, 3)'), // 值
          desc: Mock.mock('@csentence(3, 8)'), // 描述
          queue: Mock.mock('@integer(0, 3)'), // 排序
          createTime: Mock.mock('@datetime'), // 创建时间
          type: 'action',
        },
      ]),
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

const logDataList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      ID: tmpKey,
      name: Mock.mock('@cname'), // 用户名
      organization: Mock.mock('@string("number", 5)'), // 所属组织
      type: Mock.mock('@integer(1, 3)'), // 操作类型
      content: Mock.mock('@csentence(3, 8)'), // 操作内容
      createTime: Mock.mock('@datetime'), // 时间
      editable: false,
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

const gatewayDataList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      ID: tmpKey,
      name: Mock.mock('@cname'), // 用户名
      type: Mock.mock('@integer(1, 3)'), // 类型
      createTime: Mock.mock('@datetime'), // 创建时间
      editable: false,
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

const routerDataList = options => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNumber)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      ID: tmpKey,
      routerName: Mock.mock('@cname'), // 路由名称
      clusterName: Mock.mock('@cname'), // 集群名称
      policy: 'permission', // 授权策略
      cors: 'cors', // cors
      path: '/a/ab/c', // path
      createTime: Mock.mock('@datetime'), // 创建时间
      editable: false,
    })
  }

  return builder({
    pageSize: pageSize,
    current: pageNo,
    TotalCount: totalCount,
    totalPage: totalPage,
    Result: result,
  })
}

Mock.mock(/\/system\/permission/, 'get', permissionDataList) // 系统管理/权限资源
Mock.mock(/\/system\/table/, 'get', userDataList) // 系统管理/用户管理
Mock.mock(/\/system\/role/, 'get', roleDataList) // 系统管理/角色管理
Mock.mock(/\/system\/dictionary/, 'get', dictionaryDataList) // 系统管理/字典类型
Mock.mock(/\/system\/params/, 'get', paramsDaraList) // 系统管理/系统参数
Mock.mock(/\/system\/log/, 'get', logDataList) // 系统管理/操作日志
Mock.mock(/\/system\/gateway/, 'get', gatewayDataList) // 系统管理/API网关管理-集群
Mock.mock(/\/system\/router/, 'get', routerDataList) // 系统管理/API网关管理-路由
