import React from 'react';
import useInterval from '../utils/useInterval.js';
import '../styles/Timer.css';

export default props =>
{
	const [categoryName, setCategoryName] = React.useState("Work");
	const [categoryValue, setCategoryValue] = React.useState(1500);
	const [shouldShowColon, setShouldShowColon] = React.useState(true);

	const performCountdown = () =>
	{

		setCategoryValue(categoryValue - 1);
	}

	//useInterval(() => performCountdown(), 1000);

	//useInterval(() => setShouldShowColon(!shouldShowColon), 500);

	return (
		<div id="countdown-container">
			<div id="outer-border">
				<div id="main-border">
					<div id="main-border-shadow">
					</div>
					<div id="arc-start">
					</div>
					<div id="arc-end">
					</div>
					<div id="inner-border">
						<span id="category-title">{categoryName}</span>
						{/* Set fixed significant figures later */}
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