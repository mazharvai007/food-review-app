import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Comments from './Comments';

class DishDetails extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='row'>
				<div className='mt-3 mb-3 col-12 col-md-6'>
					<Card>
						<CardImg
							width='100%'
							src={this.props.details.image}
							alt={this.props.details.name}
						/>
						<CardBody>
							<CardTitle>{this.props.details.name}</CardTitle>
							<CardText>
								{this.props.details.description}
							</CardText>
						</CardBody>
					</Card>
				</div>
				<div className='mt-3 mb-3 col-12 col-md-6'>
					<Comments comments={this.props.details.comments} />
				</div>
			</div>
		);
	}
}

export default DishDetails;
