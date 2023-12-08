const { query } = require('express');
const Phrase = require('../models/phraseModel');

exports.getAllPhrases = async (req, res) => {
	try {
		console.log(req.query);
		const queryObj = { ...req.query };

		const phrases = await Phrase.find(queryObj);

		res.status(201).json({
			status: 'success',
			results: phrases.length,
			data: {
				phrases,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.getFiles = async (req, res) => {
	try {
		console.log(req.query);
		const queryObj = { ...req.query };

		const phrases = await Phrase.distinct("file")

		res.status(201).json({
			status: 'success',
			results: phrases.length,
			data: {
				phrases,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.getPhrase = async (req, res) => {
	try {
		const phrase = await Phrase.findById(req.params.id);

		res.status(201).json({
			status: 'success',
			data: {
				data: phrase,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.createPhrase = async (req, res) => {
	try {
		console.log(req.body);
		const newPhrase = await Phrase.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				phrase: newPhrase,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.pathchPhrase = async (req, res) => {
	try {
		console.log(req.body);
		const updatedPhrase = await Phrase.findByIdAndUpdate(
			req.body.id, // предполагается, что идентификатор передается в URL
			req.body, // данные, которые нужно обновить
			{ new: true, runValidators: true } // опции: new - вернуть обновленный документ, runValidators - применить валидацию (если есть)
		);

		if (!updatedPhrase) {
			return res.status(404).json({
				status: 'fail',
				message: 'Phrase not found',
			});
		}

		res.status(201).json({
			status: 'success',
			data: {
				phrase: updatedPhrase,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.deletePhrase = async (req, res) => {
	try {
		const deletedPhrase = await Phrase.findByIdAndDelete(req.body.id);

		res.status(201).json({
			status: 'success',
			data: {
				phrase: deletedPhrase,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};
