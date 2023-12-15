import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const initState = { hello: 'Зоопарк' };
    res.render('MainPage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
