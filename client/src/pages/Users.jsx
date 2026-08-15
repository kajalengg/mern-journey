import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Users = () => {
  const { authorizationToken } = useAuth();

  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/admin/users/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );

    const data = await response.json();

    console.log("User After DELETE:", data);

    if (response.ok) {
      getAllUsersData();
      toast.success("User Deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
    <section className="admin-user-section">
        <div className="container">
            <h1>Users Data</h1>
        </div>
        <div className="container admin-user">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((curUser, index) => {
                    return<tr key={index}>
                        <td>{curUser.name}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td>
                          <Link to={`/admin/users/${curUser._id}/edit`}>
                              Edit
                          </Link>
                        </td>
                        <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                      </tr>
                    })}
                </tbody>
            </table>
        </div>
    </section>
    
    </>
  );
};

export default Users;