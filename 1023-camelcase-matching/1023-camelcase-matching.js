/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
const camelMatch = (queries, pattern) => {
  // COPIED
  // create a Regexp that replaces every '' with ([a-z])* and
  // surround it with '^' and '$' so I can have an exact match
  pattern = new RegExp("^" + pattern.replace(/()/g, "([a-z])*") + "$");
  // test every element of the array against my newly created RegExp pattern
  // and replace it with the result of that test
  return queries.map((d) => pattern.test(d));
};