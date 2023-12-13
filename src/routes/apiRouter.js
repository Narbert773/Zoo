import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'Зоопарк' });
});

export default router;
