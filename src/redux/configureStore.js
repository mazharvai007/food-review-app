import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

console.log(initialState);

export const ConfigureStore = () => {
	const store = createStore(Reducer, initialState);
	return store;
};
