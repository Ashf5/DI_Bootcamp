import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Choice from './Choice.js';

function App() {
	const [languages, setLanguages] = useState([
		{ name: "Php", votes: 0 },
		{ name: "Python", votes: 0 },
		{ name: "JavaSript", votes: 0 },
		{ name: "Java", votes: 0 }
	])

	const handleVote = (name) => {
		setLanguages(languages.map(language => {
			return language.name === name ? {...language, votes: language.votes + 1} : language 
		}))
	}

	return (
		<div>
			<h1>Vote your language</h1>
			{languages.map(language => <Choice language={language} onVote={handleVote}/>)}
		</div>
	);
}

export default App;
