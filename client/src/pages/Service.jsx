import { useAuth } from "../store/auth";

const Services = () => {
  const { servi } = useAuth();

  return (
    <section className="session-services">
      <div className="container">
        <h1>Services</h1>
      </div>

      <div className="Dcontainer grid grid-three-column">
        {servi.map((curElem) => {
          return (
            <div className="card" key={curElem._id}>
              <div className="images">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8672/8672962.png"
                  alt="our services"
                  width="250"
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-column">
                  <p id="pc1">{curElem.provider}</p>
                  <p id="pc2">{curElem.price}</p>
                </div>

                <h2>{curElem.service}</h2>

                <p>{curElem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;