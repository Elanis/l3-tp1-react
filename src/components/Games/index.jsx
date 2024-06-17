import useGames from '../../hooks/useGames.js';

export default function Game() {
	const games = useGames();

	if(games.length === 0) {
		return null;
	}

	return (
		<ul>
			{games.map(g => <li>{g.name}</li>)}
		</ul>
	);
}