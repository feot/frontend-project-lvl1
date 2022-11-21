export default (progressionStart, progressionLength, progressionStep) => {
  const res = [];

  for (let i = 0; i < progressionLength; i += 1) {
    res.push(progressionStart + progressionStep * i);
  }

  return res;
};
