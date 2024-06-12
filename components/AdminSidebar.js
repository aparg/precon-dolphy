"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside id="sidebar" className="sidebar border-r-[1px] border-[#D9DBE9]">
      <Link href={"/"}>
        <div className="flex justify-center h-15">
          <img src="/Logo.svg" className="w-20 py-5" />
        </div>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item sidebar-nav-link">
            <Link
              className={
                pathname.endsWith("/admin") ? "nav-link active" : "nav-link"
              }
              href="/admin/"
            >
              <i className="bi bi-grid"></i>
              <span>Preconstructions</span>
            </Link>
          </li>
          <li className="nav-item sidebar-nav-link">
            <Link
              className={
                pathname.startsWith("/admin/cities")
                  ? "nav-link active"
                  : "nav-link "
              }
              href="/admin/cities"
            >
              <i className="bi bi-shop-window"></i>
              <span>Cities</span>
            </Link>
          </li>
          <li className="nav-item sidebar-nav-link">
            <Link
              className={
                pathname.startsWith("/admin/developers")
                  ? "nav-link active"
                  : "nav-link "
              }
              href="/admin/developers"
            >
              <i className="bi bi-bricks"></i>
              <span>Developers</span>
            </Link>
          </li>
          {/* <li className="nav-item sidebar-nav-link">
          <Link
            className={
              pathname.startsWith("/admin/events")
                ? "nav-link active"
                : "nav-link"
            }
            href="/admin/events"
          >
            <i className="bi bi-calendar-check"></i>
            <span>Events</span>
          </Link>
        </li> */}
          <li className="nav-item sidebar-nav-link">
            <Link
              className={
                pathname.startsWith("/admin/blog")
                  ? "nav-link active"
                  : "nav-link"
              }
              href="/admin/blog"
            >
              <i className="bi bi-newspaper"></i>
              <span>Blogs</span>
            </Link>
          </li>
        </ul>
      </Link>
    </aside>
  );
};

export default AdminSidebar;
