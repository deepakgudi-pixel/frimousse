import React from 'react';
import Marquee from "react-fast-marquee";
import Faq from "react-faq-component";
import "./about.css";
import PortraitImg from "../../assets/images/about/about-port.jpeg";
import MagnetButton from "../../components/magnetButton/MagnetButton";
import Transition from '../../components/transition/Transition';

function About() {
  const data = {
    title: "",
    rows: [
      {
        title: "What type of models do you represent?",
        content: "We specialize in representing diverse talent across fashion, beauty, commercial, and editorial sectors. Our models excel in runway shows, editorial shoots, commercial projects, and brand campaigns, bringing a unique flair and professionalism to every assignment.",
      },
      {
        title: "How do you work with clients?",
        content: "Our approach is personalized and collaborative. We begin with a comprehensive consultation to understand your specific needs and goals. From there, we curate tailored solutions that align with your brand's vision, ensuring a seamless and successful collaboration.",
      },
      {
        title: "What are your rates and booking policies?",
        content: "Our pricing is customized based on the scope of the project, the model's profile, and the type of assignment. We offer competitive rates for various services, including runway shows, photo shoots, and promotional events. For detailed pricing and booking policies, please contact us directly.",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1 className="marquee-text">Transforming Your Brand with Unforgettable Modeling Campaigns</h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>Frimousse is a leading modeling agency based in the vibrant city of Milan, specializing in transforming talent into icons. With a keen eye for potential and a passion for pushing the boundaries of modeling.</h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p><span>Est. 1997</span></p>
            </div>
            <div className="about-col">
              <h3>Frimousse partners with a diverse clientele in Fashion, Beauty, Entertainment, and Lifestyle, creating captivating visual campaigns and interactive experiences for brands of all sizes. Specializing in Model Development, Branding, and Visual Storytelling, Frimousse blends creativity with precision in every project.</h3>
              <h3 style={{ textIndent: "100px" }}>Recognized as a trailblazer in modeling industry innovation, Frimousse has earned nominations for prestigious awards, including accolades for groundbreaking model development and creative campaigns.</h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p><span>Contact</span></p>
              <br />
              <br />
              <p><span>Email: </span><span>hello@frimousseagency.com</span></p>
              <p><span>Phone: </span><span>+1 416 555 5678</span></p>
              <p><span>Address: </span><span>456 Avenue de la Mode, Milan 12345</span></p>
              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="" />
              </div>
              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p><span>For a CV, portfolio, or inquiries, please reach out to hello@frimousse.com</span></p>
          </div>
        </section>

        <MagnetButton />
      </div>
    </div>
  );
}

export default Transition(About);
