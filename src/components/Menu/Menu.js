import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
	return (
		<Card onClick={() => onClick(dish.id)}>
			<CardImg width='100%' src={dish.image} alt={dish.name} />
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
		</Card>
	);
}

const Menu = (props) => {
	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className='mb-3 mt-3 col-12 col-md-6'>
				<RenderMenuItem dish={dish} onClick={props.onClick} />
			</div>
		);
	});

	return (
		<div className='container'>
			<div className='row'>{menu}</div>
		</div>
	);
};

/**
 * Do not forget to export the component
 */
export default Menu;
