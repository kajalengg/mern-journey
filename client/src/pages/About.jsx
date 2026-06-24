import { useAuth } from "../store/auth";


const About = () => {

  const {usser}=useAuth();

  return <>

  <main>
    

    <section className="section-hero">
      <div className="container grid grid-two-column">  
        <div className="hero-content">
          <p>Hey {usser?.name}</p>

          <h1>Why Choose Us?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure illum facilis
            modi deserunt odio fugit commodi ullam iste ipsum gjhgvkjg hgjjk<br/>
            <br/>
            
            distinctio nemo possimus, magni, nihil hic cupiditate dolorem odit aliquam deleniti eligendi corrupti ipsam Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Veniam reiciendis soluta<br/>
            <br/>

            lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, voluptate!
            amet, totam id corporis esse eum maiores nam veritatis.<br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptas, voluptate!<br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptas, voluptate!
          </p>

          <div className="btn btn-group ">
            <a href="/contact">
              <button className="btn">connect now</button>
            </a>
            <a href="/services">
              <button className="btn btn-2">our services</button>
            </a>
            
          </div>

        </div>
        <div className="home-image">
          <img src="https://www.sqlview.com.sg/wp-content/uploads/cmms-facility-management-app-integration_1.png"
          alt="trying to loadind home img"
          height="600"
          width="500"
          />

        </div>
      </div>

    </section>

  </main>

  <section className="another-section">
    <div className="container grid grid-four-column">
      <div className="div1"> 
        <h2>50+</h2>
        <p>registered companies</p>
      </div>
      <div className="div1"> 
        <h2>150+</h2>
        <p>projects done</p>
      </div>
      <div className="div1"> 
        <h2>250+</h2>
        <p>happy clients</p>
      </div>
      <div className="div1"> 
        <h2>650K+</h2>
        <p>subscribers</p>
      </div>

    </div>

  </section>
  

  </>
};
export default About;