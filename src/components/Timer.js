import React from 'react';
import useInterval from '../utils/useInterval.js';
import '../styles/Timer.css';

export default props =>
{
	const [categoryName, setCategoryName] = React.useState("Work");
	const [initialCategoryValue, setInitialCategoryValue] = React.useState(1500);
	const [categoryValue, setCategoryValue] = React.useState(initialCategoryValue);
	const [shouldShowColon, setShouldShowColon] = React.useState(true);
	const [rotateAngleMain, setRotateAngleMain] = React.useState(45);
	const [isSecondHalfMain, setIsSecondHalfMain] = React.useState(false);
	const [rotateAngleInner, setRotateAngleInner] = React.useState(45);
	const [isSecondHalfInner, setIsSecondHalfInner] = React.useState(false);

	const performCountdown = () =>
	{
		if (categoryValue === 0) return;
		let progressMadeMain = Math.ceil((initialCategoryValue - (categoryValue - 1)) / initialCategoryValue * 360);
		let progressMadeInner = Math.ceil(360 - (categoryValue % 60) * 6);
		
		if (progressMadeMain > 180)
			setIsSecondHalfMain(true);
		if (progressMadeInner > 180)
			setIsSecondHalfInner(true);
		else
			setIsSecondHalfInner(false);


		setRotateAngleInner(progressMadeInner === 360 ? 45 : 45 + progressMadeInner);
		setRotateAngleMain(45 + progressMadeMain);
		setCategoryValue(categoryValue - 1);
	}

	useInterval(() => performCountdown(), 1000);

	useInterval(() => setShouldShowColon(!shouldShowColon), 500);

	return (
		<div id="countdown-container">
			<div id="outer-border">
				<div id="main-border-wrapper">
					<div 
						id="main-border-shadow" 
						style={{zIndex: isSecondHalfMain ? '10' : '5'}} 
					>
					</div>
					<div 
						className="arcs-main" 
						style={{transform: `rotate(${rotateAngleMain}deg)`}} 
					>
					</div>
					<div 
						className="arcs-main" 
						style={{display: isSecondHalfMain ? 'none' : 'block', transform: 'rotate(-135deg)'}} 
					>
					</div>

					<div id="inner-border-wrapper">
						<div 
							id="inner-border-shadow" 
							style={{zIndex: isSecondHalfInner ? '10' : '5'}} 
						>
						</div>
						<div 
							className="arcs-inner" 
							style={
							{
								transform: `rotate(${rotateAngleInner}deg)`, 
								transition: rotateAngleInner === 45 ? '0s linear' : '1s linear'
							}} 
						>
						</div>
						<div 
							className="arcs-inner" 
							style={{display: isSecondHalfInner ? 'none' : 'block', transform: 'rotate(-135deg)'}}  
							id="arc-end-inner"
						>
						</div>

						<span id="category-title">{categoryName}</span>
						{/* Set fixed significant figures later or display figures as horizontal flex */}
						<span id="category-value">
							<span>{Math.floor(categoryValue / 60)}</span> 
							<span style={{color: shouldShowColon ? 'inherit' : 'transparent'}} >:</span> 
							<span>{categoryValue % 60}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}