import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {sort} from './exercises/sorting';
import {getValue} from './exercises/tree';
import {getCompanyInfo} from './exercises/generics';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  console.log('test request');
  res.send({number: 100});
})

app.post('/sort', (req, res) => {
  const result = sort(req.body.toSort);
  res.send({result});
})

app.post('/tree', (req, res) => {
  const result = getValue();
  res.send({result})
})

app.post('/generics', (req, res) => {
  res.send({result: getCompanyInfo()})
})

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
