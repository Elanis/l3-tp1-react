import { useState } from 'react';

export default function Home() {
	const [count, setCount] = useState(0);

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

			<input type="button" onClick={() => {
				setCount((currentCount) => currentCount + 1);
			}} value="Cliquez moi!" />
			<span>Vous avez cliqué {count} fois.</span>
		</>
	);
}