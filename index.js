const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
];

superbowlWin = (record) => {
  let res = record.find( record => record.result === "W" )
  return !!res ? res.year : undefined
}