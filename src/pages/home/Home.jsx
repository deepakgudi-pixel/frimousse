import React, { useEffect, useRef } from 'react';
import './home.css';
import { gsap } from 'gsap';
import PortraitImg from '../../assets/images/home/portrait.jpg';
import Transition from '../../components/transition/Transition';

function Home() {
  const heroCopyReveal = useRef();
  const heroImageReveal = useRef();
  const heroTaglineReveal = useRef();

  useEffect(() => {
    heroImageReveal.current = gsap
      .timeline({ paused: true })
      .to('.hero-img', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.25,
        ease: 'power2.out',
      });

    heroCopyReveal.current = gsap
      .timeline({ paused: true })
      .to('.hero-copy-wrapper h1 span', {
        top: '0',
        duration: 0.8,
        stagger: 0.045,
        ease: 'power3.out',
        delay: 0.75,
      });

    heroTaglineReveal.current = gsap
      .timeline({ paused: true })
      .to('.hero-tagline p span', {
        opacity: 1,
        duration: 0.25,
        stagger: 0.025,
        ease: 'power2.out',
        delay: 1.5,
      });

    heroImageReveal.current.play();
    heroCopyReveal.current.play();
    heroTaglineReveal.current.play();
  }, []);

  // Split words into letters and wrap each letter in a span
  const wrapLettersWithSpans = (word) => {
    return word.split('').map((letter, index) => (
      <span key={index}>{letter}</span>
    ));
  };

  return (
    <section className="hero-section">
      <div className="hero-img">
        <img src={PortraitImg} alt="" />
      </div>
      <div className="hero-copy">
        <div className="hero-copy-wrapper">
          <h1>{wrapLettersWithSpans('AGENCE')}</h1>
        </div>
        <div className="hero-copy-wrapper">
          <h1>{wrapLettersWithSpans('Frimousse')}</h1>
        </div>
      </div>
      <div className="hero-tagline">
        <p>{wrapLettersWithSpans('Empowering Talent, Discover Your Modeling Journey.')}</p>
      </div>
    </section>
  );
}

// Export the Home component wrapped with the Transition HOC
export default Transition(Home);
