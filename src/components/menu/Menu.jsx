import React, { useEffect, useRef, useState } from "react";
import "./menu.css";

import { Link } from "react-router-dom";
import { gsap } from "gsap";

import DefaultPreviewImg from "../../assets/images/menu/default.jpg";
import LinkPreviewImg1 from "../../assets/images/home/portrait.jpg";
import LinkPreviewImg2 from "../../assets/images/menu/link-2.jpg";
import LinkPreviewImg3 from "../../assets/images/menu/link-3.jpg";
import LinkPreviewImg4 from "../../assets/images/menu/link-4.jpg";



export default function Menu() {


    const menuLinks = [

        { path: "/about", label: "About" },
        { path: "/works", label: "Work" },
        { path: "/", label: "Home" },
        { path: "/contact", label: "Contact" },
        
    ];


    const menuContainer = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuAnimation = useRef();
    const menuLinksAnimation = useRef();
    const revealHoveredLinkImg = useRef();

    const toggleMenu = () => {
      document.querySelector('.hamburger-icon').classList.toggle("active");
      setIsMenuOpen(!isMenuOpen)
    };

    
    useEffect(()=> {
        gsap.set('.menu-link-item-holder', { y: 125});

        menuAnimation.current = gsap.timeline({ paused: true }).to(".menu", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
        });

        menuLinksAnimation.current = gsap
          .timeline({ paused: true })
          .to(".menu-link-item-holder", {
             y: 0,
             duration: 1.25,
             stagger: 0.075,
             ease: "power3.inOut",
             delay: 0.125,
          });

    }, []);

    useEffect(()=>{

        if(isMenuOpen){
            menuAnimation.current.play();
            menuLinksAnimation.current.play();
        } else {
            menuAnimation.current.reverse();
            menuLinksAnimation.current.reverse(); 
        }

    }, [isMenuOpen])


  return (
    <div className="menu-container" ref={menuContainer}>
        
        <div className="menu-bar">

         <div className="menu-actions">

           <div className="menu-toggle">
           <button className="hamburger-icon" onClick={toggleMenu}></button>
           </div>
         </div>
        </div>

        <div className="menu">
            <div className="link-preview-img">

            </div>

           <div className="bind-new-img">
              
           </div>


           <div className="menu-col">
          <div className="menu-sub-col">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div
                  key={index}
                  className="menu-link-item"
                  onClick={toggleMenu}
                >
                  <div className="menu-link-item-holder">
                    <Link className="menu-link" to={link.path}>
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
         
        
        </div>
    </div>
  )
}
