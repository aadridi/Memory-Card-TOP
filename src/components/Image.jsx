export default function Image({ imgSrc, imgAlt, style, dataId }) {
	return (
		<figure style={style}>
			<img src={imgSrc} alt={imgAlt} data-id={dataId}/>
			<figcaption>{imgAlt}</figcaption>
		</figure>
	);
}
