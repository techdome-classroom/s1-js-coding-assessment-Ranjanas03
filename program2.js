const decodeTheRing = function (s, p) {

  // write your code here
  function dfs(i, j) {
    if (i === s.length && j === p.length) {
      return true;
    }
    if (j === p.length) {
      return false;
    }

    if (p[j] === '*') {
      return dfs(i, j + 1) || (i < s.length && dfs(i + 1, j));
    }
    if (p[j] === '?') {
      return i < s.length && dfs(i + 1, j + 1);
    }
    if (i < s.length && s[i] === p[j]) {
      return dfs(i + 1, j + 1);
    }
    return false;
  }
  return dfs(0, 0);
};
console.log(decodeTheRing("aa", "a"));     
console.log(decodeTheRing("aa", "*"));       
console.log(decodeTheRing("cb", "?a"));      
module.exports = decodeTheRing;