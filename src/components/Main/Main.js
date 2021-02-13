import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import DishDetail from '../DishDetail/DishDetails';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import About from '../About/About';

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

class Main extends Component {
	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promotion={
						this.props.promotions.filter(
							(promo) => promo.featured
						)[0]
					}
					leader={
						this.props.leaders.filter(
							(leader) => leader.featured
						)[0]
					}
				/>
			);
		};

		const AboutPage = () => {
			return <About leaders={this.props.leaders} />;
		};

		const DishWithId = ({ match }) => {
			return (
				<DishDetail
					dish={
						this.props.dishes.filter(
							(dish) =>
								dish.id === parseInt(match.params.dishId, 10)
						)[0]
					}
					comments={this.props.comments.filter(
						(comment) =>
							comment.dishId === parseInt(match.params.dishId, 10)
					)}
				/>
			);
		};

		return (
			<>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route path='/about' component={AboutPage} />
					<Route
						exact
						path='/menu'
						component={() => <Menu dishes={this.props.dishes} />}
					/>
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/contact' component={Contact} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</>
		);
	}
}

export default withRouter(connect(mapStateToProps)(Main));
