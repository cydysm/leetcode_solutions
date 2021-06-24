/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let sArray = s.split('')
  let res = [];
  let item = []
  let start;
  sArray.forEach((val, i) => {
    if (item.length === 0) {
      start = i
      item = [val]
    } else if (item.includes(val)) {
      item.push(val)
      if (s.length - 1 === i && item.length >= 3) {
        res.push([start, i])
      }
    } else {
      if (item.length >= 3) {
        res.push([start, i - 1])
      }
      start = i
      item = [val]
    }
  })
  return res
};
// @lc code=end

