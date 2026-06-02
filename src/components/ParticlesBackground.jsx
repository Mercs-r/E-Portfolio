import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#38bdf8",
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          links: {
            enable: true,
            color: "#38bdf8",
            opacity: 0.2,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}