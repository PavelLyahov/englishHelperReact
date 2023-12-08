const { postPhrase } = require('../yandexapi/yandexController');

exports.getTranslate = async (req, res) => {
	try {
		const translatedData = await postPhrase(req.body.text);

		res.status(201).json({
			status: 'success',
			data: translatedData,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};
