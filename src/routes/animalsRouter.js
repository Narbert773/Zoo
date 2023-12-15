import express from 'express';
import { Animal, Image } from '../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', async (req, res) => {
  try {
    const allAnimals = await Animal.findAll();
    const initState = { animals: allAnimals };
    res.render('AnimalsPage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

animalsRouter.get('/add', (req, res) => {
  try {
    res.render('AnimalsAddPage');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

animalsRouter.get('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const oneAnimal = await Animal.findOne({ where: { id: animalId }, include: Image });
    const initState = { oneAnimal };

    res.render('OneAnimalPage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default animalsRouter;
