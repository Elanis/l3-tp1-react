import { useEffect, useState } from "react";

async function getGames() {
	const res = await fetch('https://m1.dysnomia.studio/api/games/top');

	//if(res.status === 200) {
	if(res.ok) {
		return await res.json();
	}

	// Note: vous pouvez 'await res.text()' pour recuperer le body de l'erreur

	throw new Error('Erreur innatendue lors de l\'appel !');
}

export default function useGames() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		async function getData() {
			setGames(await getGames());
		}

		getData();
	}, []); // Variables à surveiller dans []

	return games;
}