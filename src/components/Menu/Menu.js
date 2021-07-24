import React, { Component } from 'react';
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { baseURL } from '../../shared/baseURL';

class Menu extends Component {
	/**
	 * For the Menu component I defined the constractor
	 * It gets parameter called 'props'
	 * For the constractor 'props' I need to supply
	 * the super class with props and it is required
	 * whenever you define a class component
	 */

	/**
	 * A class component of REACT I should implement a method
	 * called render. It will render view to the corresponding component
	 */

	render() {
		function RenderMenuItem({ dish, onClick }) {
			return (
				<Card>
					<Link to={`/menu/${dish.id}`}>
						<CardImg
							width='100%'
							src={baseURL + dish.image}
							alt={dish.name}
						/>
						<CardImgOverlay>
							<CardTitle
								className='text-white pt-2 pb-2 pl-3 pr-3'
								style={{
									backgroundColor: 'rgba(0,0,0,0.7)',
									display: 'inline',
								}}>
								{dish.name}
							</CardTitle>
						</CardImgOverlay>
					</Link>
				</Card>
			);
		}

		const menu = this.props.dishes.dishes.map((dish) => {
			return (
				<div key={dish.id} className='mb-3 mt-3 col-12 col-md-6'>
					<RenderMenuItem dish={dish} />
				</div>
			);
		});

		if (this.props.dishes.isLoading) {
			return (
				<div className='container'>
					<div className='row'>
						<Loading />
					</div>
				</div>
			);
		} else if (this.props.dishes.errorMessage) {
			return (
				<div className='container'>
					<div className='row'>
						<h4>{this.props.dishes.errorMessage}</h4>
					</div>
				</div>
			);
		} else {
			return (
				<div className='container'>
					<div className='row'>
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to='/home'>Home</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>Menu</BreadcrumbItem>
						</Breadcrumb>
						<div className='col-12'>
							<h3>Menu</h3>
							<hr />
						</div>
					</div>
					<div className='row'>{menu}</div>
				</div>
			);
		}
	}
}

/**
 * Do not forget to export the component
 */
export default Menu;
