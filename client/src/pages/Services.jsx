import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const AdminServices = () => {
const { authorizationToken } = useAuth();
const [services, setServices] = useState([]);

const getAllServices = async () => {
    try {
    const response = await fetch(
        "http://localhost:3000/admin/services",
        {
        method: "GET",
        headers: {
            Authorization: authorizationToken,
        },
        }
    );

    const data = await response.json();

    if (response.ok) {
        setServices(data);
    }
    } catch (error) {
        console.log(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/admin/services/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        getAllServices();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <section className="admin-user-section">
      <div className="container">
        <h1>Admin Services Data</h1>

        <Link to="/admin/services/add">
        <button className="btn">Add Service</button>
            </Link>

      </div>

      <div className="container admin-user">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>{service.service}</td>
                <td>{service.price}</td>
                <td>{service.description}</td>
                <td>
                  <button onClick={() => deleteService(service._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminServices;