import React from 'react';
import Reset from './Reset.js';
import Start from './Start.js';
import Notifications from './Notifications.js';
import Timer from './Timer.js';
import '../styles/TimerSection.css';

const styles = 
{
	section: 
	{
		backgroundColor: 'darkorange',
		transition: '0.4s ease-out',
		paddingTop: '1rem',
		minHeight: '100vh',
	},
	timerControls:
	{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	intro: 
	{
		fontWeight: 'bold',
	},
}

export default props =>
{
	const { 
		shouldAllowNotifs, 
		shouldShowPlay,
		togglePlayStatus,
		toggleNotifStatus,
		initialCategoryValue,
		resetCategoryValue,
		categoryValue,
		setCategoryValue,
		categoryName,
		isFullScreen,
		isMobile
	} = props;
	let width = isMobile ? '100vw' : (isFullScreen ? '100%' : '60%');
	let statefulIntroStyling = 
	{
		fontWeight: 'bold',
		fontSize: isMobile ? '25px' : '40px',
		margin: isMobile ? '0.5rem 1rem 0.5rem' : '1rem 2rem 0.5rem',
	};
	let statefulInfoStyling = 
	{
		fontSize: isMobile ? '14px' : '18px',
		marginLeft: isMobile ? '1rem' : '2rem',
	}
	return (
	<section id="timer-section" style={{...styles.section, width: width}} >
		<h1 style={statefulIntroStyling}>Pomodoro Clock</h1>
		<p style={statefulInfoStyling}>
			Manage your work time and breaks with convenience! <br />
			Read more 
			<a  
				href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
				target="_blank"
				rel="noopener noreferrer"
			> here</a>
		</p>
		<section id="timer-container">
			<Timer 
				initialCategoryValue={initialCategoryValue}
				categoryValue={categoryValue}
				setCategoryValue={setCategoryValue}
				categoryName={categoryName}
				shouldPlay={!shouldShowPlay}
			/>
			<section id="timer-controls" style={styles.timerControls} >
				<Reset 
					className="timer-controls-btn"
					onClick={resetCategoryValue} 
				/>
				<Start 
					className="timer-controls-btn"
					shouldShowPlay={shouldShowPlay}
					onClick={togglePlayStatus}
				/>
				<Notifications 
					onClick={toggleNotifStatus}
					className="timer-controls-btn"
					shouldAllowNotifs={shouldAllowNotifs}
				/>
			</section>
		</section>
	</section>)
}