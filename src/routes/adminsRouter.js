import express from 'express';
import { Admin } from '../../db/models';

const adminsRouter = express.Router();

adminsRouter.get('/', async (req, res) => {
  const allAdmins = await Admin.findAll();
  const initState = { admins: allAdmins };
  res.render('AdminsPage', initState);
});

export default adminsRouter;
