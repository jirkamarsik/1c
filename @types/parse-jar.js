var fs = require("fs")
var path = require("path")
var parseJAR = require("../src/compiler/parseJAR")

var jars = process.argv.slice(2)

jars.forEach(function(jar, i) {
    if (!fs.existsSync(jars[i])) {
        console.error(jars[i] + " not found")
        process.exit(1)
    }
})

jars.forEach(function(jar) {
    fs.writeFileSync(path.basename(jar).replace(".jar", ".d.ts"), parseJAR(jar))
})