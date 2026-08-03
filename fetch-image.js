const https = require('https');

const rootUrl = 'https://gestoriahol.com/images/hero-family-celebration.png';
const iconUrl = 'https://gestoriahol.com/favicon.ico';

function checkUrl(url) {
  https.get(url, (res) => {
    console.log(`[${url}] Status Code:`, res.statusCode);
    console.log(`[${url}] Headers:`, res.headers);
  }).on('error', (e) => {
    console.error(e);
  });
}

checkUrl(rootUrl);
checkUrl(iconUrl);
