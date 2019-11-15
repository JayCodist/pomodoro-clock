import React from 'react';
import { Slider, Switch, Col, Button } from 'antd';
import "antd/dist/antd.css";

const styles = 
{
	section: 
	{
		backgroundColor: 'white',
		overflow: 'hidden',
		color: 'black',
		transition: '0.4s ease-out',
		padding: '2rem 0 0',
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	inputCol: 
	{
		padding: '2rem 3rem',
	},
	labelTopic: 
	{
		fontSize: '25px',
		display: 'block',
	},
	labelInfo: 
	{
		fontSize: '17px',
		backgroundColor: 'rgb(240, 240, 240)',
		border: '1px solid dimgray',
		padding: '0.3rem',
		width: 'auto',
		margin: '1rem 0',
	},
	resetButton:
	{
		color: '#1890ff',
		backgroundColor: 'inherit',
		border: '1px solid #1890ff',
		transition: '0.4s ease-out',
		padding: '0.4rem 1rem',
		fontSize: '21px',
		margin: '0.5rem 3rem 0',
		outline: 'none',
		cursor: 'pointer',
		alignSelf: 'flex-start',
	},
	switchWrapper: 
	{
		display: 'flex',
		flexDirection: 'row',
		padding: '1rem 0',
	},
	switchLabel: 
	{
		marginRight: '1rem',
	}
}

export default props =>
{
	const { currentCategory, categories, updateCategories, isFullScreen, isMobile } = props;
	const [resetHover, setResetHover] = React.useState(false);
	const [isWorkChanged, setIsWorkChanged] = React.useState(false);
	const [isBreakChanged, setIsBreakChanged] = React.useState(false);
	const [workValue, setWorkValue] = React.useState(categories.work.initialValue / 60);
	const [breakValue, setBreakValue] = React.useState(categories.break.initialValue / 60);
	const [workInProgress, setWorkInProgress] = React.useState(currentCategory.name === "Work");

	React.useEffect(() =>
	{
		setWorkInProgress(currentCategory.name === "Work")
	}, [currentCategory.name])

	const applyChanges = e =>
	{
		if (e.target.name === 'work')
		{
			let newCategories = 
			{
				break: categories.break,
				work: 
				{
					name: 'Work',
					initialValue: workValue * 60
				}
			}
			updateCategories(newCategories, newCategories[currentCategory.name.toLowerCase()]);
			setIsWorkChanged(false);
		}
		else if (e.target.name === "break")
		{
			let newCategories = 
			{
				work: categories.work,
				break: 
				{
					name: 'Break',
					initialValue: breakValue * 60
				}
			}
			updateCategories(newCategories, newCategories[currentCategory.name.toLowerCase()]);
			setIsBreakChanged(false);
		}
	}

	const handleReset = e =>
	{
		setWorkValue(25);
		setBreakValue(5);
		setIsWorkChanged(false);
		setIsBreakChanged(false);
		let newCategories = 
		{
			work: 
			{
				name: 'Work',
				initialValue: 1500
			},
			break: 
			{
				name: 'Break',
				initialValue: 300
			}
		}
		updateCategories(newCategories, newCategories[currentCategory.name.toLowerCase()]);
	}

	const statelyStyling =
	{ 
		width: isMobile ? '100vw' : (isFullScreen ? '0%' : '40%'),
		position: isMobile ? 'fixed' : 'static',
		left: isFullScreen ? '100vw' : '0vw',
		top: '0',
		zIndex: isMobile ? '50' : '1',
	}
	return (
		<section id="settings" style={{...styles.section, ...statelyStyling}} >
			<Col style={styles.inputCol}>
				<label style={styles.labelTopic}>Work Session</label>
				<label style={styles.labelInfo}>
					{workValue} Minute{workValue > 1 ? 's' : ''}
				</label>
				<Slider 
					value={workValue}
					tipFormatter={value => `${value} minute${value > 1 ? 's' : ''}`}
					min={1}
					max={100}
					onChange={value => 
					{
						setWorkValue(value);
						setIsWorkChanged(true);
					}}
				/>
				<Button 
					type='primary'
					disabled={!isWorkChanged}
					onClick={applyChanges}
					name='work'
				>
				Apply
				</Button>
				<div style={styles.switchWrapper}>
					<label style={styles.switchLabel} htmlFor="work-in-progress">In Progress</label>
					<Switch 
						checked={workInProgress}
						id="work-in-progress"
						onChange={checked => 
						{
							setWorkInProgress(checked);
							updateCategories({
								work: categories.work,
								break: categories.break
							}, checked ? categories.work : categories.break)
						}}
					/>
				</div>
			</Col>
			
			<Col style={styles.inputCol}>
				<label style={styles.labelTopic}>Break Session</label>
				<label style={styles.labelInfo}>
					{breakValue} Minute{breakValue > 1 ? 's' : ''}
				</label>
				<Slider 
					value={breakValue}
					tipFormatter={value => `${value} minute${value > 1 ? 's' : ''}`}
					min={1}
					max={50}
					style={{width: '50%'}}
					onChange={value => 
					{
						setBreakValue(value);
						setIsBreakChanged(true);
					}}
				/>
				<Button 
					type='primary'
					disabled={!isBreakChanged}
					onClick={applyChanges}
					name='break'
				>
				Apply
				</Button>
				<div style={styles.switchWrapper}>
					<label style={styles.switchLabel} htmlFor="break-in-progress">In Progress</label>
					<Switch 
						checked={!workInProgress}
						id="break-in-progress"
						onChange={checked => 
						{
							setWorkInProgress(!checked);
							updateCategories({
								work: categories.work,
								break: categories.break
							}, checked ? categories.break : categories.work)
						}}
					/>
				</div>
			</Col>

			<button 
				style={{...styles.resetButton, boxShadow: resetHover ? '0 0 15px rgba(18, 90, 255, 0.5)' : ''}}
				onMouseEnter={() => setResetHover(true)}
				onMouseLeave={() => setResetHover(false)}
				onClick={handleReset}
			>
				Reset to Defaults
			</button>
		</section>);
}