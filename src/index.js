require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const routerSiswa = require('./routes/siswa.router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/siswa', routerSiswa);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
