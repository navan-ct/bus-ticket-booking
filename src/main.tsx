import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from '@/components/layout';
import { DashboardPage, ErrorPage, ReservationPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />
      },
      {
        path: 'reservation',
        element: <ReservationPage />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
