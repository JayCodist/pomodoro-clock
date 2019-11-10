import React from 'react';
import ReactDOM from 'react-dom';
import TimerSection from './components/TimerSection.js';
import Settings from './components/Settings.js';
import Hamburger from './utils/Hamburger.js';
import './styles/index.css'

const App = props => 
{
	const [isFullScreen, setIsFullScreen] = React.useState(true);
	const toggleFullScreen = () => setIsFullScreen(!isFullScreen);
	return (
	<main id="container">
 		<TimerSection isFullScreen={isFullScreen}  />
 		<Hamburger active={!isFullScreen} toggleFullScreen={toggleFullScreen} />
 		<Settings isFullScreen={isFullScreen} />
 	</main>);
}


ReactDOM.render(<App />, document.getElementById("root"));