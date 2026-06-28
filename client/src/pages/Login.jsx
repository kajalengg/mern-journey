
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth';


const Login = () => {
  const navigate = useNavigate();
  const {storetokenInLS} = useAuth()

const [user, setUser] = useState({

  email: "",
  password: ""
  
});

const handleInputs = (e) => {
  console.log(e);
  let name = e.target.name;
  let value = e.target.value;

  setUser({...user, [name]: value,});
};const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:3000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const res_data = await response.json();
      console.log("res from server", res_data);
      console.log(response.status);
      storetokenInLS(res_data.token);



    if(response.ok){
      alert("login successfull")
      setUser({email:"",password:""});
      navigate("/");
    }else {
  console.log("Else block is running");
  console.log(res_data);

  alert(res_data.extraDetail ? res_data.extraDetail : res_data.message);
}


    console.log(response.status);
  } catch (error) {
    console.log("login", error);
  }
}; // ← importantcd

  return <>
  <section>
    <main>
      <div className="parentcontainer">
        
        <div className="container grid grid-two-column">
          <div className="login-image">
            <img src="https://www.gmit.academy/app2/Image/SignIn_Img/vactor.png"
            alt="a girl trying to login"
              width="600"
              height="400"
              />
          </div>
          <div className="login-form">
            <h1 className="form-title">Login Form</h1>
            <br />
            <form className="login-form" id="login-form" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="email">Email</label>
                <input 
                  name="email" 
                  type="email"
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
              <br />
              <button type="submit" className="btn btn-submit">Login Now</button>
            </form>
          </div>


        </div>
      </div>
    </main>
  </section>
  </>
};
export default Login;