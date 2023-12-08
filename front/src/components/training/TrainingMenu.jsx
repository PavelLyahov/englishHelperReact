import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TrainingMenu.module.css';

const TrainingMenu = () => {
	return (
		<nav className={styles.header}>
			<NavLink className={styles.nav} to='.'>
				Description
			</NavLink>
			<NavLink className={styles.nav} to='wordTraining'>
				Words
			</NavLink>
			<NavLink className={styles.nav} to='phraseTraining'>
				Phrases
			</NavLink>
			<NavLink className={styles.nav} to='dailyTraining'>
				Daily
			</NavLink>
		</nav>
	);
};

export default TrainingMenu;
