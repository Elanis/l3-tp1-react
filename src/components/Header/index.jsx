import { Link } from 'react-router-dom';

import useCounter from '../../hooks/useCounter';

export default function Header() {
	const count = useCounter();

	return (
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/contact">Contact</Link></li>
			<li>Counter: {count}</li>
		</ul>
	);
}
