import React from 'react';
import Reset from './Reset.js';
import Start from './Start.js';
import Notifications from './Notifications.js';
import Timer from './Timer.js';


export default props =>
(
	<section id="timer-section">
		<h1 id="intro">Pomodoro Clock</h1>
		<p id="desc">
			Manage your work time and breaks with convenience! <br />
			Read more <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">here</a>
		</p>
		<section id="timer-container">
			<Timer />
			<section id="timer-controls">
				<Reset />
				<Start />
				<Notifications />
			</section>
		</section>
	</section>
)