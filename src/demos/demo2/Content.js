// import {useContext, useEffect, useState} from "react";
// import {ProviderContext} from "./index";
// import {connect} from "./react-redux";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";



// function Content (){
//     const store = useContext(ProviderContext);
//     const [themeColor, setThemeColor] = useState('gray');
//
//     useEffect(()=>{
//         console.log('store', store);
//         _updateThemeColor();
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
//         <div>
//             <p style={{color: themeColor}}>React.js 小书内容</p>
//             <ThemeSwitch />
//         </div>
//     )
// }

function Content(props) {
    return (
        <div>
            <p style={{color: props.themeColor}}>React.js 小书内容</p>
            <ThemeSwitch />
        </div>
    )
}

Content.propTypes = {
    themeColor: PropTypes.string.isRequired
}
// 告诉高级组件我们需要什么数据，高阶组件才能正确地去取数据
const mapStateToProps = (state)=>{
    return {
        themeColor: state.themeColor
    }
}

const Content2 = connect(mapStateToProps)(Content);

export default Content2;