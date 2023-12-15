import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import resLocals from './middlewares/resLocals';
import animalsRouter from './routes/animalsRouter';
import tarifsRouter from './routes/tarifsRouter';
import authRouter from './routes/authRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import adminsRouter from './routes/adminsRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

app.use('/admins', adminsRouter);
app.use('/tarifs', tarifsRouter);
app.use('/animals', animalsRouter);
app.use('/api/auth', apiAuthRouter);//добавление пользователя для регистрации и логина
app.use('/auth', authRouter);//отрисовка регистарции и логина
app.use('/api', apiRouter); //не используем
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
