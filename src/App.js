import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Main />
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
