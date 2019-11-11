import React from 'react';


export default props =>
(
	<div 
		className={props.className} 
		style={{height: '5rem', width: '5rem'}}
		onClick={props.onClick}
	>
		<span id="start-tooltip" className="tooltiptext">{props.shouldShowPlay ? "Start current timer" : "Pause current timer"}</span>
		{
			props.shouldShowPlay ? 
			(<svg width="14" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0l14 9-14 9z" fill="#FFF" fillRule="nonzero"></path></svg>)
			:
			(<svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M8.016.016H12v13.968H8.016V.016zM0 13.984V.016h3.984v13.968H0z" fill="#FFF" fillRule="nonzero"></path></svg>)
		}
	</div>
)