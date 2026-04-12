export default function Header({ currentScore }) {
	return (
		<div className='app-header'>
			<h3>Get points by clicking on an image but don't click on any more than once!</h3>
			<div className='app-header-score'>
				<p>Current Score : {currentScore}</p>
				<p>Best Score : </p>
			</div>
		</div>
	);
}
