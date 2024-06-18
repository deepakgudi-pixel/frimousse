import React, { useRef, useEffect, useState } from "react";
import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../../assets/images/projects/project-5.jpg";

import ProjectVideo1 from "../../assets/videos/project-1.mp4";
import ProjectVideo2 from "../../assets/videos/project-2.mp4";
import ProjectVideo3 from "../../assets/videos/project-3.mp4";
import ProjectVideo4 from "../../assets/videos/project-4.mp4";
import ProjectVideo5 from "../../assets/videos/project-5.mp4";

import "./work.css";

function Work() {
  const workCopyReveal = useRef();
  const videoRefs = useRef([]);
  const [videoStates, setVideoStates] = useState([
    { isPlaying: false, currentTime: 0 },
    { isPlaying: false, currentTime: 0 },
    { isPlaying: false, currentTime: 0 },
    { isPlaying: false, currentTime: 0 },
    { isPlaying: false, currentTime: 0 },
  ]);

  useEffect(() => {
    workCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    workCopyReveal.current.play();
  }, []);

  const handleMouseEnter = (index) => {
    const updatedVideoStates = [...videoStates];
    updatedVideoStates[index] = { isPlaying: true, currentTime: videoRefs.current[index].currentTime };
    setVideoStates(updatedVideoStates);

    videoRefs.current[index].style.opacity = 1;
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    const updatedVideoStates = [...videoStates];
    updatedVideoStates[index] = { isPlaying: false, currentTime: videoRefs.current[index].currentTime };
    setVideoStates(updatedVideoStates);

    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = videoStates[index].currentTime;
    videoRefs.current[index].style.opacity = 0;
  };

  return (
    <div className="works page">
      <div className="video-container">
        <video ref={(el) => (videoRefs.current[0] = el)} src={ProjectVideo1} className="project-video" loop muted />
        <video ref={(el) => (videoRefs.current[1] = el)} src={ProjectVideo2} className="project-video" loop muted />
        <video ref={(el) => (videoRefs.current[2] = el)} src={ProjectVideo3} className="project-video" loop muted />
        <video ref={(el) => (videoRefs.current[3] = el)} src={ProjectVideo4} className="project-video" loop muted />
        <video ref={(el) => (videoRefs.current[4] = el)} src={ProjectVideo5} className="project-video" loop muted />
      </div>
      <div className="project-preview"></div>
      <div className="container">
        <section className="works-hero">
          <div className="work-copy-wrapper">
            <h1>CASES</h1>
          </div>
          <div className="work-copy-wrapper">
            <h1>2018 • 2024</h1>
          </div>
        </section>

        <section className="project-list">
          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg1} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>Louis Vuitton</h2>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>

          <div className="project-list-row">
            <div className="project-list-col whitespace-col"></div>
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg2} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-left">
                  <h2>Emilio Pucci</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg3} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>Vivienne Westwood</h2>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>

          <div className="project-list-row">
            <div className="project-list-col whitespace-col"></div>
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg4} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-left">
                  <h2>Dolce & Gabbana</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg5} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>Saint Laurent</h2>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Transition(Work);
