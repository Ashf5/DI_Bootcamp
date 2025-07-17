
import { useState } from "react";
import './App.css'

function App() {
	let [sum, updateSum] = useState(null);

	function add(e) {
		e.preventDefault();
		let num1 = e.target.form.numOne.value;
		let num2 = e.target.form.numTwo.value;
		let addedNumbers = Number(num1) + Number(num2);
		updateSum(addedNumbers);
		console.log(sum)
	}


	return (
		<div className='mainDiv'>
			<h1>Adding Two Numbers</h1>
			<form>
				<input type='number' name='numOne'/>
				<input type='number' name='numTwo'/>
				<br />
				<input type='submit' value='Add Them!' onClick={e => add(e)}/>
			</form>
			<h1>{sum}</h1>
		</div>
	);
}

export default App;
