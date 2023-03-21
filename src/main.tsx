import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyThemeProvider from './theme/MyThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <RouterProvider router={router} />
    </MyThemeProvider>
  </React.StrictMode>
);
