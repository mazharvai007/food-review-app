import React from 'react';
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	Breadcrumb,
	BreadcrumbItem,
} from 'reactstrap';
import Comments from './Comments';
import { Link } from 'react-router-dom';

function RenderDish(dish) {
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
					<Comments comments={dish.comments} />
				</div>
			</div>
		</div>
	);
}

const DishDetail = (props) => {
	if (props.dish != null) {
		return (
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/menu'>Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>
							{props.dish.name}
						</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className='row'>{RenderDish(props.dish)}</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default DishDetail;
