const request = require('request-promise-native');

const post = async (url, headers, body) => {
  return request({
    method: 'POST',
    uri: url,
    headers: Object.assign(
      {
        'User-Agent': 'Crimson Marketing CI',
      },
      headers
    ),
    body,
    json: true,
  });
};

module.exports = {
  post,
};
