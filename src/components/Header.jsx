export default function Header() {
	return (
		<div className='app-header'>
			<p>Get points by clicking on an image but don't click on any more than once!</p>
			<div className='app-header-score'>
				<p>Current Score: </p>
				<p>Best Score: </p>
			</div>
		</div>
	);
}
