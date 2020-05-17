const defaultState = {

}


export default function tableReducer(state = defaultState, action) {
  switch (action.type) {
    //添加数据
    case 'FETCH_ADD_INTO':
      return { data: action.payload }
    case 'FETCH_ADD_UPDATE':
      return { data: action.payload }
    default:
      return state
  }
}