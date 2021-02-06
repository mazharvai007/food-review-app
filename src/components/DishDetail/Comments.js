import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import CardText from 'reactstrap/lib/CardText';
import CardTitle from 'reactstrap/lib/CardTitle';

function RenderComments({ comments }) {
	const getComment = comments.map((comment) => {
		return (
			<Card key={comment.id} className='mt-3 mb-3 p-3'>
				<CardText>{comment.comment}</CardText>
				<CardTitle>{comment.author}</CardTitle>
				<CardSubtitle>
					{new Intl.DateTimeFormat('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					}).format(new Date(Date.parse(comment.date)))}
				</CardSubtitle>
				<CardSubtitle>Rating: {comment.rating}</CardSubtitle>
			</Card>
		);
	});
	return getComment;
}

const Comments = (props) => {
	return (
		<div>
			<h4>Comments:</h4>
			<RenderComments comments={props.comments} />
		</div>
	);
};

export default Comments;
