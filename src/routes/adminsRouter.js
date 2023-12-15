import express from 'express';
import { Admin } from '../../db/models';

const adminsRouter = express.Router();

adminsRouter.get('/', async (req, res) => {
  try {
    const allAdmins = await Admin.findAll();
    const initState = { admins: allAdmins };
    res.render('AdminsPage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default adminsRouter;
