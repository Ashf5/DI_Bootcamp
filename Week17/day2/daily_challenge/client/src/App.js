import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	let [message, setMessage] = useState({text: '', input: ''});
	useEffect(() => {
		const getData = async () => {
			let response = await fetch('http://localhost:5000/api/hello');
			let text = await response.text();
			setMessage(prevState => ({...prevState, text}));
		}
		getData();
	}, [])


	async function handleSubmit(e) {
		e.preventDefault();
		let response = await fetch('http://localhost:5000/api/world', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body : JSON.stringify({
				input: e.target.form.inputText.value
			})
		});
		let text = await response.text();
		setMessage(prevState => ({...prevState, input: text}));
	}

	return (
		<div className="App">
			<h2>{message.text}</h2>
			<form>
				<input type='text' name='inputText' />
				<input type='submit' onClick={(e) => handleSubmit(e)}/>
			</form>
			<h2>{message.input}</h2>
		</div>
	);
}

export default App;
