import { GlobalStyles, StyledFooter } from './components/GlobalStyles'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className='App'>
				<GlobalStyles />
				<div className='nav'>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
				<Routes>
					<Route exact path='/' element={<LandingPage />}></Route>
					<Route exact path='/about' element={<AboutPage />}></Route>
					<Route exact path='/contact' element={<ContactPage />}></Route>
				</Routes>
			</div>
			<StyledFooter />
		</Router>
	)
}

export default App
