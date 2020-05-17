const defaultState = {
  data: [],
  messageObj: {},
  currentObj: {}
}


export default function tableReducer(state = defaultState, action) {
  switch (action.type) {
    //获取用户数据
    case 'FETCH_TABLE_DATA':
      return { ...state, data: action.payload.users }
    case 'FETCH_TABLE_DELETE': 
      return { ...state, messageObj: action.payload }
    case 'FETCH_TABLE_BACK':
      return { ...state, currentObj: action.payload }
    default:
      return state
  }
}