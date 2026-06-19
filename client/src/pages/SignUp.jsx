import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth';




const SignUp = () => {


  const navigate = useNavigate();
  const {storetokenInLS} = useAuth()


const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  phone: ""
});

const handleInputs = (e) => {
  console.log(e);
  let name = e.target.name;
  let value = e.target.value;

  setUser({...user, [name]: value,});
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:3000/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    

    if (response.ok) {

      const res_data = await response.json();
      console.log("res from server", res_data);
      console.log("Before navigate");
      storetokenInLS(res_data.token);
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

      navigate("/login");

      console.log("After navigate");
    }

  } catch (error) {
    console.log("signup", error);
  }
};

  return <>
  <section>
    <main>
      <div className="parentcontainer">
        
        <div className="container grid grid-two-column">
          <div className="signup-image">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-login-4489366-3723273.png"
            alt="a girl trying to sign up"
              width="800"
              height="600"
              />
          </div>
          <div className="signup-form">
            <h1 className="form-title">Registration Form</h1>
            <br />
            <form className="register-form" id="register-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Username</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="enter your username" 
                  id="name"
                  required
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="enter your email" 
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="enter your password" 
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input 
                  type="number" 
                  name="phone" 
                  placeholder="enter your phone number" 
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-submit">Register Now</button>
            </form>
          </div>


        </div>
      </div>
    </main>
  </section>
  </>
};
export default SignUp;