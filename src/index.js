module.exports = function getZerosCount(number) {
  let multipliersOfFive = [];
  let multiplier = 5;
  while (multiplier <= number) {
    multipliersOfFive.push(multiplier);
    multiplier *= 5;
  }
  const reducer = (sum, element) => sum + Math.floor(number / element);
  return multipliersOfFive.reduce(reducer, 0);
};
