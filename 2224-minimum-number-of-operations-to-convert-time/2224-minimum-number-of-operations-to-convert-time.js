/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = (current, correct) => {
  let result = 0;
  const currentArr = current.split(":");
  const correctArr = correct.split(":");
  let currentMinutes = +currentArr[0] * 60 + +currentArr[1];
  let correctMinutes = +correctArr[0] * 60 + +correctArr[1];

  while (currentMinutes <= correctMinutes) {
    if (correctMinutes - currentMinutes >= 60) {
      result += 1;
      correctMinutes = correctMinutes - 60;
    } else if (correctMinutes - currentMinutes >= 15 && correctMinutes - currentMinutes < 60) {
      result += 1;
      correctMinutes = correctMinutes - 15;
    } else if (correctMinutes - currentMinutes >= 5 && correctMinutes - currentMinutes < 15) {
      result += 1;
      correctMinutes = correctMinutes - 5;
    } else if (correctMinutes - currentMinutes >= 1 && correctMinutes - currentMinutes < 5) {
      result += 1;
      correctMinutes = correctMinutes - 1;
    } else {
      break;
    }
  }
  return result;
};