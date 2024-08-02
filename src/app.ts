// import session from "express-session";
import bodyParser from 'body-parser';
import compression from 'compression'; // compresses requests
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import mountRoutes from './api/route.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Create Express server
const app = express();

// Express configuration
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

mountRoutes(app);

app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));

// always return index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '../public/index.html');
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: { message: any; status: any }, req: Request, res: Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({ message: 'error' });
});

export default app;
