//  未抽离provider版本
import Content from "./Content";
import {createContext, useContext, useState} from "react";
import Header from "./Header";

function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}
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

export const ProviderContext  = createContext('light');

function ContentDemo() {
    const [contextValue, setContextValue] = useState(store);

    return (
        <ProviderContext.Provider  value={contextValue}>
            <div style={{padding: '50px'}}>
                <Header/>
                <Content/>
            </div>
        </ProviderContext.Provider>
    )
}

export default ContentDemo;