import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Admin } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import jwtConfig from '../../config/jwtConfig';
import cookiesConfig from '../../config/cookiesConfig';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'Empty data' });

    const admin = await Admin.findOne({ where: { email } });
    if (!admin) return res.status(400).json({ message: 'Invalid data' });

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) return res.status(400).json({ message: "Email or password doesn't exist" });

    const plainAdmin = admin.get();
    delete plainAdmin.password;
    const { accessToken, refreshToken } = generateTokens({ user: plainAdmin });

    res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export default apiAuthRouter;
