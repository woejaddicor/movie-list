import React from 'react';
import styles from '../../CSS-Components/HomePage.module.css';

export const HomePage = () => {
	return (
		<div className={styles.homeBody}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Movie Database</h1>
				<p className={styles.aboutText}>
					Search, favourite, and get more information about your favourite
					films.
					<br></br>
					<br></br>
					Built by{' '}
					<a
						className={styles.githubLink}
						href="https://github.com/woejaddicor"
					>
						Joe Waddicor
					</a>
				</p>
			</div>
			<div className={styles.sliderThumbOuter}>
				<div className={styles.sliderThumbInner}></div>
			</div>
		</div>
	);
};
