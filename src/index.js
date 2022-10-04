const express = require('express');
const bodyParser = require('body-parser');
const { talkersData } = require('./utils/fsUtils.js');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

const main = async () => {
  const talkerData = await talkersData();
  console.log(talkerData);
};

main();
