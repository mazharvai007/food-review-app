import React, { Component } from 'react';
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from 'reactstrap';

class Menu extends Component {
	/**
	 * For the Menu component I defined the constractor
	 * It gets parameter called 'props'
	 * For the constractor 'props' I need to supply
	 * the super class with props and it is required
	 * whenever you define a class component
	 *
	 * Define state here
	 * @param {*} props
	 */

	constructor(props) {
		super(props);

		this.state = {
			selectedDish: null,
		};
	}
	
	/**
	 * Get the single dish with onClick event "onDishSelect"
	 * then render the dish detials using renderDish
	 * @param {*} dish 
	 */

	onDishSelect(dish) {
		this.setState({
			selectedDish: dish,
		});
	}

	renderDish(dish) {
		if (dish != null) {
			return (
				<Card>
					<CardImg width='100%' src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return <div></div>;
		}
	}

	/**
	 * A class component of REACT I should implement a method
	 * called render. It will render view to the corresponding component
	 */

	render() {
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className='m-1 col-12 col-md-5'>
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg
							width='100%'
							src={dish.image}
							alt={dish.name}
						/>
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		return (
			<div className='container'>
				<div className='row'>{menu}</div>
				<div className='row'>
					{this.renderDish(this.state.selectedDish)}
				</div>
			</div>
		);
	}
}

/**
 * Do not forget to export the component
 */
export default Menu;
