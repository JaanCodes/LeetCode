/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
  const mapNamesToHeights = new Map();
  for (let i = 0; i < names.length; i++) {
    mapNamesToHeights.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);

  const result = [];
  for (const height of heights) {
    result.push(mapNamesToHeights.get(height));
  }
  return result;

  // ANOTHER SOLUTION (COPIED)
  return new Array(names.length)
    .fill(null)
    .map((item, index) => ({ name: names[index], height: heights[index] }))
    .sort((a, b) => b.height - a.height)
    .map(({ name }) => name);
};