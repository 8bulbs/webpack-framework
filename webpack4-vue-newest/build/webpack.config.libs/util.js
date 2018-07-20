const path = require('path')

const resove =  function (dir) {
  return path.join(__dirname, '../..', dir)
}

module.exports = resove
