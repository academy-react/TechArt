const signFormTransition = () => {
  const container = {
    enter: { opacity: 0, x: 1000 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    exit: {
      opacity: 0,
      x: -1000,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
  return container;
};

export { signFormTransition };
