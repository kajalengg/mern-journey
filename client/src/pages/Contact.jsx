import { useState } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";


const Contact = () => {

  const [user, setUser] = useState({
  name: "",
  email: "",
  massage: ""
});

const [userdata,setuserdata]=useState(true);

const {usser}=useAuth();

if(userdata && usser){
  setUser({
    name:usser.name,
    email:usser.email,
    massage:"",


  });
  setuserdata(false);
}

const handleInputs = (e) => {
  console.log(e);
  let name = e.target.name;
  let value = e.target.value;

  setUser({...user, [name]: value,});
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user);
};



  return (
    <>
      <section>
    <main>
      <div className="parentcontainerc">
      
        <div className="container grid grid-two-column">
          <div className="contact-image">
            <h1>Contact Us</h1>
            <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/050/702/003/small_2x/contact-us-with-click-here-people-png.png"
            alt="tying to conecting"
            width="500"
            height="400" />
          </div>

          <div className="contactus-form">

            <form method="POST" className="register-form" id="register-form" onSubmit={handleSubmit}>
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

              
              <label htmlFor="massage">Message</label>
              <div>
                <textarea
                  name="massage"
                  id="massage" 
                  cols="30" 
                  rows="6"
                  required
                  autoComplete="off"
                  value={user.massage}
                  onChange={handleInputs}
                />
              </div>
              <br/>
                  <button type="submit" className="btn btn-submit">Submit</button>
                </form>
              </div>
            </div>
          </div>

        <section className="mb-3">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8020724474873!2d83.00810337517952!3d25.310853177637888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21ee940b17%3A0x48600e4fcdfb7b13!2sShri%20Kashi%20Vishwanath%20Temple!5e0!3m2!1sen!2sin!4v1781418971397!5m2!1sen!2sin"
            width="100%"
            height="450" 
            style={{border: 0}}
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </section>
        </main>
      </section>
    </>
  );
};

export default Contact;
