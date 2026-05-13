import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Index from './Index';
import CourseDetailPage from './pages/CourseDetailPage';

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'courses/:slug', element: <CourseDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
