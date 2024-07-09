// 用来专门生产这种 state 和 dispatch 的集合
function createStore(state, stateChanger) {
    const listeners = [];
    const subscribe = (listener)=>listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) =>{
        state = stateChanger(state, action) // 覆盖原对象
        listeners.forEach((listener) => listener())

    }

    return { getState, dispatch, subscribe  }
}

function renderApp (appState,  oldAppState = {}) {
    if (appState === oldAppState) return // 数据没有变化就不渲染了
    console.log('render app...')
    renderTitle(appState.title, oldAppState.title)
    renderContent(appState.content, oldAppState.content)
}
function renderTitle (title, oldTitle = {}) {
    if (title === oldTitle) return // 数据没有变化就不渲染了
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}
function renderContent (content, oldContent = {}) {
    if (content === oldContent) return // 数据没有变化就不渲染了
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

let appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}
function stateChanger (state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state // 没有修改，返回原来的对象
    }
}

const store = createStore(appState, stateChanger)
let oldState = store.getState() // 缓存旧的 state

store.subscribe(()=>{
    const newState = store.getState() // 数据可能变化，获取新的 state
    renderApp(newState, oldState)
    oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染

});

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
