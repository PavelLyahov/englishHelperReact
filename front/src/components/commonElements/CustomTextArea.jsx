import React, { useEffect, useState } from 'react';
import styles from './CustomTextArea.module.css';

const CustomTextArea = ({ selectedWords }) => {
	const handleWordClick = (word) => {
		console.log('Clicked on word:', word);
		// Дополнительная обработка клика на слове, если необходимо
	};

	// useEffect(() => {
	// 	console.log('selectedWords');
	// 	console.log(selectedWords);
	// });

	return (
		<div className={styles.container}>
			{selectedWords && selectedWords.map((word, index) => (
				<div
					className={styles.word}
					key={index}
					onClick={() => handleWordClick(word)}>
					{word}
				</div>
			))}
		</div>
	);
};

export default CustomTextArea;
