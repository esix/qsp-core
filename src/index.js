var parser = require("./qsp.jison");

export function compileQSPCode(qspCode) {
  var result = parser.parse(qspCode);
  console.log(result);
  return result;
}
