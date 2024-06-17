import { Link } from 'react-router-dom';

export default function Header({ count }) {
	return (
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/contact">Contact</Link></li>
			<li>Counter: {count}</li>
		</ul>
	);
}
