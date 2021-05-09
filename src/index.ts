import express from 'express';
require('dotenv').config();

const port = process.env.APP_PORT || 3000;
const app = express();
app.listen(port, () => {
  console.log(`Port open @ ${port}`);
});
