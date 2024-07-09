import {createContext, useContext} from "react";
import {ThemeContext} from "./index";

function Content() {

  // ✅ Recommended way
  const theme = useContext(ThemeContext);
  console.log('theme', theme);
  return <div style={{background: theme,  padding: '20px'}} >test theme color</div>;
}

// 历史写法
// function Button() {
//   // 🟡 Legacy way (not recommended)
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <button className={theme} />
//       )}
//     </ThemeContext.Consumer>
//   );
// }

export default Content;