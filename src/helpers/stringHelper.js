export const makeGenitive = word => {
  const lastChar = word.slice(-1);
  if (lastChar === 's') {
    return `${word}'`;
  }

  return `${word}'s`;
};

export const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

