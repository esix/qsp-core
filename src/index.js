var parser = require("./qsp.jison");

export function compileQSPCode(qspCode) {
  var result = parser.parse(qspCode);
  return result;
}
