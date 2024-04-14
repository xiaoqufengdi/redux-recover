// 抽离provider版本
import Content from "./Content";
import Header from "./Header";
// import createStore from "./redux";
// import Provider from "./react-redux"
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}
const store = createStore(themeReducer)


function ContentDemo() {
    return (
        <Provider  store={store}>
            <div style={{padding: '50px'}}>
                <Header/>
                <Content/>
            </div>
        </Provider>
    )
}

export default ContentDemo;