import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.json({ hello: 'Зоопарк' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
