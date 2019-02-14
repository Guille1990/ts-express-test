import Express, { Router } from 'express';

const router: Router = Express.Router()

router.get('/other', (req, res) => {
  res.send('hello other');
})

export default router;
