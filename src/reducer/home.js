const defaultState = {
  title: '修改'
}


export default function homeReducer(state = defaultState, action) {
  switch (action.type) {
    //区分添加修改
    case 'FETCH_HOME_TITLE':
      return { ...state, title: action.payload }
    default:
      return state
  }
}