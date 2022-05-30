import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configStore";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    {/* 이렇게 감싸줘서 Redux사용! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
