export default async function postTest(username, password) {
	// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#fournir_des_options_à_la_requête
	const res = await fetch('https://m1.dysnomia.studio/api/Users/auth', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: username,
			password: password
		})
	});

	if(res.status !== 200) {
		throw new Error('Erreur lors de l\'auth');
	}

	const text = await res.text();
	//const jsObject = await res.json();
	console.log(text);

	return text;
}