import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./shared/themeStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
