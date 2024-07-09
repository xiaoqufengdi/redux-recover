
import {Provider} from 'react-redux'
import CommentApp from './containers/CommentApp';
import store from './store/index';
import CommentApp2 from "./containers/CommentApp";
import React from "react";


function Container() {
    return (
        <Provider store={store}>
            <CommentApp2/>
        </Provider>
    )
};

export default Container;