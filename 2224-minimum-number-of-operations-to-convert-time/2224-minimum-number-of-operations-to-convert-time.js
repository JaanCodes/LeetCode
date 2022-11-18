/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = (current, correct) => {
  if (current === correct) return 0;

  let result = 0;
  const currentArr = current.split(":");
  const correctArr = correct.split(":");
  let currentMinutes = +currentArr[0] * 60 + +currentArr[1];
  let correctMinutes = +correctArr[0] * 60 + +correctArr[1];
  let difference = correctMinutes - currentMinutes;

  while (difference !== 0) {
    if (difference % 60 === 0) {
      result++;
      difference -= 60;
    } else if (difference % 15 === 0) {
      result++;
      difference -= 15;
    } else if (difference % 5 === 0) {
      result++;
      difference -= 5;
    } else {
      result++;
      difference -= 1;
    }
  }
  return result;
};