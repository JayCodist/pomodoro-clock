import React from 'react';
import ReactDOM from 'react-dom';
import TimerSection from './components/TimerSection.js';
import Settings from './components/Settings.js';
import './styles/App.css'

const App = props => (
	<main id="container">
 		<TimerSection />
 		<Settings />
 	</main>
 	);


ReactDOM.render(<App />, document.getElementById("root"));