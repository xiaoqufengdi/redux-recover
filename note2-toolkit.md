# [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
+ cra 
```bash
yarn create react-app my-redux-toolkit
cd my-redux-toolkit
yarn add @reduxjs/toolkit react-redux
```
>toolkit含redux,默认包含redux-thunk中间件
+ Redux Toolkit 包含以下 API：
```text
configureStore（）：换行以提供简化的配置选项和良好的默认值。它可以自动组合您的切片缩减器，添加您提供的任何 Redux 中间件，默认情况下包括，并允许使用 Redux DevTools 扩展。createStoreredux-thunk
createReducer（）：允许您向 case reducer 函数提供操作类型的查找表，而不是编写 switch 语句。此外，它会自动使用 immer 库，让您使用普通的可变代码编写更简单的不可变更新，例如 .state.todos[3].completed = true
createAction（）：为给定的动作类型字符串生成动作创建者函数。
createSlice（）：接受 reducer 函数的对象、slice 名称和初始状态值，并自动生成一个包含对应动作创建者和动作类型的 slice reducer。
combineSlices（）：将多个切片合并为一个缩减器，并允许在初始化后“延迟加载”切片。
createAsyncThunk：接受一个动作类型字符串和一个返回 promise 的函数，并生成一个 thunk 来根据该 promise 调度动作类型pending/fulfilled/rejected
createEntityAdapter：生成一组可重用的 reducer 和选择器，用于管理存储中的规范化数据
Reselect 库中的 createSelector 实用程序，为便于使用而重新导出。
```

+ RTK Query
```text
createApi（）：RTK Query 的核心功能。它允许您定义一组端点，并描述如何从一系列端点检索数据，包括如何获取和转换该数据的配置。在大多数情况下，您应该为每个应用使用一次，并按照经验法则“每个基本 URL 一个 API 切片”。
fetchBaseQuery（）：一个围绕 fetch 的小型包装器，旨在简化请求。旨在作为推荐用于大多数用户的用途。baseQuerycreateApi
<ApiProvider />：如果您还没有 Redux 商店，则可以用作 a。Provider
setupListeners（）：用于启用和行为的实用程序。refetchOnMountrefetchOnReconnect
```

Redux Toolkit + React