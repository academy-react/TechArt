const signFormChildrenVariant = () => {
  const container = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
  return container;
};

export { signFormChildrenVariant };
