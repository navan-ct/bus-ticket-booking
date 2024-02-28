import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Navbar from '@/components/navbar';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('dashboard', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
