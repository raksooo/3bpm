export const makeGenitive = (word) => {
  const lastChar = word.slice(-1);

  if (lastChar === 's') {
    return `${word}'`;
  }

  return `${word}'s`;
};

