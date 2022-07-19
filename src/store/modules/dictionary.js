import storage from 'store'
import { SET_DICTIONARY } from '../mutation-types'
import { getDictionaryList } from '@/api/system/dictionary'

const dictionary = {
  state: {
    DICTIONARY_MAP: {},
  },
  mutations: {
    /**
     * @param {String} classifyId 数据字典的分类ID
     * @param {Array} data 数据字典分类ID对应的具体数据
     */
    [SET_DICTIONARY]: (state, { classifyId, data }) => {
      state.DICTIONARY_MAP = Object.assign({}, state.DICTIONARY_MAP, { [classifyId]: data })
    },
  },
  actions: {
    /**
     * @param {String, Array} classifyIds 可以传单个classifyId或者以数组形式传递多个classifyId, 不传时返回所有字典
     */
    LoadDictionary({ commit }, classifyIds) {
      classifyIds = classifyIds ? (Array.isArray(classifyIds) ? classifyIds : [classifyIds]) : []
      const params = classifyIds.length ? { classifyIdList: classifyIds.map(id => `'${id}'`) } : {}
      const dictionaryMap = {}
      return new Promise((resolve, reject) => {
        getDictionaryList(params)
          .then(({ data }) => {
            const list = data.list || []
            list.forEach(item => {
              dictionaryMap[item.classifyId]
                ? dictionaryMap[item.classifyId].push(item)
                : (dictionaryMap[item.classifyId] = [item])
            })
            for (let key in dictionaryMap) {
              commit(SET_DICTIONARY, { classifyId: key, data: dictionaryMap[key] })
            }

            storage.set('dictionary', dictionaryMap)
            resolve(dictionaryMap)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  },
}

export default dictionary
