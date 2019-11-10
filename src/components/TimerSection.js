import React from 'react';
import Reset from './Reset.js';
import Start from './Start.js';
import Notifications from './Notifications.js';
import Timer from './Timer.js';


const styles = 
{
	section: 
	{
		backgroundColor: 'darkorange',
		transition: '0.4s ease-out',
	}
}

export default props =>
{
	let width = props.isFullScreen ? '100%' : '60%';
	return (
	<section id="timer-section" style={{...styles.section, width: width}} >
		<h1 id="intro">Pomodoro Clock</h1>
		<p id="desc">
			Manage your work time and breaks with convenience! <br />
			Read more <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">here</a>
		</p>
		<section id="timer-container">
			<Timer />
			<section id="timer-controls">
				<Reset onClick={props.toggleFullScreen}/>
				<Start />
				<Notifications />
			</section>
		</section>
	</section>)
}