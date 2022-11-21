import getPlayerName from './utils/getPlayerName.js';

export default () => {
  const name = getPlayerName();

  console.log(`Hello, ${name}!`);
};
