import React from 'react';


export default props =>
(
	<div className={props.className} onClick={props.onClick} >
		<span className="tooltiptext">Reset current timer</span>
		<svg width="16" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4.023c4.398 0 8 3.556 8 7.954 0 4.397-3.602 8-8 8s-8-3.603-8-8h2.012A5.97 5.97 0 0 0 8 17.965a5.97 5.97 0 0 0 5.988-5.988A5.97 5.97 0 0 0 8 5.988v4.024L2.994 5.006 8 0v4.023z" fill="#FFF" fillRule="nonzero"></path></svg>
	</div>
)