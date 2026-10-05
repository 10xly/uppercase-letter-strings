var L

const originalConsoleLog = console.log
console.log = x => L = x[0]
require("@splutterpeeperspreceding/drooledevangelizedparachutes")

console.log = originalConsoleLog
module.exports = L