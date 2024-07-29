import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import {Counter } from './counter/Counter'

const Index = (props)=>{
    return (<Provider store={store}>
        <div>
            <h5>toolkit</h5>
            <Counter/>
        </div>
    </Provider>)
}


export default Index;