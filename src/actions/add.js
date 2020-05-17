import { post } from '@/utils/request'
import api from '@/services/api'


//添加用户action
export function Add (options) {
  return {
    type: 'FETCH_ADD_INTO',
    payload: post(api.addAPI, options)
  }
}

//修改用户action
export function Update (options) {
  return {
    type: 'FETCH_ADD_UPDATE',
    payload: post(api.updateAPI, options)
  }
}