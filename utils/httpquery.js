function http_build_query(params) {
  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
  return query;
}
module.exports.http_build_query = http_build_query