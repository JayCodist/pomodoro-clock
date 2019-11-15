import React from 'react';
import ReactDOM from 'react-dom';
import TimerSection from './components/TimerSection.js';
import Settings from './components/Settings.js';
import Hamburger from './utils/Hamburger.js';
import './styles/index.css';

const App = props => 
{
	const [categories, setCategories] = React.useState({
		work: {name: "Work", initialValue: 1500},
		break: {name: "Break", initialValue: 300}
	});
	const [currentCategory, setCurrentCategory] = React.useState(categories.work);
	const [isFullScreen, setIsFullScreen] = React.useState(true);
	const [shouldShowPlay, setShouldShowPlay] = React.useState(true);
	const [shouldAllowNotifs, setShouldAllowNotifs] = React.useState(true);
	const [categoryValue, setCategoryValue] = React.useState(currentCategory.initialValue);
	const [categoryName, setCategoryName] = React.useState(currentCategory.name);
	const [isMobile, setIsMobile] = React.useState(window.screen.width <= 860);

	React.useEffect(() =>
	{
		window.addEventListener('resize', () => setIsMobile(window.screen.width <= 860));
	}, [])

	const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

	const togglePlayStatus = () =>
	{
		setShouldShowPlay(!shouldShowPlay);
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

	const updateCategories = (newCategories, newCurrentCategory) =>
	{
		setCategories(newCategories);
		setCurrentCategory(newCurrentCategory);
		setCategoryName(newCurrentCategory.name);
		setCategoryValue(newCurrentCategory.initialValue);
	}

	return (
	<main id="container">
 		<TimerSection 
 			isFullScreen={isFullScreen}
 			shouldAllowNotifs={shouldAllowNotifs}
 			shouldShowPlay={shouldShowPlay}
 			toggleNotifStatus={toggleNotifStatus}
 			togglePlayStatus={togglePlayStatus}
 			initialCategoryValue={currentCategory.initialValue}
 			categoryValue={categoryValue}
 			setCategoryValue={setCategoryValue}
 			categoryName={categoryName}
 			resetCategoryValue={() => changeCategoryValue(currentCategory.initialValue) }
 			isMobile={isMobile}
 		/>
 		<Hamburger 
 			isMobile={isMobile}
 			active={!isFullScreen} 
 			toggleFullScreen={toggleFullScreen}
 		/>
 		<Settings
 			isFullScreen={isFullScreen}
 			categories={categories}
 			updateCategories={updateCategories}
 			currentCategory={currentCategory}
 			isMobile={isMobile}
 		/>
 	</main>);
}


ReactDOM.render(<App />, document.getElementById("root"));