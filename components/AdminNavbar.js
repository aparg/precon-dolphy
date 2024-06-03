import Link from "next/link";

const AdminNavbar = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item dropdown pe-3">Admin</li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminNavbar;
