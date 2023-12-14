import express from 'express';
import { Animal, Image } from '../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', async (req, res) => {
  const allAnimals = await Animal.findAll();
  const initState = { animals: allAnimals };
  res.render('AnimalsPage', initState);
});

animalsRouter.get('/:animalId', async (req, res) => {
  const { animalId } = req.params;
  const oneAnimal = await Animal.findOne({ where: { id: animalId }, include: Image });
  const initState = { oneAnimal };

  res.render('OneAnimalPage', initState);
});

export default animalsRouter;
