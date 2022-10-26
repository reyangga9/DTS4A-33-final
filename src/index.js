import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import ProtectecComponent from "./components/ProtectedComponent";
import { Provider } from "react-redux";
import { store } from "./store/storeApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectecComponent>
                <App />
              </ProtectecComponent>
            }
          ></Route>
          <Route path="/formLogin" element={<FormLogin />} />
          <Route path="/formRegister" element={<FormRegister />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
