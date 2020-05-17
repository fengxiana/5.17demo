import { post } from '@/utils/request'
import api from '@/services/api'


//登录action
export function Login (options) {
  return {
    type: 'FETCH_LOGIN_INTO',
    payload: post(api.loginAPI, options)
  }
}

