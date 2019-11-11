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
	},
	timerControls:
	{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	}
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
		categoryName
	} = props;
	let width = props.isFullScreen ? '100%' : '60%';
	return (
	<section id="timer-section" style={{...styles.section, width: width}} >
		<h1 id="intro">Pomodoro Clock</h1>
		<p id="desc">
			Manage your work time and breaks with convenience! <br />
			Read more <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">here</a>
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