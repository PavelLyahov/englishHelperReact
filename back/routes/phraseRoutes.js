const express = require('express');
const phraseController = require('../controllers/phraseController');
const translateController = require('../controllers/translateController');

const router = express.Router();

router
	.route('/')
	.get(phraseController.getAllPhrases)
	.post(phraseController.createPhrase)
	.patch(phraseController.pathchPhrase)
	.delete(phraseController.deletePhrase);	

router
	.route('/files')
	.get(phraseController.getFiles)

router.route('/translate').post(translateController.getTranslate);

module.exports = router;
