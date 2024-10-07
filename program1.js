const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') return;
    grid[r][c] = 'W';
    dfs(r - 1, c); // up
    dfs(r + 1, c); // down
    dfs(r, c - 1); // left
    dfs(r, c + 1); // right
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'L') {
        islands += 1;
        dfs(r, c);
      }
    }
  }

  return islands;
};
const grid1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(getTotalIsles(grid1));  // Output: 1

const grid2 = [
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"],
];
console.log(getTotalIsles(grid2));  // Output: 3
module.exports = getTotalIsles;