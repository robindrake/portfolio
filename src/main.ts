import express, { Express, Request, Response } from 'express';
import dotenv  from 'dotenv';
import *  as routes from './routes/route-main';


dotenv.config();

const app: Express = express();
const port = 65000 || process.env.PORT;

app.use(routes);

app.listen('65000', () => {
    console.log(`[server] listening on port ${port}`);
});