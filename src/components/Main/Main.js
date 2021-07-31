import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import Home from '../Home/Home';
import DishDetail from '../DishDetail/DishDetail';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import About from '../About/About';
import {
	postComment,
	fetchComments,
	fetchDishes,
	fetchPromotions,
} from '../../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

const mapDispatchToProps = (dispatch) => ({
	postComment: (dishId, rating, author, comment) =>
		dispatch(postComment(dishId, rating, author, comment)),
	fetchDishes: () => {
		dispatch(fetchDishes());
	},
	resetFeedbackForm: () => {
		dispatch(actions.reset('feedback'));
	},
	fetchComments: () => {
		dispatch(fetchComments());
	},
	fetchPromotions: () => {
		dispatch(fetchPromotions());
	},
});

class Main extends Component {
	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromotions();
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={
						this.props.dishes.dishes.filter(
							(dish) => dish.featured
						)[0]
					}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrorMessage={this.props.dishes.errorMessage}
					promotion={
						this.props.promotions.promotions.filter(
							(promo) => promo.featured
						)[0]
					}
					promotionsLoading={this.props.promotions.isLoading}
					promotionsErrorMessage={this.props.promotions.errorMessage}
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
						this.props.dishes.dishes.filter(
							(dish) =>
								dish.id === parseInt(match.params.dishId, 10)
						)[0]
					}
					isLoading={this.props.dishes.isLoading}
					errorMessage={this.props.dishes.errorMessage}
					comments={this.props.comments.comments.filter(
						(comment) =>
							comment.dishId === parseInt(match.params.dishId, 10)
					)}
					commentsErrorMessage={this.props.dishes.errorMessage}
					postComment={this.props.postComment}
				/>
			);
		};

		return (
			<>
				<Header />
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames='page'
						in={true}
						timeout={{ enter: 300, exit: 500 }}>
						<Switch location={this.props.location}>
							<Route path='/home' component={HomePage} />
							<Route path='/about' component={AboutPage} />
							<Route
								exact
								path='/menu'
								component={() => (
									<Menu dishes={this.props.dishes} />
								)}
							/>
							<Route
								path='/menu/:dishId'
								component={DishWithId}
							/>
							<Route
								exact
								path='/contact'
								component={() => (
									<Contact
										resetFeedbackForm={
											this.props.resetFeedbackForm
										}
									/>
								)}
							/>
							<Redirect to='/home' />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
