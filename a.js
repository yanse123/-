var path = require("path")
var file = __filename
var url  = require("url")
var Event = require("events")
console.log(url)
var e = new Event
e.addListener("a",function (aa) {
    console.log(aa)
})
e.addListener("a",function (aa) {
    console.log(aa)
})
e.addListener("a",function (aa) {
    console.log(aa)
})
e.addListener("a",function (aa) {
    console.log(aa)
})
e.removeListener("a",function () {
    return
})
e.emit("a","123")









