import { useEffect, useState } from 'react';
import './App.css';


const App = () => {
	const [userChoice, setUserChoice] = useState('batu')
	const [computerChoice, setComputerChoice] = useState('batu')
	const [userPoints, setUserPoints] = useState(0)
	const [computerPoints, setComputerPoints] = useState(0)
	const [turnResult, setTurnResult] = useState(null)
	const [result, setResult] = useState('Siapa juaranya?')
	const [gameOver, setGameOver] = useState(false)
	const choices = ['batu', 'kertas', 'gunting']

	const handleClick = (value) => {
		setUserChoice(value)
		generateComputerChoice()
	}

	const generateComputerChoice = () => {
		const randomChoice = choices[Math.floor(Math.random() * choices.length)]
		setComputerChoice(randomChoice)
	}

	const reset = () => {
		window.location.reload()
	}

	useEffect(() => {
		const comboMoves = userChoice + computerChoice
		if (userPoints <= 4 && computerPoints <= 4) {
			if (comboMoves === 'guntingkertas' || comboMoves === 'batugunting' || comboMoves === 'kertasbatu') {
				// userPoints.current += 1
				const updatedUserPoints = userPoints + 1
				setUserPoints(updatedUserPoints)
				setTurnResult('User dapat point!')
				if (updatedUserPoints === 5) {
					setResult('User Menang')
					const gameOff = true
					setGameOver(gameOff)
				}
			}

			if (comboMoves === 'kertasgunting' || comboMoves === 'guntingbatu' || comboMoves === 'batukertas') {
				// computerPoints.current += 1
				const updatedComputerPoints = computerPoints + 1
				setComputerPoints(updatedComputerPoints)
				setTurnResult('Komputer dapat point!')
				if (updatedComputerPoints === 5) {
					setResult('Komputer Menang')
					const gameOff = true
					setGameOver(gameOff)
				}
			}

			if (comboMoves === 'kertaskertas' || comboMoves === 'batubatu' || comboMoves === 'guntinggunting') {
				setTurnResult('Draw!')
			}
		}
	}, [computerChoice, userChoice])

	return (
		<div className="App">
			<h1 className='heading'>Batu Kertas Gunting</h1>
			<div className='score'>
				<h1>User Points: {userPoints}</h1>
				<h1>Komputer Points: {computerPoints}</h1>
			</div>

			<div className='choice'>
				<div className='choice-user'>
					<h1 className='userHand'>{userChoice}</h1>
				</div>
				<div className='choice-computer'>
					<h1 className='computerHand'>{computerChoice}</h1>

				</div>
			</div>

			<div className='button-div'>
				{choices.map((choice, index) =>
					<button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
						{choice}
					</button>
				)}
			</div>

			<div className='result'>
				<h1>Hasil: {turnResult}</h1>
				<h1>Pemenang: {result}</h1>
			</div>

			<div className='button-div'>
				{gameOver &&
					<button className='button' onClick={() => reset()}>Mulai lagi?</button>
				}
			</div>
		</div>
	)
}

export default App
