import Transition from "../../components/transition/Transition";
import "./louisvuitton.css";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../../assets/images/projects/project-5.jpg";

const Louisvuitton = () => {

  return (
    <div className="project page">
      <section className="project-hero">
        <img src={ProjectImg2} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={ProjectImg3} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>Louis Vuitton</h1>
          <p>Fashion • Luxury Brand</p>
        </section>

        <section className="project-brief">
          <h2>
            Complete rebranding and digital transformation for Louis Vuitton, a
            leading global luxury fashion brand known for its innovative designs
            and timeless elegance.
          </h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Year</span>
                </p>
                <p>2023</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Credits</span>
                </p>
                <p>Client: Louis Vuitton</p>
                <p>Creative Direction: Elena Miro</p>
                <p>Art Director: Samuel Hyde</p>
                <p>Designers: Lucia Grant, Alex Moreno</p>
                <p>Brand Strategy: Orion Strategies</p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Goals</span>
              </p>
              <p>
                The Louis Vuitton project aimed to revolutionize the brand's digital
                presence, aligning it with their mission to innovate in the
                field of luxury fashion. Our objectives were to craft a
                brand identity that resonates with their core values of
                craftsmanship, innovation, and exclusivity. We focused
                on developing a user-friendly, immersive website that
                showcases Louis Vuitton's groundbreaking designs and product
                offerings, while also facilitating engagement and collaboration
                within the fashion industry. Through strategic
                branding, engaging design, and intuitive user experience, we
                aimed to position Louis Vuitton as a leader in luxury fashion,
                driving awareness, and fostering a community of
                advocates and partners.
              </p>
            </div>
          </div>
        </section>

        <section className="project-images">
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg5} alt="" />
            </div>

            <div className="project-img"></div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Transition(Louisvuitton);
