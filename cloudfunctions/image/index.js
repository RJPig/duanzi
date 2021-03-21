'use strict';
let axios = require('axios');
// let httpUrl = 'https://api.apiopen.top/getJoke';
let httpUrl = 'http://m2.qiushibaike.com/article/list/image';
// var options1 = {
//   page: 1,
//   count: 10,
//   type: "text"
// }
// var options2 = {
//   page: 1,
//   count: 10,
//   type: "image"
// }
// var options3 = {
//   page: 1,
//   count: 10,
//   type: "video"
// }
exports.main = async (event, context,callback) => {
  let result = await axios.get(httpUrl,{params: event})
  return result.data
}