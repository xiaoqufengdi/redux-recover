import {createContext, useState} from "react";
import Page from './page';
import {Button} from "antd";

// 注意把上下文导出去供子孙组件使用
export const ThemeContext = createContext('light');

function Demo() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
        <h5>createContext 使用</h5>
        <div>
            <Button onClick={() => {
              setTheme('blue');
            }}>
              Switch to light theme
            </Button>
         </div>
        <Page/>
    </ThemeContext.Provider>
  );
}

export default Demo;