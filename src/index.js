import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// <<<<<<< HEAD
// =======
import store from "./redux/ConfigStore";
import { Provider } from "react-redux";
import theme from "./shared/themeStyle";
import { ThemeProvider } from "styled-components";
// >>>>>>> 0af68c17575e0e6cfd080653a614dbc8b1d4694a

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);
