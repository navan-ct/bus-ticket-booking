import { NavLink, type NavLinkProps } from 'react-router-dom';

export type SidebarLinkProps = Omit<NavLinkProps, 'className'>;

export function SidebarLink(props: SidebarLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        isActive ? 'sidebar-link bg-neutral-100 font-semibold' : 'sidebar-link'
      }
    />
  );
}

export default SidebarLink;
