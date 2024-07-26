import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./Store/ProductsApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={productsApi}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
);
