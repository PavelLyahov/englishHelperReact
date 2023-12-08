import { useState, useEffect } from 'react';
import MultiSelect from '../commonElements/Multiselect';
import API from '../../core/phraseController';
import styles from './PhraseTraining.module.css';
import CustomInput from '../commonElements/CustomInput';
import CustomTextArea from '../commonElements/CustomTextArea';

import PhraseTrainingManager from '../../core/PhraseTrainingManager';

const PhraseTraining = () => {
	const [phraseList, setPhraseList] = useState([]);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [currentWordsOfPhrase, setCurrentWordsOfPhrase] = useState([]);
	let phraseTrainingManager = new PhraseTrainingManager();

	useEffect(() => {
		console.log(phraseList);
		console.log(selectedFiles);
		console.log(currentWordsOfPhrase);
	}, [phraseList, selectedFiles, currentWordsOfPhrase]);

	useEffect(() => {
		const fetchData = async () => {
			const phrases = await API.getPhrases();
			setPhraseList(phrases);
		};
		fetchData();
	}, []);

	const handleSelectedFiles = (selectedFileObj) => {
		setSelectedFiles(selectedFileObj.map((fileObj) => fileObj.value));
	};

	const getOptions = () => {
		return [...new Set(phraseList.map((phrase) => phrase.file))].map(
			(file) => ({
				value: file,
				label: file,
			})
		);
	};

	const randomize = () => {
		phraseTrainingManager.randomizeList();
	};

	const startTrainin = () => {
		const arr = phraseList.filter((phrase) =>
			selectedFiles.includes(phrase.file)
		);
		console.log(arr);
    if (arr.length > 0) {
      phraseTrainingManager = new PhraseTrainingManager(arr);
		const phrase = phraseTrainingManager.getNext();
		const words = phrase.target.split(' ');
		setCurrentWordsOfPhrase(words);
    } else {
      //setErr
    }
	};

	return (
		<div className={styles.phraseTrainingSection}>
			<div className={styles.preparingContainer}>
				<div className={styles.multiselect}>
					<MultiSelect options={getOptions()} onChange={handleSelectedFiles} />
				</div>
				<button onClick={randomize}>Randomize</button>
				<button onClick={startTrainin}>Start</button>
			</div>
			<div className={styles.answerContainer}>
				<p>info:</p>
				<CustomTextArea selectedWords={currentWordsOfPhrase} />
				<CustomInput className={styles.inputAnswer} />
			</div>
		</div>
	);
};

export default PhraseTraining;
