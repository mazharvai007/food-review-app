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
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { Loading } from '../Loading/Loading';
import { baseURL } from '../../shared/baseURL';
import { FadeTransform } from 'react-animation-components';

function RenderDish(dish) {
	return (
		<div className='mt-3 mb-3 col-12 col-md-6'>
			<FadeTransform
				in
				transformProps={{
					exitTransform: 'scale(0.5) translateY(-50%)',
				}}>
				<Card>
					<CardImg
						top
						width='100%'
						src={baseURL + dish.dish.image}
						alt={dish.dish.name}
					/>
					<CardBody>
						<CardTitle>{dish.dish.name}</CardTitle>
						<CardText>{dish.dish.description}</CardText>
					</CardBody>
				</Card>
			</FadeTransform>
		</div>
	);
}

const DishDetail = (props) => {
	if (props.isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (props.errorMessage) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{props.errorMessage}</h4>
				</div>
			</div>
		);
	} else if (props.dish != null) {
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
				<div className='row'>
					<RenderDish dish={props.dish} />
					<Comments
						comments={props.comments}
						postComment={props.postComment}
						dishId={props.dish.id}
					/>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default DishDetail;
