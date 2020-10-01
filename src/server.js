import app from './app';
import dotenv from 'dotenv';

dotenv.config({ path: 'src/config/.env' });

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT);
server.setTimeout(10000);
console.log(`Server listening on ${PORT} ---------- Date: ${Date().toLocaleString()}`);
