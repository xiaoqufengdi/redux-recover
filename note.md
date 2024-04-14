# 用来复习redux状态管理器的demo
+ hook 版本的小书
  + dd
+ class
  + componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
  + componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
  + componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。
```text
-> constructor()
-> componentWillMount()
-> render()
// 然后构造 DOM 元素插入页面
-> componentDidMount()

// 即将从页面中删除
-> componentWillUnmount()
// 从页面中删除


我们一般会把组件的 state 的初始化工作放在 constructor 里面去做；在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；
组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做。
componentDidMount 。一般来说，有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，
所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中。

shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
componentWillUpdate()：组件开始重新渲染之前调用。
componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。
```