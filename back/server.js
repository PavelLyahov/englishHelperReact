const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { setIAMtoken } = require('./yandexapi/initialaziapp');

dotenv.config({ path: './config.env' });
const app = require('./app');

setIAMtoken();
const DB = process.env.DATABASE_LOCAL;

mongoose
	.connect(DB, {})
	.then(() => console.log('DB connection successful!'))
	.catch((err) => console.error('Error connecting to DB:', err));

const port = process.env.PORT || 3100;
app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
