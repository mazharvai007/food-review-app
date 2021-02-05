import React from 'react';
import { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import CardText from 'reactstrap/lib/CardText';
import CardTitle from 'reactstrap/lib/CardTitle';

class Comments extends Component {

	render() {
		const comments = this.props.comments.map((comment) => {
			return (
				<Card key={comment.id} className='mt-3 mb-3 p-3'>
					<CardText>{comment.comment}</CardText>
					<CardTitle>{comment.author}</CardTitle>
					<CardSubtitle>{comment.date}</CardSubtitle>
					<CardSubtitle>Rating: {comment.rating}</CardSubtitle>
				</Card>
			);
		});
		return (
			<div>
				<h4>Comments:</h4>
				{comments}
			</div>
		);
	}
}

export default Comments;
