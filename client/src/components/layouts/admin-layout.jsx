import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {

    return <>
    <header>
        <div className="container">
            <ul className="list">
                <li>
                    <NavLink to = "/admin/users">users</NavLink>
                </li>
                <li>
                    <NavLink to = "/admin/contacts">contacts</NavLink>
                </li>
                <li>
                    <NavLink to = "/admin/service">services</NavLink>
                </li>
                <li>
                    <NavLink to = "/">Home</NavLink>
                </li>
            </ul>
        </div>
    </header>
    <Outlet />
    </>

}

export default AdminLayout;