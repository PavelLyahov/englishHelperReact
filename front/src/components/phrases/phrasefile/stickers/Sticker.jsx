import React, { useState } from 'react';
import { RiEditLine, RiDeleteBin2Line } from 'react-icons/ri';
import styles from './Sticker.module.css';
import { useDrag } from 'react-dnd';
import API from '../../../../core/phraseController';

const Sticker = ({ phrase, setPhraseList }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedPhrase, setEditedPhrase] = useState(phrase);

	const [, drag] = useDrag({
		type: 'STICKER',
		item: phrase,
	});

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const saveClickHandler = async () => {
		const updatedPhrase = await API.patchPhrase(editedPhrase);
		setPhraseList((prevPhraseList) => {
			return prevPhraseList.map((item) =>
				item.id === editedPhrase.id ? updatedPhrase : item
			);
		});
		setIsEditing(false);
	};

	const handleCancelClick = () => {
		setIsEditing(false);
		setEditedPhrase(phrase);
	};

	const deletePhraseHandler = async () => {
		const deletedPhrase = await API.deletePhrase(phrase);
		setPhraseList((prevPhraseList) =>
			prevPhraseList.filter((item) => item.id !== deletedPhrase.id)
		);
	};

	return (
		<div className={styles.sticker} ref={drag}>
			{isEditing ? (
				<>
					<div className={styles.stickerInput}>
						<input
							type='text'
							value={editedPhrase.source}
							onChange={(e) =>
								setEditedPhrase({ ...editedPhrase, source: e.target.value })
							}
						/>
						<input
							type='text'
							value={editedPhrase.target}
							onChange={(e) =>
								setEditedPhrase({ ...editedPhrase, target: e.target.value })
							}
						/>
					</div>
					<button className={styles.stickerButton} onClick={saveClickHandler}>
						Save
					</button>
					<button className={styles.stickerButton} onClick={handleCancelClick}>
						Cancel
					</button>
				</>
			) : (
				<>
					<div className={styles.stickerText}>
						<p>{phrase.source}</p>
						<p>{phrase.target}</p>
					</div>
					<RiEditLine className={styles.editIcon} onClick={handleEditClick} />
					<RiDeleteBin2Line
						className={styles.deleteIcon}
						onClick={deletePhraseHandler}
					/>
				</>
			)}
		</div>
	);
};

export default Sticker;
