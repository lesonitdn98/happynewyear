<template>
  <div id="app">
    <div
      class="card"
      v-for="card in cards"
      v-bind:key="card.id"
      v-on:mouseenter="handler($event, 'in')"
      v-on:mouseleave="handler($event, 'out')"
    >
      <div id="particles-js"></div>

      <img class="title" :src="card.title" />
      <img class="front" :src="card.front" />

      <div class="layer-fx"></div>

      <div class="message">
        <p class="quote" v-text="card.quote"></p>
        <p class="divider">🎄</p>
        <p class="author" v-text="card.author"></p>
      </div>

      <img class="back" :src="card.back" />
    </div>
  </div>
</template>

<script>

import 'particles.js/particles';
const particlesJS = window.particlesJS;
import gsap from "gsap";
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title:
            "https://assets.codepen.io/4291733/holiday-card-happy-new-year.svg",
          front: "https://assets.codepen.io/4291733/holiday-card-front-2.svg",
          back: "https://assets.codepen.io/4291733/holiday-card-back-2.svg",
          quote: "This is the beginning of anything you want.",
          author: "L.S."
        }
      ]
    };
  },

  methods: {
    handler(e, type) {
      const data = {
        layerfx: e.currentTarget.querySelector(".layer-fx"),
        title: e.currentTarget.querySelector(".title"),
        front: e.currentTarget.querySelector(".front"),
        back: e.currentTarget.querySelector(".back"),
        message: e.currentTarget.querySelector(".message")
      };

      if (type == "in") this.animate_in(data);
      else this.animate_out(data);
    },

    animate_in({ layerfx, title, front, message }) {
      gsap.to(layerfx, {
        background: "rgba(0, 0, 0, 0.3)",
        ease: "none",
        duration: 0.3
      });

      gsap.to(title, {
        opacity: 0,
        scale: 0,
        ease: "back.inOut",
        duration: 0.9
      });

      gsap.to(front, {
        y: -240,
        ease: "back.inOut",
        duration: 0.9
      });

      gsap.to(message, {
        opacity: 1,
        y: -240,
        ease: "back.inOut",
        duration: 0.9
      });
    },

    animate_out({ layerfx, title, front, message }) {
      gsap.to(layerfx, {
        background: "rgba(0, 0, 0, .1)",
        ease: "none",
        duration: 0.3
      });

      gsap.to(title, {
        opacity: 1,
        scale: 1,
        ease: "back.inOut",
        duration: 0.9
      });

      gsap.to(front, {
        y: 0,
        ease: "back.inOut",
        duration: 0.9
      });

      gsap.to(message, {
        y: 0,
        ease: "back.inOut",
        duration: 0.9
      });
    }
  },

  mounted() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 380,
          density: {
            enable: true,
            value_area: 300
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 30,
          color: "#ffffff",
          opacity: 0.1,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.6,
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
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 70,
            duration: 0.3
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

body {
  background-image: url("https://assets.codepen.io/4291733/main-background.PNG");
  background-position: center;
  overflow: hidden;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.card {
  position: relative;
  height: 408px;
  width: 280px;
  box-shadow: inset 0 0 30px #16455656;
  filter: drop-shadow(0 18px 18px #16455656);
  background: radial-gradient(circle, #57a5cd, transparent);
  overflow: hidden;
  border-radius: 9px;
}

.title {
  position: absolute;
  left: 48px;
  z-index: 3;
  top: 30px;
  width: 60%;
}

.front {
  position: absolute;
  z-index: 3;
  bottom: -270px;
  left: -1px;
  width: 101%;
  pointer-events: none;
}

.layer-fx {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.back {
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 101%;
  pointer-events: none;
}

.message {
  position: absolute;
  z-index: 3;
  bottom: -220px;
  font-family: "Amatic SC";
  font-size: 36px;
  color: #4e94b8;
  padding: 0 12px;
  text-align: center;
  opacity: 0;
}

.divider {
  margin: 18px 0;
}

.author {
  font-size: 24px;
  color: #4e94b8;
}

#particles-js {
  height: 100%;
}
</style>
