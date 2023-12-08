import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
	return (
		<nav style={styles.Menu}>
			<NavLink to='.'>Home</NavLink>
			<NavLink to='words'>Words</NavLink>
			<NavLink to='phrases'>Phrases</NavLink>
			<NavLink to='training'>Training</NavLink>
			<NavLink to='contacts'>Contacts</NavLink>
		</nav>
	);
};

export default Menu;
