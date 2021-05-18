import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import {
	Switch,
	Route,
	Link,
	useLocation
} from 'react-router-dom'
import { useEffect } from 'react'

function App() {
	let { pathname } = useLocation()
	useEffect(() => {
		if ( pathname !== '/login' ) {
			console.log('Validate user. If not valid, send to login')
		}
	}, [ pathname ])
	return (
		<div className="min-h-screen">
			{
				pathname !== '/login' && (
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				)
			}
			
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</div>
	)
}

export default App
