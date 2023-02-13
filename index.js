const { readFileSync, writeFile } = require("fs");
const { parse } = require("json2csv");

let data = JSON.parse(readFileSync("data.json"));
let result = parse(data);

writeFile("result.csv", result, (err) => {
  // In case of a error throw err.
  if (err) throw err;
  console.log("Success Convert");
});
