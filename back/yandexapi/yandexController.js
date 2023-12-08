const axios = require('axios');
const { YANDEX_TRANSLATE_URL } = require('../utils/const/const.js');
const { getheaders } = require('./userData.js');

const postPhrase = async (text) => {
	try {
		const response = await axios.post(
			YANDEX_TRANSLATE_URL,
			getDataToYandex(text),
			getheaders()
		);
		// console.log(response.data);
		return response.data.translations[0].text; //{ translations: [ { text: 'Must contain at least one' } ] }
	} catch (error) {
		console.error('Ошибка при отправке запроса:', error.message);
		throw error;
	}
};

const getDataToYandex = (text) => {
    const cyrillicRegex = /[а-яА-Я]/;
    const sourceLanguageCode = cyrillicRegex.test(text) ? 'ru' : 'en';
    const targetLanguageCode = sourceLanguageCode === 'ru' ? 'en' : 'ru';
  
    return {
      sourceLanguageCode,
      targetLanguageCode,
      format: 'PLAIN_TEXT',
      speller: true,
      texts: [text],
    };
};

module.exports = { postPhrase };
