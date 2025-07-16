
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ErrorBoundary from './ErrorBoundary';
import PostList from './PostList';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3'

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar>
					<Nav>
						<ErrorBoundary>
							<Nav.Link as={NavLink} to='/'>Home</Nav.Link>
						</ErrorBoundary>
						<ErrorBoundary>
							<Nav.Link as={NavLink} to='/profile'>Profile</Nav.Link>
						</ErrorBoundary>
						<ErrorBoundary>
							<Nav.Link as={NavLink} to='/shop'>Shop</Nav.Link>
						</ErrorBoundary>



					</Nav>
				</Navbar>

				<Routes>
					<Route exact path='/' element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
					<Route path='/profile' element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
					<Route path='/shop' element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
				</Routes>
				<PostList />
				<Example1 />
				<Example2 />
				<Example3 />
				<button onClick={postData}>Post Data</button>
			</div>
		</BrowserRouter>
	);

}

async function postData() {
	const body = JSON.stringify({
		key1: 'myusername',
		email: 'mymail@gmail.com',
		name: 'Isaac',
		lastname: 'Doe',
		age: 27
	});
	const url = "https://webhook.site/71e581f2-26fc-4a8e-a88b-bd91bdc83c33";

	let response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body
	});
	let jsonData = await response.json();
	console.log(jsonData);
}

function HomeScreen() {
	return <div><h1>Home</h1></div>
}

function ProfileScreen() {
	return <div><h1>Profile Screen</h1></div>
}

function ShopScreen() {
	throw new Error()
	return <div></div>
}

export default App;
