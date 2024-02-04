import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from 'react-redux'
import { ThemeProvider } from "@material-tailwind/react";
import store from './redux/Store'
import { Toaster } from 'react-hot-toast';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position="top-right" />
        <ThemeProvider>
          <Toaster />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);