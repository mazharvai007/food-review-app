import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes_back';
import { COMMENTS } from '../../shared/comments';
import { PROMOTIONS } from '../../shared/promotions';
import { LEADERS } from '../../shared/leaders';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS,
		};
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={
						this.state.promotions.filter(
							(promo) => promo.featured
						)[0]
					}
					leader={
						this.state.leaders.filter(
							(leader) => leader.featured
						)[0]
					}
				/>
			);
		};
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
					<Route exact path='/contact' component={Contact} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</>
		);
	}
}

export default Main;
