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
      <Page />
      <div>
        <Button onClick={() => {
          setTheme('blue');
        }}>
          Switch to light theme
        </Button>
      </div>
    </ThemeContext.Provider>
  );
}

export default Demo;