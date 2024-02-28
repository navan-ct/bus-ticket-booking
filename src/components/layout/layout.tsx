import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('dashboard', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="relative h-full text-black">
      <Header />
      <Sidebar />
      <main className="h-full bg-neutral-50 pl-60 pt-14">
        <Outlet />
      </main>
    </div>
  );
}
