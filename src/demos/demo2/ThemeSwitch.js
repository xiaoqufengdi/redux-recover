// import {useContext, useEffect, useState} from "react";
// import {ProviderContext} from "./index";
// import {connect} from "./react-redux";
import { connect } from 'react-redux'
import PropTypes from "prop-types";

// function ThemeSwitch(){
//     const store = useContext(ProviderContext);
//     const [themeColor, setThemeColor] = useState('gray');
//
//     useEffect(()=>{
//         console.log('store', store);
//         _updateThemeColor();
//         store.subscribe(()=>_updateThemeColor());
//
//     }, []);
//
//     function _updateThemeColor () {
//         const state = store.getState();
//         setThemeColor(state.themeColor);
//         console.log('state', state);
//     }
//
//     // dispatch action 去改变颜色
//     const handleSwitchColor =  (color) => {
//         store.dispatch({type: 'CHANGE_COLOR', themeColor: color});
//
//     }
//
//     return (
//         <div>
//             <button style={{color: themeColor}}
//                     onClick={handleSwitchColor.bind(this, 'red')}>Red</button>
//             <button style={{color: themeColor}}
//                     onClick={handleSwitchColor.bind(this, 'blue')}>Blue</button>
//         </div>
//     )
// }

function ThemeSwitch(props) {
    function handleSwitchColor (color) {
        if (props.onSwitchColor) {
            props.onSwitchColor(color)
        }
    }

   return (
        <div>
            <button style={{color: props.themeColor}}
                    onClick={handleSwitchColor.bind(this, 'red')}>Red</button>
            <button style={{color: props.themeColor}}
                    onClick={handleSwitchColor.bind(this, 'blue')}>Blue</button>
        </div>
    )
}

ThemeSwitch.prototype = {
    themeColor: PropTypes.string.isRequired,
    onSwitchColor: PropTypes.func.isRequired
}

// 告诉高级组件我们需要什么数据，高阶组件才能正确地去取数据
const mapStateToProps = (state, props)=>{
    console.log('mapStateToProps state, props', state, props)
    return {
        themeColor: state.themeColor
    }
}
// mapStateToProps 来告诉它如何获取、整合状态
const mapDispatchToProps = (dispatch)=>{
  return {
      onSwitchColor: (color)=>{
          dispatch({ type: 'CHANGE_COLOR', themeColor: color })
      }
  }
}


const ThemeSwitch2 = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
export default ThemeSwitch2;