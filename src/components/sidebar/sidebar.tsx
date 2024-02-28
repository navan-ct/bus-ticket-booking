import SidebarLink from './sidebar-link';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-10 h-screen w-60 border-r border-slate-200 bg-white pt-14">
      <nav className="pt-6">
        <ul>
          <li>
            <SidebarLink to="dashboard">Dashboard</SidebarLink>
          </li>
          <li>
            <SidebarLink to="reservation">Reservation</SidebarLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
