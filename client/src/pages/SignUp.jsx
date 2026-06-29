import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try{

      const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
  },
      body: JSON.stringify(user),
});

console.log("Status:", response.status);

const res_data = await response.json();
console.log("Response:", res_data);

if (response.ok) {
  toast.success("Registration successfull")
  console.log("Response from server:", res_data);

  storetokenInLS(res_data.token);

  setUser({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  navigate("/");
}else {
  console.log("Else block is running");
  console.log(res_data);

  toast.error(res_data.extraDetail ? res_data.extraDetail : res_data.message);

}
    }catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="parentcontainer">
            <div className="container grid grid-two-column">
              <div className="signup-image">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-login-4489366-3723273.png"
                  alt="A girl trying to sign up"
                  width="800"
                  height="600"
                />
              </div>

              <div className="signup-form">
                <h1 className="form-title">Registration Form</h1>
                <br />

                <form
                  className="register-form"
                  id="register-form"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your username"
                      autoComplete="off"
                      required
                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      required
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      autoComplete="off"
                      required
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      autoComplete="off"
                      required
                      value={user.phone}
                      onChange={handleInputs}
                    />
                  </div>

                  <br />

                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default SignUp;