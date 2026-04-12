import Image from './Image';

export default function Gallery({ combination, onGalleryClick }) {
	return (
		<div className='app-gallery' onClick={onGalleryClick}>
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'} imgAlt={'Herbizarre'} style={{ order: combination[0] }} dataId={0} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'} imgAlt={'Reptincel'} style={{ order: combination[1] }} dataId={1} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'} imgAlt={'Carabaffe'} style={{ order: combination[2] }} dataId={2} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'} imgAlt={'Papillusion'} style={{ order: combination[3] }} dataId={3} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png'} imgAlt={'Roucarnage'} style={{ order: combination[4] }} dataId={4} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'} imgAlt={'Raichu'} style={{ order: combination[5] }} dataId={5} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png'} imgAlt={'Flagadoss'} style={{ order: combination[6] }} dataId={6} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png'} imgAlt={'Dracolosse'} style={{ order: combination[7] }} dataId={7} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png'} imgAlt={'Ronflex'} style={{ order: combination[8] }} dataId={8} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png'} imgAlt={'Insécateur'} style={{ order: combination[9] }} dataId={9} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png'} imgAlt={'Lippoutou'} style={{ order: combination[10] }} dataId={10} />
			<Image imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png'} imgAlt={'Magmar'} style={{ order: combination[11] }} dataId={11} />
		</div>
	);
}
