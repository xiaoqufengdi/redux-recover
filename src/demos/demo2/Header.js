// import {useContext, useEffect, useState} from "react";
// import {ProviderContext} from "./index";
// import { connect } from './react-redux'
import { connect } from 'react-redux'
import PropTypes from "prop-types";


// function Header(){
//     // ✅ Recommended way
//     const store = useContext(ProviderContext);
//     const [themeColor, setThemeColor] = useState('gray');
//
//     useEffect(()=>{
//         console.log('store', store);
//         // 首次初始化
//         _updateThemeColor();
//         // 监听数据变化重新渲染的代码
//         store.subscribe(()=>_updateThemeColor());
//     }, []);
//
//     function _updateThemeColor () {
//         const state = store.getState();
//         setThemeColor(state.themeColor);
//         console.log('state', state);
//     }
//
//     return (
//         <h1 style={{color: themeColor}}>React.js 小书</h1>
//     )
// }

// 改用高阶组件后
function Header(props){
    console.log('Header', props);
    return (
            <h1 style={{color: props.themeColor}}>React.js 小书</h1>
        )
}

Header.propTypes = {
    themeColor: PropTypes.string.isRequired
}

// 告诉高级组件我们需要什么数据，高阶组件才能正确地去取数据
const mapStateToProps = (state, props)=>{
    console.log('mapStateToProps state, props', state, props)
    return {
        themeColor: state.themeColor
    }
}

// eslint-disable-next-line no-func-assign
const Header2 = connect(mapStateToProps)(Header)


export default Header2;