import View from './view.jsx';

import useCounter from '../../hooks/useCounter';

export default function Header() {
	const count = useCounter();

	return (
		<View count={count} />
	);
}