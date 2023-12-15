import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.json({ hello: 'Зоопарк' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
