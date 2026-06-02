import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
options={{
  fullScreen: false,

  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        area: 800,
      },
    },

    color: {
      value: "#60a5fa",
    },

    links: {
      enable: true,
      distance: 180,
      color: "#60a5fa",
      opacity: 0.5,
      width: 1.5,
    },

    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce",
      },
    },

    opacity: {
      value: 0.8,
    },

    size: {
      value: { min: 2, max: 5 },
    },
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },

    modes: {
      grab: {
        distance: 220,
        links: {
          opacity: 1,
        },
      },
    },
  },
}}
      className="absolute inset-0"
    />
  );
}