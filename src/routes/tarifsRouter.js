import express from 'express';
import { Tarif } from '../../db/models';

const tarifsRouter = express.Router();

tarifsRouter.get('/', async (req, res) => {
  const allTarifs = await Tarif.findAll();
  const initState = { tarifs: allTarifs };
  res.render('TarifsPage', initState);
});

export default tarifsRouter;
