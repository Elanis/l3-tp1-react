export default function Home() {
	const data = [
		'Lorem',
		'Ipsum',
		'Dolor'
	];

	return (
		<>
			<div className="app">Bonjour !</div>
			<ul>
				{data.map((element) => <li key={element}>{element}</li>)}
			</ul>
		</>
	);
}