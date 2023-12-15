import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const initState = { hello: 'Зоопарк' };
    res.render('MainPage', initState);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
