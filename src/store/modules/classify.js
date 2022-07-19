import { getProductClassifyList, editProductClassify } from '@/api/product/product'
import { SET_CLASSIFY } from '../mutation-types'

const CLASSFIY_API = {
  // 产品
  product: { get: getProductClassifyList, set: editProductClassify },
}

const classify = {
  state: {
    productClassifyList: [], // 产品分类
  },
  getters: {
    // 产品分类
    productClassifyList: state => state.productClassifyList,
  },
  mutations: {
    /**
     * @param {String} module 属于哪个模块的分类
     * @param {Array} data 分类数据
     */
    [SET_CLASSIFY]: (state, { module, data }) => {
      state[`${module}ClassifyList`] = data
    },
  },
  actions: {
    LoadClassify({ commit }, { module, params = {} }) {
      return new Promise((resolve, reject) => {
        const getClassifyList = CLASSFIY_API[module].get
        getClassifyList(params)
          .then(({ data }) => {
            const list = data.list || []
            commit(SET_CLASSIFY, { module, data: list })
            resolve(list)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetClassify({ commit }, { module, data }) {
      return new Promise((resolve, reject) => {
        const setClassify = CLASSFIY_API[module].set
        setClassify(data)
          .then(({ data }) => {
            const list = data.list || []
            commit(SET_CLASSIFY, { module, data: list })
            resolve(list)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
  },
}

export default classify
