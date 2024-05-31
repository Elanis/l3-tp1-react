export default function Home() {
	const data = [
		'Lorem',
		'Ipsum',
		'Dolor'
	];

	const components = [];
	for(const element of data) {
		components.push(
			<li>{element}</li>
		);
	}

	return (
		<>
			<div className="app">Bonjour !</div>
			<ul>
				{components}
			</ul>
		</>
	);
}