import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <ul className="list">
            <li>
              <NavLink to="/admin/users">Users</NavLink>
            </li>

            <li>
              <NavLink to="/admin/contacts">Contacts</NavLink>
            </li>

            <li>
              <NavLink to="/admin/services">Services</NavLink>
            </li>

            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default AdminLayout;