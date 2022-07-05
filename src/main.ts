import express, { Express, Request, Response } from 'express';
import dotenv  from 'dotenf';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 65000;

app.get('/', (req: Request, res:Response){
    res.send('Express + Typescript Server');
});

app.listen('65000', () => {
    console.log(`[server] listening on port ${port}`);
});