import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';

const app = express();
const accessLog = fs.createWriteStream('./src/logs/access.log', { flags: 'a' });

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('default', { stream: accessLog }));

app.get('/', (req, res) => res.send({ msg: 'Hello World!' }));

export default app;
