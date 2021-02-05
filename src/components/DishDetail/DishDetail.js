import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Comments from './Comments';

class DishDetail extends Component {
	renderDish(dish) {
		return (
			<div className='container'>
				<div className='row'>
					<div className='mt-3 mb-3 col-12 col-md-6'>
						<Card>
							<CardImg
								width='100%'
								src={dish.image}
								alt={dish.name}
							/>
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className='mt-3 mb-3 col-12 col-md-6'>
						<Comments comments={this.props.dish.comments} />
					</div>
				</div>
			</div>
		);
	}

	render() {
		if (this.props.dish != null) {
			return <div>{this.renderDish(this.props.dish)}</div>;
		} else {
			return <div></div>;
		}
	}
}

export default DishDetail;
