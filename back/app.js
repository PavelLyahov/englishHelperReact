const express = require('express');
const morgan = require('morgan');
const phraseRouter = require('./routes/phraseRoutes');
const trainingRouter = require('./routes/trainingRoutes');
const cors = require('cors');
const { BASE_URL, API_URL, BASE_FRONT_URL } = require('./utils/const/const.js');

const app = express();

// morgan - это middleware Express, предназначенный для ведения журнала (логирования) HTTP-запросов
// dev", который предоставляет подробные сведения о каждом HTTP-запросе.
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors({ origin: BASE_FRONT_URL }));
app.use('/api/v1/phrases', phraseRouter);
// app.use('/api/v1/training', trainingRouter);


module.exports = app;
