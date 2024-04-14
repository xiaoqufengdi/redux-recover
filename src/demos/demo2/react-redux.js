import PropTypes from 'prop-types';
import {createContext, useContext, useEffect, useMemo, useState} from "react";
// import {ProviderContext} from "./index";

const ProviderContext  = createContext('light');
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    const Connect = (props) =>{
        const store = useContext(ProviderContext);
        const [allProps, setAllProps] = useState({});

        useEffect(()=>{
            _updateProps();
            store.subscribe(()=>_updateProps())
        }, [])

        const _updateProps = ()=>{
            // 额外传入 props，让获取数据更加灵活方便
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), props) : {}; // 防止 mapStateToProps 没有传入
            let  dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, props) : {}

            setAllProps({
                ...stateProps,
                ...dispatchProps,
                ...props
            })

        }

        return <WrappedComponent {...allProps} />;
    }


    return Connect
}


// connect 现在是接受一个参数 mapStateToProps，然后返回一个函数，这个返回的函数才是高阶组件。
// 它会接受一个组件作为参数，然后用 Connect 把组件包装以后再返回



function Provider({store, children}){
    // const [contextValue, setContextValue] = useState(props.store);
   
    return (
        <ProviderContext.Provider  value={store}>
            {children}
        </ProviderContext.Provider>
    )
}
Provider.prototype = {
    store: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
}

export default Provider;