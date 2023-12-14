import express from 'express';
import { Animal } from '../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', async (req, res) => {
  const allAnimals = await Animal.findAll();
  const initState = { animals: allAnimals };
  res.render('AnimalsPage', initState);
});

export default animalsRouter;
