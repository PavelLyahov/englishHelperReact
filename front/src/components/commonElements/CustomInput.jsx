import React, { useState } from 'react';
import Select from 'react-select';

const CustomInput = () => {
	const [inputValue, setInputValue] = useState('');
	const [selectedWords, setSelectedWords] = useState([]);

	const handleInputChange = (value) => {
		console.log('handleInputChange' + value);
		setInputValue(value);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && inputValue.trim() !== '') {
			setSelectedWords([
				...selectedWords,
				{ label: inputValue, value: inputValue },
			]);
			setInputValue('');
		}
	};

	const handleWordClick = (word) => {
		console.log('Clicked on word:', word);
	};

	const customStyles = {
		control: (provided) => ({
			...provided,
			border: 'none',
			borderBottom: '1px solid grey',
			boxShadow: 'none',
			maxWidth: '300px',
		}),
		multiValueRemove: () => null,
	};

	return (
		<Select
			inputValue={inputValue}
			value={selectedWords}
			onInputChange={handleInputChange}
			onKeyDown={handleKeyDown}
			isClearable
			isMulti
			hideSelectedOptions
			styles={customStyles}
			menuIsOpen={false}
			components={{
				MultiValue: ({ data, innerProps }) => (
					<div onClick={() => handleWordClick(data)} {...innerProps}>
						{data.label}
					</div>
				),
				MultiValueRemove: () => null,
				MultiValueContainer: () => null,
				MultiValueLabel: () => null,
				DropdownIndicator: () => null,
				IndicatorSeparator: () => null,
			}}
		/>
	);
};

export default CustomInput;
