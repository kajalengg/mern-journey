import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const AdminUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle Input Changes
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Get Single User Data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `https://mern-journey-k0p8.onrender.com/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update User
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://mern-journey-k0p8.onrender.com/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("User Updated Successfully");
        navigate("/admin/users");
      }else{
        toast.error("Not User Updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  return (
    <section>
      <main>
        
        <div className="parentcontainerup">
          <div className="container">
    
            <div className="contactus-form>">
            <h1>Update User Data</h1>

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter username"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    required
                  />
                </div>

                <br />

                <button type="submit" className="btn btn-submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AdminUpdate;