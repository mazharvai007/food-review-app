import React, { Component } from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			telNum: '',
			email: '',
			agree: false,
			contatType: 'Tel.',
			message: '',
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		console.log('Current State is: ' + JSON.stringify(this.state));
		alert('Current State is: ' + JSON.stringify(this.state));
		event.preventDefault();
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/home'>Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Conatact Us</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>Contact Us</h3>
						<hr />
					</div>
				</div>
				<div className='row row-content'>
					<div className='col-12'>
						<h3>Send us your feedback</h3>
					</div>
					<div className='col-12 col-md-9'>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup row>
								<Label htmlFor='firstName' md={2}>
									First Name:
								</Label>
								<Col md={10}>
									<Input
										type='text'
										id='firstName'
										name='firstName'
										placeholder='First Name'
										value={this.state.firstName}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='lastName' md={2}>
									Last Name:
								</Label>
								<Col md={10}>
									<Input
										type='text'
										id='lastName'
										name='lastName'
										placeholder='Last Name'
										value={this.state.lastName}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='telNum' md={2}>
									Telephone Number:
								</Label>
								<Col md={10}>
									<Input
										type='text'
										id='telNum'
										name='telNum'
										placeholder='Telephone Number'
										value={this.state.telNum}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='email' md={2}>
									Email:
								</Label>
								<Col md={10}>
									<Input
										type='email'
										id='email'
										name='email'
										placeholder='Email'
										value={this.state.email}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 6, offset: 2 }}>
									<FormGroup check>
										<Label check>
											<Input
												type='checkbox'
												name='agree'
												checked={this.state.agree}
												onChange={
													this.handleInputChange
												}
											/>{' '}
											<strong>May we contact you?</strong>
										</Label>
									</FormGroup>
								</Col>
								<Col md={{ size: 3, offset: 1 }}>
									<Input
										type='select'
										name='contactType'
										value={this.state.contatType}
										onChange={this.handleInputChange}>
										<option value=''>--Select One--</option>
										<option value='tel'>Telephone</option>
										<option value='email'>Email</option>
									</Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='message' md={2}>
									Your Feedback
								</Label>
								<Col md={10}>
									<Input
										type='textarea'
										id='message'
										name='message'
										rows='4'
										value={this.state.message}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type='submit' color='primary'>
										Send Feedback
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</div>
				</div>
				<div className='row row-content'>
					<div className='col-12 col-md-12'>
						<h3>Location Information</h3>
					</div>
					<div className='col-12 col-sm-4 offset-sm-1'>
						<h5>Our Address</h5>
						<address>
							121, Salt Lake
							<br />
							North Evenue, Down Street
							<br />
							USA
							<br />
							<i className='fa fa-phone fa-lg'></i> +852 1234 5678
							<br />
							<i className='fa fa-fax fa-lg'></i> +852 8765 4321
							<br />
							<i className='fa fa-envelope fa-lg'></i>
							<a href='mailto:foodreview@food.net'>
								foodreview@food.net
							</a>
						</address>
					</div>
					<div className='col-12 col-sm-6 offset-sm-1'>
						<h5>Map of our Location</h5>
					</div>
					<div className='col-12 col-sm-11 offset-sm-1'>
						<div className='btn-group' role='group'>
							<a
								role='button'
								className='btn btn-primary'
								href='tel:+85212345678'>
								<i className='fa fa-phone'></i> Call
							</a>
							<a role='button' href className='btn btn-info'>
								<i className='fa fa-skype'></i> Skype
							</a>
							<a
								role='button'
								className='btn btn-success'
								href='mailto:confusion@food.net'>
								<i className='fa fa-envelope-o'></i> Email
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
