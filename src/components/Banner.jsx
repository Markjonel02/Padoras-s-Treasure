import Particles from "particles.js";
import React, { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    Particles.init({
      /* Particle.js configuration options */
      selector: ".particle-background",
      color: "#ffffff",
      connectParticles: true,
      sizeVariations: 3,
      speed: 0.5,
      maxParticles: 150,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 100,
            connectParticles: false,
          },
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 50,
          },
        },
        {
          breakpoint: 320,
          options: {
            maxParticles: 25,
          },
        },
      ],
    });
  }, []);

  return <div className="inset-0 bg-black particle-background">Banner</div>;
};

export default Banner;
