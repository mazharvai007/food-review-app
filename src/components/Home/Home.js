import React from 'react';
import {
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardBody,
	CardSubtitle,
} from 'reactstrap';
import { baseURL } from '../../shared/baseURL';
import { Loading } from '../Loading/Loading';

function RenderCard({ item, isLoading, errorMessage }) {
	if (isLoading) {
		return <Loading />;
	} else if (errorMessage) {
		return <h4>{errorMessage}</h4>;
	} else {
		return (
			<Card>
				<CardImg src={baseURL + item.image} alt={item.name} />
				<CardBody>
					<CardTitle>{item.name}</CardTitle>
					{item.designation ? (
						<CardSubtitle>{item.designation}</CardSubtitle>
					) : null}
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default function Home(props) {
	return (
		<div className='container'>
			<div className='row align-items-start'>
				<div className='col-12 col-md md-1'>
					<RenderCard
						item={props.dish}
						isLoading={props.dishesLoading}
						errorMessage={props.dishesErrorMessage}
					/>
				</div>
				<div className='col-12 col-md md-1'>
					<RenderCard
						item={props.promotion}
						isLoading={props.promotionsLoading}
						errorMessage={props.promotionsErrorMessage}
					/>
				</div>
				<div className='col-12 col-md md-1'>
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}
