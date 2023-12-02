
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()



import express from 'express'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import logger from 'morgan';
import favicon  from 'serve-favicon';

import './config/database.js'

// Require controllers here
const app = express();


app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// add in when the app is ready to be deployed
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json()); // sets up our server to recieve JSON requests, this defines req.body for json requests




// api routes must be before the "catch all" route
import myRoutes from './routes/myRoutes.js';


app.use('/api', myRoutes)



app.use(express.static(path.join(__dirname, "dist")));

import manifest from './dist/manifest.json' assert {type: "json"};

// "catch all" route for production app, can view on localhost:8000
app.get('/*', function(req, res) {
  res.render(path.join(__dirname, 'dist', 'index.ejs'), {manifest});
});


const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log();
  console.log(`  App running  in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
