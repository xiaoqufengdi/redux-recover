import {createContext, useState} from "react";

export const ProviderContext  = createContext('light');

function Provider(props){
    const [contextValue, setContextValue] = useState(props.store);

    return (
        <ProviderContext.Provider  value={contextValue}>
            {props.child}
        </ProviderContext.Provider>
    )
}

export default Provider;