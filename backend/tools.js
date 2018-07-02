module.exports = {
  getExtIP: () => {
    let extIP = require('ext-ip')();
    return extIP.get().then(function (ip) {
        return ip;
    })
  }
}
