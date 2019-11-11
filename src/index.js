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
	const [shouldShowPlay, setShouldShowPlay] = React.useState(true);
	const [shouldAllowNotifs, setShouldAllowNotifs] = React.useState(true);
	const [initialCategoryValue, setInitialCategoryValue] = React.useState(1500);
	const [categoryValue, setCategoryValue] = React.useState(initialCategoryValue);
	const [categoryName, setCategoryName] = React.useState("Work");

	const togglePlayStatus = () =>
	{
		setShouldShowPlay(!shouldShowPlay);
	}

	const changeInitialCategoryValue = newValue =>
	{
		if (newValue > 0)
			setInitialCategoryValue(newValue);
		else
			setInitialCategoryValue(45);
	}

	const changeCategoryValue = newValue =>
	{
		if (newValue >= 0)
			setCategoryValue(newValue)
	}

	const toggleNotifStatus = () =>
	{
		setShouldAllowNotifs(!shouldAllowNotifs);
	}

	return (
	<main id="container">
 		<TimerSection 
 			isFullScreen={isFullScreen}
 			shouldAllowNotifs={shouldAllowNotifs}
 			shouldShowPlay={shouldShowPlay}
 			toggleNotifStatus={toggleNotifStatus}
 			togglePlayStatus={togglePlayStatus}
 			initialCategoryValue={initialCategoryValue}
 			categoryValue={categoryValue}
 			setCategoryValue={setCategoryValue}
 			categoryName={categoryName}
 			resetCategoryValue={() => changeCategoryValue(initialCategoryValue) }
 		/>
 		<Hamburger 
 			active={!isFullScreen} 
 			toggleFullScreen={toggleFullScreen}
 		/>
 		<Settings
 			isFullScreen={isFullScreen}
 		/>
 	</main>);
}


ReactDOM.render(<App />, document.getElementById("root"));