import { Header } from './components/Header/Header.jsx'
import { Main } from './pages/Main/Main.jsx'
import NewsBanner from './components/NewsBanner/NewsBanner.jsx'

function App() {
	return (
		<>
			<Header />
			<div className={'container'}>
				<Main />
			</div>
		</>
	)
}

export default App
