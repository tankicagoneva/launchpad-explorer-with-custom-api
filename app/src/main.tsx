import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page.tsx';
import Launches from './launches/page.tsx';
import Launch from './launch/page.tsx';
import { ClerkProvider } from '@clerk/clerk-react';
import Layout from './components/Layout.tsx';
import SignInPage from './components/SignInPage.tsx';
import SignUpPage from './components/SignUpPage.tsx';
import UnauthorizedPage from './components/UnauthorizedPage.tsx';
import UserProfilePage from './components/UserProfilePage.tsx';
import AstronautDashboard from './components/AstronautDashboard.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';

import ProtectedRoute from './components/ProtectedRoute.tsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'launches',
        element: <Launches />,
      },
      {
        path: 'launch/:id',
        element: <Launch />,
      },
      {
        path: 'astronaut-dashboard',
        element: (
          <ProtectedRoute allowedRoles={['astronaut']}>
            <AstronautDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin-dashboard',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'user-profile/*',
        element: (
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'unauthorized',
        element: <UnauthorizedPage />,
      },
    ],
  },
  {
    path: '/sign-in/*',
    element: <SignInPage />,
  },
  {
    path: '/sign-up/*',
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      afterSignOutUrl='/'
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);
