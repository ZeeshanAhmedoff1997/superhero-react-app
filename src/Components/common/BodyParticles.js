import React from "react";
import Particles from "react-particles-js";
import floatingImgSquare from "../../Assets/Images/animatedParticle/floatingImgSquare.png";
import floatingImgTriangle from "../../Assets/Images/animatedParticle/floatingImgTriangle.png";
import animatedSquare from "../../Assets/Images/animatedParticle/animatedSquare.png";
import BP_1 from "../../Assets/Images/animatedParticle/BP_1.png";
import BP_2 from "../../Assets/Images/animatedParticle/BP_2.png";
import BP_3 from "../../Assets/Images/animatedParticle/BP_3.png";

const BodyParticles = ({ number, headerImgArr, speed, zIndex }) => (
  <Particles
    params={{
      particles: {
        number: {
          value: number || 15,
          density: {
            enable: true,
            value_area: 1200
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: ["images"],
          images: headerImgArr
            ? headerImgArr
            : [
                {
                  src: `${floatingImgSquare}`,
                  width: 15,
                  height: 15
                },
                {
                  src: `${BP_1}`,
                  width: 15,
                  height: 15
                },
                {
                  src: `${BP_2}`,
                  width: 15,
                  height: 15
                },
                {
                  src: `${BP_3}`,
                  width: 15,
                  height: 15
                },
                {
                  src: `${floatingImgTriangle}`,
                  width: 18,
                  height: 18
                },
                {
                  src: `${animatedSquare}`,
                  width: 32,
                  height: 32
                }
              ]
        },
        opacity: {
          value: 0.9,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 30,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 20,
            sync: false
          }
        },
        line_linked: {
          enable_auto: false,
          distance: 0,
          color: "#fff",
          opacity: 1,
          width: 1,
          condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        },
        move: {
          enable: true,
          speed: speed || 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true
          },
          onclick: {
            enable: false
          },
          resize: true
        }
      },
      retina_detect: true
    }}
    style={{
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      position: "absolute",
      zIndex: zIndex ? zIndex : "auto"
    }}
  />
);

export default BodyParticles;
