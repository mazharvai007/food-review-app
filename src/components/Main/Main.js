import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes';
import Menu from '../Menu/Menu';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			selectedDish: null,
		};
	}

	/**
	 * Get the single dish with onClick event "onDishSelect"
	 * then render the dish detials using renderDish
	 * @param {*} dish
	 */

	onDishSelect(dishId) {
		this.setState({
			selectedDish: dishId,
		});
	}

	render() {
		return (
			<div>
				<Navbar dark color='primary'>
					<div className='container'>
						<NavbarBrand href='/'>Food Review</NavbarBrand>
					</div>
				</Navbar>
				<Menu
					dishes={this.state.dishes}
					onClick={(dishId) => this.onDishSelect(dishId)}
				/>
				<DishDetail
					dish={
						this.state.dishes.filter(
							(dish) => dish.id === this.state.selectedDish,
						)[0]
					}
				/>
			</div>
		);
	}
}

export default Main;
