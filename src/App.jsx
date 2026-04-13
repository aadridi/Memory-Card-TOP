import './App.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import { useState, useEffect } from 'react';

function App() {
	const initialCombination = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const [combination, setCombination] = useState(initialCombination);

	function shuffleArray(array) {
		/* Algorithme de Fisher-Yates to shuffle an Array */
		const newArray = [...array];

		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			// swap
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}

		return newArray;
	}

	const [imagesClicked, setImagesClicked] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	function handleRound(e) {
		const target = e.target.closest('img');

		if (!target) return; // clic hors image

		const id = Number(target.dataset.id);
		if (imagesClicked.includes(id)) {
			console.log('You already clicked on this image!');
			if (currentScore > bestScore) {
				setBestScore(currentScore);
			}
			setCurrentScore(0);
			setImagesClicked([]);
			setCombination(initialCombination);
		} else {
			console.log('You clicked on: ' + id);
			setImagesClicked((prev) => [...prev, id]);
			setCurrentScore((score) => score + 1);
			setCombination((prev) => shuffleArray(prev));
		}
	}

	return (
		<div className='app-container'>
			<h1 className='app-title'>Pokemon Memory Game</h1>
			<Header currentScore={currentScore} bestScore={bestScore} />
			<Gallery className='app-gallery' combination={combination} onGalleryClick={handleRound} />
			<Footer className='app-footer' />
		</div>
	);
}

export default App;
