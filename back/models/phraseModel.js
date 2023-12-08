const mongoose = require('mongoose');
// id: '',
// 			source: '',
// 			target: '',
// 			file: '',
// 			level: '',
const phraseSchema = new mongoose.Schema(
	{
		source: {
			type: String,
			required: [true, 'Required field'],
			unique: false,
			trim: true,
			maxlength: [200, 'A phrase must have less or equal then 400 characters'],
			minlength: [1, 'A phrase must have more or equal then 1 character'],
		},
		target: {
			type: String,
			required: [true, 'Required field'],
			unique: false,
			trim: true,
			maxlength: [200, 'A phrase must have less or equal then 400 characters'],
			minlength: [1, 'A phrase must have more or equal then 1 character'],
		},
		file: {
			type: String,
			required: [true, 'Required field'],
			unique: false,
			trim: true,
			maxlength: [40, 'A phrase must have less or equal then 400 characters'],
			minlength: [1, 'A phrase must have more or equal then 1 character'],
		},
		level: {
			type: Number,
			required: [true, 'Required field'],
			unique: false,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

const Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
