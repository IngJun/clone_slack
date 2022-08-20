import { ThemeProvider } from "styled-components";
import "./App.css";
import MainPage from "./pages/mainpage";
import theme from "./shared/themeStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
