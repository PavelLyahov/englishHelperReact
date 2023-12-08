import { useState, useEffect } from 'react';
import Translator from './translator/Translator';
import PhraseContainer from './phrasefile/PhraseContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './PhrasesSection.module.css';
import API from '../../core/phraseController';

const VOID_PHRASE = {
	source: '',
	target: '',
	file: '',
	level: 0,
};

const PhrasesSection = () => {
	const [phraseModel, setPhraseModel] = useState(VOID_PHRASE);

	const [phraseList, setPhraseList] = useState([]);

	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const phrases = await API.getPhrases();
				setPhraseList(phrases);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		setErrorMessage('');
	}, [phraseModel, phraseList]);

	return (
		<DndProvider backend={HTML5Backend}>
			<Translator phraseModel={phraseModel} setPhraseModel={setPhraseModel} />
			{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
			<div className={styles.phrasefiles}>
				<PhraseContainer
					phraseModel={phraseModel}
					setPhraseModel={setPhraseModel}
					phraseList={phraseList}
					setPhraseList={setPhraseList}
				/>
				<PhraseContainer
					phraseModel={phraseModel}
					setPhraseModel={setPhraseModel}
					phraseList={phraseList}
					setPhraseList={setPhraseList}
				/>
			</div>
		</DndProvider>
	);
};

export default PhrasesSection;
