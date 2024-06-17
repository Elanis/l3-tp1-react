import { useContext } from 'react';
 
import { CounterContext } from '../contexts/CounterContext';

export default function useCounterSetter() {
	// Ceci
	const { setCount } = useContext(CounterContext);
	// ==
	// const contenu = useContext(CounterContext);
	// const setCount = contenu.setCount;

	return setCount;
}