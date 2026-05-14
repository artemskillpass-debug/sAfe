import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';
import Index from './Index';

const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

/**
 * Лёгкий fallback на время загрузки code-split чанка.
 * Не «прыгает» лейаут: занимает min-h-dvh и красится в фон страницы.
 */
function RouteFallback() {
  return <div className="bg-background min-h-dvh" aria-hidden />;
}

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
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
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
