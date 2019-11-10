import React, { useEffect, useRef } from 'react';

export default (callback, delay) =>
{
	const savedCallback = useRef();

	// Remember latest callback
	useEffect(() => 
	{
		savedCallback.current = callback 
	}, [callback]);

	// Set up the interval for the callback, using the delay
	useEffect(() =>
	{
		const tick = () => savedCallback.current();

		if (delay !== null)
		{
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}

	}, [delay]);
}