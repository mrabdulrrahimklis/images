import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {router} from "./routes/root.tsx";
import {RouterProvider} from "react-router-dom";
import {ReactQueryProvider} from "./core/proivders/ReactQueryProvider.tsx";
import ToastProvider from "./core/providers/ToastContext.tsx";
import SearchProvider from "./core/providers/SearchContext.tsx";
import CardProvider from "./core/providers/CardContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ToastProvider>
          <CardProvider>
              <SearchProvider>
                  <ReactQueryProvider>
                      <RouterProvider router={router} />
                  </ReactQueryProvider>
              </SearchProvider>
          </CardProvider>
      </ToastProvider>
  </React.StrictMode>,
)
