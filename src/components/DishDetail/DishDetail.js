import React from 'react';
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	// CardSubtitle,
	Breadcrumb,
	BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Comments from './Comments';

function RenderDish(dish) {
	return (
		<div className='mt-3 mb-3 col-12 col-md-6'>
			<Card>
				<CardImg top width='100%' src={'../' + dish.dish.image} alt={dish.dish.name} />
				<CardBody>
					<CardTitle>{dish.dish.name}</CardTitle>
					<CardText>{dish.dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

// function RenderComments({ comments }) {
// 	if (comments != null) {
// 		comments.map((comment) => {
// 			return (
// 				<div className='mt-3 mb-3 col-12 col-md-6'>
// 					<Card key={comment.id} className='mt-3 mb-3 p-3'>
// 						<CardText>{comment.comment}</CardText>
// 						<CardTitle>{comment.author}</CardTitle>
// 						<CardSubtitle>
// 							{new Intl.DateTimeFormat('en-US', {
// 								year: 'numeric',
// 								month: 'short',
// 								day: 'numeric',
// 							}).format(new Date(Date.parse(comment.date)))}
// 						</CardSubtitle>
// 						<CardSubtitle>Rating: {comment.rating}</CardSubtitle>
// 					</Card>
// 				</div>
// 			);
// 		});
// 	}
// }

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
				<div className='row'>
					<RenderDish dish={props.dish} />
					{/* <RenderComments comments={props.comments} /> */}
					<Comments comments={props.comments} />
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default DishDetail;
