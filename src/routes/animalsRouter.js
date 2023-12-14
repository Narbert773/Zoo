import express from 'express';
import { Animal, Image } from '../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', async (req, res) => {
  const allAnimals = await Animal.findAll();
  const initState = { animals: allAnimals };
  res.render('AnimalsPage', initState);
});

animalsRouter.delete('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    await Animal.destroy({ where: { id: animalId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

animalsRouter.post('/', async (req, res) => {
  try {
    await Animal.create(req.body);
    return res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

animalsRouter.patch('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const { name, description, img } = req.body;
    const targetAnimal = await Animal.findOne({ where: { id: animalId } });

    if (name) targetAnimal.name = name;
    if (description) targetAnimal.description = description;
    if (img) targetAnimal.img = img;

    await targetAnimal.save();
    res.json(targetAnimal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

animalsRouter.get('/add', (req, res) => res.render('AnimalsAddPage'));

animalsRouter.get('/:animalId', async (req, res) => {
  const { animalId } = req.params;
  const oneAnimal = await Animal.findOne({ where: { id: animalId }, include: Image });
  const initState = { oneAnimal };

  res.render('OneAnimalPage', initState);
});

export default animalsRouter;
