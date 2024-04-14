import {createContext, useContext} from "react";
import {ThemeContext} from "./index";

function Button() {

  // ✅ Recommended way
  const theme = useContext(ThemeContext);
  console.log('theme', theme);
  return <button className={theme} >test</button>;
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

export default Button;