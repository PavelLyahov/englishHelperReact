import React, { useEffect, useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdOutlinePostAdd } from 'react-icons/md';
import styles from './FileManagerPanel.module.css';

const FileManagerPanel = ({
	currentFile,
	setCurrentFile,
	fileList,
	setFileList,
	addPhraseToFile,
}) => {
	const [newFile, setNewFile] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSelectChange = (event) => {
		setCurrentFile(event.target.value);
	};

	const handleInputChange = (event) => {
		setNewFile(event.target.value);
	};

	const addNewFileToList = () => {
		if (!fileList.includes(newFile)) {
			setFileList([...fileList, newFile]);
			setCurrentFile(newFile);
			setNewFile('');
			setErrorMessage('');
		} else {
			setErrorMessage('File already exists!');
		}
	};

	useEffect(() => {
		setErrorMessage('');
	}, [newFile]);

	return (
		<div className={styles.managerPanel}>
			{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
			<button onClick={addPhraseToFile}>
				<MdOutlinePostAdd />
			</button>
			<select value={currentFile} onChange={handleSelectChange}>
				<option value=''>Select file</option>
				{fileList &&
					fileList.map((file) => (
						<option key={file} value={file}>
							{file}
						</option>
					))}
			</select>
			<button>
				<RiDeleteBin2Line />
			</button>
			<input
				value={newFile}
				onChange={handleInputChange}
				placeholder='new file'></input>
			<button onClick={addNewFileToList}>+</button>
		</div>
	);
};

export default FileManagerPanel;
