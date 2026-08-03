import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const AdminAddService = () => {
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();

  const [service, setService] = useState({
    service: "",
    price: "",
    description: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setService({
      ...service,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/admin/services/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(service),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setService({
          service: "",
          price: "",
          description: "",
        });

        navigate("/admin/services");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section>
      <main>
        <div className="parentcontainerc">
          <div className="container">

            <div className="contactus-form">
                <h1>Add New Service</h1>
              <form onSubmit={handleSubmit}>

                <div>
                  <label htmlFor="service">Service Name</label>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    placeholder="Enter service name"
                    value={service.service}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Enter service price"
                    value={service.price}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    rows="5"
                    placeholder="Enter service description"
                    value={service.description}
                    onChange={handleInput}
                    required
                  ></textarea>
                </div>

                <br />

                <button type="submit" className="btn btn-submit">
                  Add Service
                </button>

              </form>
            </div>

          </div>
        </div>
      </main>
    </section>
  );
};

export default AdminAddService;