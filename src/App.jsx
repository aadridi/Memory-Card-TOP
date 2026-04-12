import './App.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import { useState, useEffect } from 'react';

function App() {
	/*
	1. Gérer l'ordre des images à chaque clic/re-render
	2. Gérer un round et victoire/défaite (currentScore)
	3. Gérer un game (bestScore)
	*/

	const initialCombination = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const [combination, setCombination] = useState(initialCombination);

	function shuffleArray(array) {
		/* Algorithme de Fisher-Yates to shuffle an Array*/
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

	function handleRound(e) {
		const target = e.target.closest('img');

		if (!target) return; // clic hors image

		const id = target.dataset.id;
		if (id === 1) {
			console.log('Les images:' + imagesClicked);
		} else {
			console.log('You clicked on: ' + id);
			setImagesClicked((prev) => [...prev, id]);
			setCurrentScore((score) => score + 1);
			setCombination((prev) => shuffleArray(prev));
			console.log(imagesClicked);
		}
	}

	return (
		<div className='app-container'>
			<h1 className='app-title'>Pokemon Memory Game</h1>
			<Header currentScore={currentScore} />
			<Gallery className='app-gallery' combination={combination} onGalleryClick={handleRound} />
			<Footer className='app-footer' />
			<p>Order: {combination.join(', ')}</p>
			<p>You clicked on : {imagesClicked.join(', ')}</p>
			<button onClick={() => setCombination((prev) => shuffleArray(prev))}>Shuffle Combination</button>
		</div>
	);
}

export default App;
