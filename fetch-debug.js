// fetch-debug.js
const https = require('https');

const url = 'https://gestoriahol.com/_next/image?url=%2Fimages%2Fhero-image.jpg&w=1920&q=75';

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});
