var neon = require('@cityofzion/neon-js')
var Neon = neon.default
const neo = require("./backend/blockchain.js")
const account = require("./backend/config.js")
const util = require("./backend/util.js")
const tools = require("./backend/tools.js")

//smart-contract V2
switch (process.argv[2]) {
  case "readtask":
    readtask()
    break
  case "registertask":
    registertask()
    break
  default:
    console.log("fail arg")
}

function readtask() {
  neo.getValueByKey("readtask", account.address).then((res) => {
    var fs = require('fs')
    if(res != ""){
      fs.writeFile("./masterIP", res, function(err) {
          if(err) {
              return console.log(err)
          }
          console.log(res);
          console.log("The file was saved!")
      })
    }
    else {
      fs.writeFile("./masterIP", "NULL", function(err) {
          if(err) {
              return console.log(err)
          }
          console.log("The file was saved!")
      })
      console.log("no value returned");
    }
  })
}

function registertask() {
  tools.getExtIP().then((ip) => {
    neo.invokeContract("registertask", [account.address, ip+"new2"]).then((res) => {
      console.log(res);
    })
  })
}

