import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Comments from './Comments';

function RenderDish({ dish }) {
	return (
		<div className='row'>
			<div className='mt-3 mb-3 col-12 col-md-6'>
				<Card>
					<CardImg width='100%' src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
			<div className='mt-3 mb-3 col-12 col-md-6'>
				<Comments comments={dish.comments} />
			</div>
		</div>
	);
}

const DishDetail = (props) => {
	if (props.dish != null) {
		return (
			<div className='container'>
				<RenderDish dish={props.dish} />
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default DishDetail;
