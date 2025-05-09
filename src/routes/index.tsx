import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ErrorPage from '../components/ErrorPage';
import HomePage from '../components/pages/Home';
import ContactUs from '@/components/pages/ContactUs';
import StudentsPage from '@/components/pages/StudentsPage';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import TermsOfService from '@/components/pages/TermsOfService';
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: <Navigate to="home" replace /> }, // redirect root to /home
        { path: 'home', element: <HomePage /> },
        { path: 'student', element: <StudentsPage /> },
        { path: 'contact-us', element: <ContactUs /> },
        {path: 'privacy', element: <PrivacyPolicy /> },
        { path: '*', element: <ErrorPage /> },
        { path: 'terms', element: <TermsOfService /> },
      ]
    }
  ]
);