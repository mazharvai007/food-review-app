import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
		};
	}

	render() {
		const HomePage = () => {
			return(
				<Home />
			);
		}
		return (
			<>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route
						exact
						path='/menu'
						component={() => <Menu dishes={this.state.dishes} />}
					/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</>
		);
	}
}

export default Main;
