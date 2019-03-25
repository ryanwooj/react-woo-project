import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';

//setup routers & static directory
import api from './routes';


const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/api', api);

app.get('/hello', (req, res) => {
  return res.send('Hello Woolab');
});

app.listen(port, function () {
  console.log(`Express Server Starts on ${port}`);
});

// mongodb connection

const db = mongoose.connection;
db.on('error', console.error)
db.once('open', () => {
  console.log('Connected to mongoDB server');
})
mongoose.connect('mongodb://localhost/woolab')


//use session
app.use(session({
  secret: '$J#dkeAH439j@Jasd',
  resave: false,
  saveUninitialized: true
}));
