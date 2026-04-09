import './App.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

function App() {
	return (
		<div className='app-container'>
			<h1 className="app-title">Pokemon Memory Game</h1>
			<Header />
			<Gallery className='app-gallery' />
			<Footer className='app-footer' />
		</div>
	);
}

export default App;
