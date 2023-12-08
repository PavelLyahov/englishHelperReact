import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ options, onChange }) => {
	return (
		<Select
			isMulti
			options={options}
			onChange={onChange}
			placeholder='Select options...'
			styles={{
				control: (provided, state) => ({
					...provided,
					border: state.menuIsOpen ? 'gray' : 'black',
					borderColor: state.isFocused ? 'gray' : 'black',
				}),
				option: (provided, state) => ({
					...provided,
					color: 'green',
					backgroundColor: state.isFocused ? 'lightgreen' : 'white',
				}),
				multiValue: (provided) => ({
					...provided,
					backgroundColor: 'lightgreen',
				}),
				multiValueLabel: (provided) => ({
					...provided,
					color: 'darkgreen',
					fontSize: '20px',
				}),
			}}
		/>
	);
};

export default MultiSelect;
