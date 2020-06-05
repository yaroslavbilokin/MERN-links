const express = require('express');
const config = require('config');

const app = express();

app.listen(5000, () => console.log('App has been started...'))