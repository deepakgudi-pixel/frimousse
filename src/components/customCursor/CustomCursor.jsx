import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./CustomCursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    const updatePosition = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      gsap.set(follower, {
        x: posX - 12,
        y: posY - 12
      });

      gsap.set(cursor, {
        x: mouseX,
        y: mouseY
      });
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updatePosition();  
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 0 });
      gsap.to(follower, { backgroundColor: "white", scale: 2.24, mixBlendMode: "difference" });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 1 });
      gsap.to(follower, { backgroundColor: "unset", scale: 1, mixBlendMode: "normal" });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const interval = setInterval(updatePosition, 15); // Smooth animation

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button").forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default Cursor;
