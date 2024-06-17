import { createContext, useEffect, useState } from 'react';

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
	// Ceci
	const [count, setCount] = useState(parseInt(localStorage.count || '0'));
	// ==
	// const contenu = useState(0);
	// const count = contenu[0];
	// const setCount = contenu[1];

	useEffect(() => {
		localStorage.count = count;
		// === localStorage.setItem('count', count);
	}, [count]);

	return (
		<CounterContext.Provider value={{ count, setCount }}>
			{children}
		</CounterContext.Provider>
	)
}
