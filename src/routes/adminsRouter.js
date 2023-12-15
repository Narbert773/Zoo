import express from 'express';
import { Admin } from '../../db/models';

const adminsRouter = express.Router();

adminsRouter.get('/', async (req, res) => {
  try {
    const admin = await Admin.findOne();
    const initState = { admin: admin };
    res.render('AdminsPage', initState);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default adminsRouter;
