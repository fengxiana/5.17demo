const defaultState = {
  data: {}
}


export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    //登录
    case 'FETCH_LOGIN_INTO':
      return { data: action.payload }
    default:
      return state
  }
}