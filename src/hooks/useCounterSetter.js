import { useContext } from 'react';
 
import { CounterContext } from '../contexts/CounterContext';

export default function useCounterSetter() {
	const { setCount } = useContext(CounterContext);

	return setCount;
}