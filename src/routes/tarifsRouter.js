import express from 'express';
import { Tarif } from '../../db/models';

const tarifsRouter = express.Router();

tarifsRouter.get('/', async (req, res) => {
  try {
    const allTarifs = await Tarif.findAll();
    const initState = { tarifs: allTarifs };
    res.render('TarifsPage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default tarifsRouter;
