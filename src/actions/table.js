import { get, post } from '@/utils/request'
import api from '@/services/api'


//获取用户数据action
export function getData () {
  return {
    type: 'FETCH_TABLE_DATA',
    payload: get(api.dataAPI)
  }
}

//删除数据action
export function deleteData (options) {
  return {
    type: 'FETCH_TABLE_DELETE',
    payload: post(api.deleteAPI, options)
  }
}

//数据回显action
export function backData (options) {
  return {
    type: 'FETCH_TABLE_BACK',
    payload: options
  }
}