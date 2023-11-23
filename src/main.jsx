import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from 'react-redux'
import { ThemeProvider } from "@material-tailwind/react";
import store from './redux/Store'
import toast, { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
        <Toaster />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);