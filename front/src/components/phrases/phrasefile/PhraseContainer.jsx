import { useState, useEffect } from 'react';
import StickerContainer from './stickers/StickerContainer';
import FileManagerPanel from './FileManagerPanel';
import styles from './PhraseContainer.module.css';
import API from '../../../core/phraseController';

const VOID_PHRASE = {
	source: '',
	target: '',
	file: '',
	level: 0,
};

const Container = ({
	phraseModel,
	setPhraseModel,
	phraseList,
	setPhraseList
}) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [currentFile, setCurrentFile] = useState('');
	const [fileList, setFileList] = useState([]);
	const [sortedList, setSortedList] = useState([]);

	useEffect(() => {
		const files = [...new Set(phraseList.map((phrase) => phrase.file))];
		setFileList(files);
		setSortedList(() =>
			phraseList.filter((phrase) => phrase.file === currentFile)
		);
		setErrorMessage('');
	}, [phraseList]);

	const setCurrentFileHandler = (file) => {
		setCurrentFile(file);
		setSortedList(() => phraseList.filter((phrase) => phrase.file === file));
	};

	const addPhraseToFile = async () => {
		if (isValidPhrase(getBalancePhrase())) {
			try {
				const appendedPhrase = await API.createPhrase(getBalancePhrase());

				setPhraseModel(VOID_PHRASE);
				setPhraseList([...phraseList, appendedPhrase]);
			} catch (error) {
				console.error('Error adding phrase:', error);
			}
		}
	};

	const isValidPhrase = (phrase) => {
		if (phrase.source === '' || phrase.target === '') {
			setErrorMessage('Phrase is empty');
			return false;
		}
		if (phrase.file === '') {
			setErrorMessage('File is empty');
			return false;
		}
		return true;
	};

	const containsCyrillic = (text) => /[а-яА-Я]/.test(text);

	const getBalancePhrase = () => {
		if (containsCyrillic(phraseModel.source)) {
			return {
				...phraseModel,
				file: currentFile,
			};
		}

		return {
			...phraseModel,
			source: phraseModel.target,
			target: phraseModel.source,
			file: currentFile,
		};
	};

	return (
		<div className={styles.phraseContainer}>
			{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
			<FileManagerPanel
				currentFile={currentFile}
				setCurrentFile={setCurrentFileHandler}
				fileList={fileList}
				setFileList={setFileList}
				addPhraseToFile={addPhraseToFile}
			/>
			<StickerContainer sortedList={sortedList} setPhraseList={setPhraseList} currentFile={currentFile}/>
		</div>
	);
};

export default Container;
