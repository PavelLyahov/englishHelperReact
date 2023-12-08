const axios = require('axios');
const { setBearerToken } = require('./userData');

async function setIAMtoken() {
	console.log('setIAMtoken');
	try {
		const response = await axios.post(
			'https://functions.yandexcloud.net/d4emr02ibar0ubhq64q3'
		);
		setBearerToken(response.data.access_token);
		console.log('BEARER_TOKEN получен');
	} catch (error) {
		console.error('Ошибка при отправке запроса:', error.message);
		throw error;
	}
}

module.exports = { setIAMtoken };
