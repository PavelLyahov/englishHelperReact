import { useState } from 'react';
import styles from './Translator.module.css';
import { postPhrase } from '../../../requests/phrases';

const Translator = ({ phraseModel, setPhraseModel }) => {

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			sendRequest();
		}
	};

	const sendRequest = async () => {
		if (phraseModel.source.trim() !== '') {
			try {
				const translatedText = await postPhrase(phraseModel.source);
				const newModel = {
					...phraseModel,
					target: translatedText,
				};
				setPhraseModel(newModel);
			} catch (error) {
				console.error('Ошибка при получении перевода:', error.message);
			}
		}
	};

	return (
		<div className={styles.translator}>
			<textarea
				className={styles.textarea}
				placeholder='Введите текст'
				value={phraseModel.source}
				onChange={(e) =>
					setPhraseModel({
						...phraseModel,
						source: e.target.value,
					})
				}
				onKeyDown={handleKeyPress}
			/>
			<div className={styles.translateButton} onClick={sendRequest}>
				Enter
				<p>&#9654;</p>
			</div>
			<textarea
				className={styles.textarea}
				value={phraseModel.target}
				readOnly={true}
			/>
		</div>
	);
};

export default Translator;
