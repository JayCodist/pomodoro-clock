import React from 'react';


const styles =
{
	barsContainer:
	{
		position: 'fixed',
		left: '90vw',
	    top: '3vh',
	    display: 'block',
	    zIndex: '10',
	    fontSize: '25px',
	    cursor: 'pointer',
	    lineHeight: '80px',
	    padding: '0.5rem',
	    borderRadius: '100%',
	    transition: '0.2s ease-out'
	},
	stix:
	{
		borderRadius: '3px',
	    height: '3px',
	    width: '30px',
	    backgroundColor: 'dimgray',
	    margin: '5px 0',
	    transition: '0.4s ease',
	},
}

export default props => 
{
	const [isHover, setisHover] = React.useState(false);
	const active = props.active;
	const animStyles =
	{
		stik1:
		{
			transform: active ? 'rotate(45deg) translateY(7px) translateX(5px)' : '',
		},
		stik2:
		{
			width: active ? '0' : '30px',
	        opacity: active ? '0' : '100',
		},
		stik3:
		{
			transform: active ? 'rotate(-45deg) translateY(-8px) translateX(5px)' : '',
		}
	}
	return (
		<div 
			style={{
				...styles.barsContainer, 
				backgroundColor: isHover ? 'rgb(10, 10, 10, 0.1)' : 'transparent',
				boxShadow: isHover ? '0 0 2px 15px rgb(10, 10, 10, 0.1)' : '',
			}}
			onClick={props.toggleFullScreen} 
			onMouseEnter={() => setisHover(true)}
			onMouseLeave={() => setisHover(false)}
		>
		    <div style={{...styles.stix, ...animStyles.stik1}} ></div>
	        <div style={{...styles.stix, ...animStyles.stik2}} ></div>
	        <div style={{...styles.stix, ...animStyles.stik3}} ></div>
		</div>
	);
}