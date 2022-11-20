/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = (products, searchWord) => {
  products.sort();
  let res = [];
  for (let i = 0; i < searchWord.length; i++) {
    products = products.filter((product) => product[i] === searchWord[i]);
    res.push(products.slice(0, 3));
  }
  return res;
};