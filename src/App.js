import './App.css';
import React from "react"

function App() {

	const TIME_LENGTH = 10

	const [text,setText] = React.useState("")
	const [timer,setTimer] = React.useState(TIME_LENGTH)
	const [running,setRunning] = React.useState(false)
	const [wordCount,setWordCount] = React.useState(0)
	const inputArea = React.useRef(null)



	React.useEffect(() => {

		if (running && timer > 0){
			setTimeout(() => {
				
				setTimer(prevState => prevState -1)
				
			},1000)
		}else if(timer === 0) {
			endGame()
		}
	},[timer,running])
	

	function updateText(event){
		setText(event.target.value)
	}

	function startGame(){
		setRunning(true)
		setTimer(TIME_LENGTH)
		setText("")
		inputArea.current.disabled = false
		inputArea.current.focus()
	}

	function endGame(){
		setRunning(false)
		setWordCount(getWordCount())
	}

	function getWordCount() {
		return text.split(' ')
		  .filter(function(n) { return n !== '' })
		  .length;
   }


	return (
		<div className="App">
			<div>
				<h1> Typing game </h1>      
				<textarea 
					ref = {inputArea}
					value={text}
					onChange={updateText}
					disabled = {!running}

				/>				
				<h4> Time reamaining:{timer} </h4>
				<button 
					onClick = {startGame} 
					disabled = {running}
				> Start game </button>	

				<h1>Word count: {wordCount}</h1>
			
			</div>
		</div>
	);
}

export default App;



// Speed typing game part 6