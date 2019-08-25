const MAX_DICE_SIDES = 6;

// returns an integer
const start = () => {
  // Returns a float number between 0 and not inclusive MAX_DICE_SIDES
  const pseudo = Math.random() * MAX_DICE_SIDES;
  // A step needs to be added to the floor to avoid 0 and reach 6
  return Math.ceil(pseudo);
}

const isOdd = (roll) => {
  if (roll % 2 == 1) {
    return true;
  }
  return false;
}

module.exports = {
  start,
  isOdd,
};
