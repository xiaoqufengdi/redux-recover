import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import CommentApp2 from './containers/CommentApp';
import store from './store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ContextDemo2 />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <CommentApp2/>
      </Provider>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();