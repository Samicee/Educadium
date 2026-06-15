const https = require('https');
https.get('https://raw.githubusercontent.com/Samicee/Educadium/5ce37de4d5c9deb0b7a593a831929aa6f807f14d/image/Gemini_Generated_Image_gx6f00gx6f00gx6f.png', (res) => {
  console.log('Status:', res.statusCode);
});
