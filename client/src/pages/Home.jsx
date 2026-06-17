
const Home = () => {
  return (
    <>
      <main>
    <section className="section-hero">
      <div className="container grid grid-two-column">  
        <div className="hero-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, maiores!</p>
          <h1>Welcome to My Application</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure illum facilis
            modi deserunt odio fugit commodi ullam iste ipsum distinctio nemo possimus, magni, nihil 
            hic cupiditate dolorem odit aliquam deleniti eligendi corrupti ipsam Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Veniam reiciendis soluta
            amet, totam id corporis esse eum maiores nam veritatis.
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
          <img src="https://www.pngmart.com/files/22/Web-Designing-PNG-HD.png"
          width="600"
          height="400"
          alt="trying to loadind home img"
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
        <h2>100,00+</h2>
        <p>Happy Clients</p>
      </div>
      <div className="div1"> 
        <h2>500+</h2>
        <p>well known developers</p>
      </div>
      <div className="div1"> 
        <h2>24/7</h2>
        <p>service</p>
      </div>

    </div>

  </section>

  <section className="section-hero">
      <div className="container grid grid-two-column">  
        <div className="home-image">
          <img src="https://www.pngmart.com/files/22/Web-Designing-PNG-HD.png"
          width="600"
          height="400"
          alt="trying to loadind home img"
          />
          

        </div>

        <div className="hero-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, maiores!</p>
          <h1>Welcome to My Application</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure illum facilis
            modi deserunt odio fugit commodi ullam iste ipsum distinctio nemo possimus, magni, nihil 
            hic cupiditate dolorem odit aliquam deleniti eligendi corrupti ipsam Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Veniam reiciendis soluta
            amet, totam id corporis esse eum maiores nam veritatis.
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

      </div>

    </section>
  


  </>
  );
};
export default Home;