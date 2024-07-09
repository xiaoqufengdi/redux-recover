import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import commentsReducer from './comments'
import {counterReducer} from "./counter";


// 自定义中间件
// function logger({getState, dispatch}) { //midApi
//                                         // 返回真正中间件任务执行函数
//     return dispatch => action => {
//         // 执行中间件任务
//         console.log(action.type + "执行了！！！");
//
//         // 执行下一个中间件
//         return dispatch(action);
//     };
// }
// // thunk实现
// const thunk = ({getState}) => dispatch => action => {
//     // thunk逻辑：处理函数action
//     if (typeof action == 'function') {
//         return action(dispatch, getState)
//     }
//     // 不是函数直接跳过
//     return dispatch(action)
// }

const reduces = combineReducers({
    commentsReducer,
    counterReducer
})
const store = createStore(reduces, applyMiddleware(logger, thunk));


export default store;