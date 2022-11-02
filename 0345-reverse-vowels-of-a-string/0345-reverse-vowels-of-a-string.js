/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const arr = s.split("");
    let l = 0;
    let r = s.length - 1;
    const vowels = ["a", "e", "i", "o", "u"];
    
    while (l < r) {
        if (vowels.includes(s[l].toLowerCase()) && vowels.includes(s[r].toLowerCase())) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
        if (!vowels.includes(s[r].toLowerCase())) {
            r--;
        }
        if (!vowels.includes(s[l].toLowerCase())) {
            l++;
        }
    }
    return arr.join("");

// Best Solution
    const VOWELS = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) => res + a + (VOWELS.pop() || ''), '');
};