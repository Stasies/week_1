const [{ Server: h1 }, x] = [require('https'), require('express')];

const Router = x.Router();
const PORT = 443;
const { log } = console;
const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const app = x();
Router
  .route('/')
  .get(r => r.res.end('Привет мир!'));
app
  .use((r, rs, n) => rs.status(200).set(hu) && n())
  .use(x.static('.'))
  .use('/', Router)
  .use(({ res: r }) => r.status(404).set(hu).send('Пока нет!'))
  .use((e, r, rs, n) => rs.status(500).set(hu).send(`Ошибка: ${e}`))
  /* .set('view engine', 'pug') */
  .set('x-powered-by', false);
module.exports = h1(app)
  .listen(process.env.PORT || PORT, () => log(process.pid));
