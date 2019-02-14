// lib/app.ts
import Express from 'express';
import routes from './routes';

const app: Express.Application = Express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world')
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log('Hello word');
});
