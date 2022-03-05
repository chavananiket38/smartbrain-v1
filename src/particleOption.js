// export const options={
//     background: {
//       color: {
//         value: "#0d47a1",
//       },
//     },
//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "repulse",
//         },
//         resize: true,
//       },
//       modes: {
//         bubble: {
//           distance: 400,
//           duration: 2,
//           opacity: 0.8,
//           size: 40,
//         },
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#ffffff",
//       },
//       links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       collisions: {
//         enable: true,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outMode: "bounce",
//         random: false,
//         speed: 6,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           area: 800,
//         },
//         value: 80,
//       },
//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         random: true,
//         value: 5,
//       },
//     },
//     detectRetina: true,
//   }



 export const options = {
    
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      background: {
        color: "linear-gradient(89deg, #FF5EDF 0%, #2fcac0 100%);"
      },
      links: {
        background: {
          color: "#fff"
        },
        distance: 50,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 90,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
};


//original options with collision

// export const options = {
//     background: {
//       color: {
//         value: "#0d47a1",
//       },
//     },
//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "repulse",
//         },
//         resize: true,
//       },
//       modes: {
//         bubble: {
//           distance: 400,
//           duration: 2,
//           opacity: 0.8,
//           size: 40,
//         },
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       background: {
//         color: "linear-gradient(89deg, #FF5EDF 0%, #2fcac0 100%);"
//       },
//       links: {
//         background: {
//           color: "#fff"
//         },
//         distance: 50,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       collisions: {
//         enable: true,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outMode: "bounce",
//         random: false,
//         speed: 3,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           area: 800,
//         },
//         value: 150,
//       },
//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         random: true,
//         value: 5,
//       },
//     },
//     detectRetina: true,
// };