import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter(){
    // 在你的 React 组件中使用 useSelector 来选择和获取 Redux store 中的状态。首先，确保你的组件被 Redux 的 Provider 包裹。
    const count = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()
    // 使用钩子从存储中读取数据useSelector
    // 通过钩子获取函数，并根据需要调度动作dispatchuseDispatch

    return (
        <div style={{padding: '20px'}}>
            <div>
                <Button onClick={()=>dispatch(increment())}>
                    Increment
                </Button>
                <span>&nbsp;&nbsp; {count} &nbsp;&nbsp; </span>
                <Button onClick={()=>dispatch(decrement())}>
                    Decrement
                </Button>
            </div>
        </div>
    )
}