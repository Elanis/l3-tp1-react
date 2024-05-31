import { useContext } from 'react';
 
import { CounterContext } from '../contexts/CounterContext';

export default function useCounter() {
	const { count } = useContext(CounterContext);

	return count;
}