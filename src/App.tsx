import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';
import Index from './Index';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';

/**
 * Оболочка смены страницы: один «входящий» тик анимации на новый Outlet
 * и стабильный key по pathname — без лишних библиотек.
 */
function RootLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollRestoration />
      <div key={pathname} className="page-transition-root min-h-dvh">
        <Outlet />
      </div>
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
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
