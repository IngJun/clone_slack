// <<<<<<< HEAD
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./shared/themeStyle";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <div className="App"></div>
//     </ThemeProvider>
// =======
import Router from "./Router";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Router />
    </div>
    // </ThemeProvider>
  );
}

export default App;
