import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes.jsx';
import { AnimatePresence } from "framer-motion";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence>
      <AuthProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <div className='w-11/12 mx-auto'>
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        </HelmetProvider>
      </AuthProvider>
    </AnimatePresence>
  </React.StrictMode>,
)
