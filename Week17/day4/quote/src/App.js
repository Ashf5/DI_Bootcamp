
import './App.css';
import QuoteCard from './QuoteCard';
import quotes from './quotes.js';
import { useState } from 'react';

function App() {
	const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'gray',
  'cyan',
  'magenta',
  'lime',
  'indigo',
  'teal',
  'maroon',
  'navy',
  'gold',
  'silver'
];
	let [state, setQuote] = useState({...quotes[0], color: colors[0]});

	


	function handleNext(e, currentQuote) {
		let newQuote, random;
		do {
			random = Math.floor(Math.random() * quotes.length);
			newQuote = quotes[random].quote;
		} while(newQuote === currentQuote);
		let color = colors[Math.floor(Math.random() * colors.length)];
		setQuote({...quotes[random], color});
		
	}

	return (
		<div className="App">
			<QuoteCard quote={state.quote} author={state.author} handleNext={handleNext} color={state.color}/>
		</div>
	);
}

export default App;
