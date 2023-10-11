const signFormVariant = () => {
  const container = {
    hidden: {
      opacity: 0,
      x: "var(--x-from , 0)",
      scale: "var(--scale-from , 0.5)",
    },
    visible: {
      opacity: 1,
      x: "var(--x-to , 0)",
      scale: "var(--scale-to ,1)",
      transition: {
        delay: 0.2,
        duration: 0.8,
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.15,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    exit: {
      opacity: 0,
      x: "var(--x-exit , 0)",
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
  return container;
};

export { signFormVariant };
