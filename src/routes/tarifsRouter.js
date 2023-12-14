import express from 'express';
import { Tarif } from '../../db/models';

const tarifsRouter = express.Router();

tarifsRouter.get('/', async (req, res) => {
  const allTarifs = await Tarif.findAll();
  const initState = { tarifs: allTarifs };
  res.render('TarifsPage', initState);
});

tarifsRouter.patch('/:tarifId', async (req, res) => {
  try {
    const { tarifId } = req.params;
    const { name, description, price } = req.body;
    const targetTarif = await Tarif.findOne({ where: { id: tarifId } });

    if (name) targetTarif.name = name;
    if (description) targetTarif.description = description;
    if (price) targetTarif.price = price;

    await targetTarif.save();

    res.json(targetTarif);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default tarifsRouter;
