const https = require('https');

const url = 'https://gestoriahol.com/_next/image?url=%2Fimages%2Fhero-family-celebration.png&w=1920&q=75';

https.get(url, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    console.log('Body:', body);
  });
}).on('error', (e) => {
  console.error(e);
});
