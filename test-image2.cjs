const https = require('https');
https.get('https://github.com/Samicee/Savory-Bites', (res) => {
  console.log('Status Error:', res.statusCode);
});
