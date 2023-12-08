import { useDrop } from 'react-dnd';
import Sticker from './Sticker';
import styles from './StickerContainer.module.css';
import API from '../../../../core/phraseController';

const StickerContainer = ({ sortedList, setPhraseList, currentFile }) => {
	const [, drop] = useDrop({
		accept: 'STICKER',

		drop: async (phrase) => {
			const editedPhrase = { ...phrase, file: currentFile };
			const updatedPhrase = await API.patchPhrase(editedPhrase);

			setPhraseList((prevPhraseList) => {
				return prevPhraseList.map((item) =>
					item.id === editedPhrase.id ? updatedPhrase : item
				);
			});
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<>
			<div className={styles.container} ref={drop}>
				<div className={styles.scrollContainer}>
					{sortedList &&
						sortedList.map((phrase) => (
							<Sticker
								key={phrase.id}
								phrase={phrase}
								setPhraseList={setPhraseList}
							/>
						))}
				</div>
			</div>
		</>
	);
};

export default StickerContainer;
