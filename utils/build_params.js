var ksort = require('ksort')

var CryptoJS = require('crypto-js/crypto-js')
var util = require('util')
function build_params (params){
  params = ksort.ksort(params)
  var mac = http_build_query(params)
  var myDate = new Date()
  var client_time =
    util.formatNumber(myDate.getHours()) +
    '' +
    util.formatNumber(myDate.getMinutes()) +
    '' +
    util.formatNumber(myDate.getSeconds())
  // var mac = hmac.hex_hmac_sha1(client_time, mac);
  var mac = CryptoJS.HmacSHA1(mac, client_time).toString()
  params.mac = mac
  var month = myDate.getMonth() + 1
  if (month < 10) {
    month = 0 + '' + month
  }
  var day = myDate.getDate()
  if (day < 10) {
    day = 0 + '' + day
  }
  params.client_time = myDate.getFullYear() + '' + month + '' + day + '' + client_time
  params.api_id = 1

  return params
}

function http_build_query (params){
  var esc = encodeURIComponent
  var query = Object.keys(params).map((k) => esc(k) + '=' + esc(params[k])).join('&')
  return query
}

module.exports.build_params = build_params
