import { useState } from "react"
import postTest from "../../business/postTest";

export default function Form() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	function handleUsernameChange(e) {
		setUsername(e.target.value);
	}

	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	async function submitForm() {
		try {
			const token = await postTest(username, password);

			setError('');
			setUsername('');
			setPassword('');
		} catch(e) {
			setError(e.message);
		}
	}

	return (
		<div>
			<span>{error}</span>
			<input type="text" placeholder="username"
				value={username} onChange={handleUsernameChange} />
			<input type="password" placeholder="password"
				value={password} onChange={handlePasswordChange} />	
			<input type="button" value="Envoyer" onClick={submitForm} />
		</div>
	)
}