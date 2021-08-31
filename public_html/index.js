const x = require('express');
const app;
app
.all('/login/', (req, res) => {
  res
  .status(200)
  .set({"Content-Type":"text/html; chaset=utf-8"})
  .send('tia.nntr.wth\n');
})

.all('/doc/new/vasya-new.html', (req, res) => {
  res
  .status(200)
  .set({"Content-Type":"text/html"})
  .send('<h1><i>Vasya Web Page</i></h1>\n');
});
