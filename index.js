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

superbowlWin = (item) => {
  let record = record.find( item => item.result === "W" )
  return !!record ? record.year : undefined
}
