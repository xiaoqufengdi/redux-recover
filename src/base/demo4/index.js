import {Component, useEffect, useMemo} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActionCreators from './TodoActionCreators'
console.log(TodoActionCreators)
// {
//   addTodo: Function,
//   removeTodo: Function
// }

const TodoList = (props)=>{
    console.log('props', props);
    return (<div>
        aa
    </div>)
}

function TodoListContainer(props) {
    // react-redux 注入:
    const { dispatch, todos } = props

    // 这是一个很好的 bindActionCreators 用例:
    // 你希望子组件完全不知道 Redux.
    // 我们现在创建这些函数的绑定版本，以便我们可以
    // 之后将它们传给子组件.

    const boundActionCreators = useMemo(
        () => bindActionCreators(TodoActionCreators, dispatch),
        [dispatch]
    )
    console.log(boundActionCreators)
    // {
    //   addTodo: Function,
    //   removeTodo: Function
    // }

    useEffect(() => {
        // 注意： 这不起作用:
        // TodoActionCreators.addTodo('Use Redux')

        // 你只是在调用一个创建 action 的函数。
        // 你也必须同时 dispatch 一个 action！

        // 这将起到作用:
        let action = TodoActionCreators.addTodo('Use Redux')
        dispatch(action)
    }, [])

    return <TodoList todos={todos} {...this.boundActionCreators} />

    //  bindActionCreators 的替代方法
    // 只有向下传递 dispatch 函数, 但是你的子组件
    // 需要 import action creators 并了解它们.

    // return <TodoList todos={todos} dispatch={dispatch} />
}

export default connect(state => ({ todos: state.todos }))(TodoListContainer)