import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
//promise可以让action实现异步的方式
import promise from 'redux-promise'
//thunk可以让action以函数的形式去写
import thunk from 'redux-thunk'
import login from '@/reducer/login'
import table from '@/reducer/table'
import add from '@/reducer/add'
import home from '@/reducer/home'

import { persistReducer } from 'redux-persist' // 合并 reduce
import storage from 'redux-persist/lib/storage' // 创建 store

// 多层对象 做数据持久化
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// 我要对哪些 reduce 的 state 做数据持久化
const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  // 白名单 [reducer 目录内的 reduce 文件名]
  whitelist: ['login'],  
}


//配合redux插件使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 抽离出一个需要持久化的公共 reduce
const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    login,
    table,
    add,
    home
  }
))

const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(promise, thunk))
)

export { store }