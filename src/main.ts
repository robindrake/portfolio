import express from 'express';
import dotenv  from 'dotenv';
import router from './routes/route-main';


dotenv.config();

const app: express.Express = express();
const port = 65000 || process.env.PORT;

app.use(router);

app.listen('65000', () => {
    console.log(`[server] listening on port ${port}`);
});