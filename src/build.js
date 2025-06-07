const fs = require('fs');
const app = require('./app');
const request = require('supertest');
//build js construye la app y genera el artefacto final que es
//index.html
(async () => {
  const res = await request(app).get('/');
  fs.mkdirSync('public', { recursive: true });
  fs.writeFileSync('public/index.html', res.text);
  console.log('Static HTML generated!');
})();
