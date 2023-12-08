import { BASE_URL, API_URL, ENDPOINT } from '../constants/apiconstants';
import axios from 'axios';

export const postPhrase = async (data) => {
	try {
		const serverURL = BASE_URL + API_URL + ENDPOINT.TRANSLATE;
		const response = await axios.post(serverURL, { text: data });
		console.log('Ответ от сервера:', response.data.data);
		return response.data.data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

export const getPhraseList = async () => {
	console.log('Get phrases');
	return [
		{ id:"1", source: 'Asource', target: 'Atarget', phraseFile: 'AphraseFile' },
		{ id:"2", source: 'Asource2', target: 'AphraseFile2', phraseFile: 'AphraseFile2' },
	];
};
