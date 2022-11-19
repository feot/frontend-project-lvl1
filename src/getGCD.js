// GCD stands for Greatest common divisor

const getGCD = (numbers) => {
  const [numberA, numberB] = numbers;
  const lowestNumber = Math.min(...numbers);
  const diffNumber = Math.abs(numberA - numberB);

  if (numberA === numberB) {
    return lowestNumber;
  }

  return getGCD([lowestNumber, diffNumber]);
};

export default getGCD;
