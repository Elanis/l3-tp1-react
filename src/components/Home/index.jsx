import { useEffect, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useCounterSetter from '../../hooks/useCounterSetter';

export default function Home() {
	const count = useCounter();
	const setCount = useCounterSetter();

	const [count2, setCount2] = useState(0);

	useEffect(() => {
		document.title = `Clics: ${count}`;
	}, [count]);

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
			<span>(1) Vous avez cliqué {count} fois.</span>

			<input type="button" onClick={() => {
				setCount2((currentCount) => currentCount + 1);
			}} value="Cliquez moi!" />
			<span>(2) Vous avez cliqué {count2} fois.</span>
		</>
	);
}