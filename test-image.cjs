// test-image.cjs
const https = require('https');

https.get('https://raw.githubusercontent.com/Samicee/Savory-Bites/main/Gemini_Generated_Image_gx6f00gx6f00gx6f.png', (res) => {
  console.log('Status Error:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Data:', data.substring(0, 500)));
});
