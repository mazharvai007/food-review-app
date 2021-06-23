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
	FormFeedback,
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
			contactType: 'Tel.',
			message: '',

			/**
			 * If users does not fill-up the fileds, the form is not valid
			 */
			touched: {
				firstName: false,
				lastName: false,
				telNum: false,
				email: false,
				contactType: false,
			},
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	/**
	 * this method allow to write/change input boxes
	 * @param {*} event
	 */
	handleInputChange(event) {
		const target = event.target;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	/**
	 * It's working for submitting the form
	 * @param {*} event
	 */
	handleSubmit(event) {
		console.log('Current State is: ' + JSON.stringify(this.state));
		alert('Current State is: ' + JSON.stringify(this.state));
		event.preventDefault();
	}

	/**
	 * It's indicate which field is modified
	 * It also received the corresponding event
	 * We will be able to tract which input field is modified
	 * @param {*} field
	 */
	handleBlur = (field) => (event) => {
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		});
	};

	/**
	 * validate the form
	 * @param {*} firstName
	 * @param {*} lastName
	 * @param {*} telNum
	 * @param {*} email
	 */

	validate(firstName, lastName, telNum, email) {
		const errors = {
			firstName: '',
			lastName: '',
			telNum: '',
			email: '',
		};

		/**
		 * Validate First Name
		 */
		if (this.state.touched.firstName && firstName.length < 3) {
			errors.firstName =
				'First Name should be the 3 or more than 3 characters';
		} else if (this.state.touched.firstName && firstName.length > 10) {
			errors.firstName =
				'First Name should be less than or equal 10 characters';
		}

		/**
		 * Validate Last Name
		 */
		if (this.state.touched.lastName && lastName.length < 3) {
			errors.lastName =
				'Last Name should be the 3 or more than 3 characters';
		} else if (this.state.touched.lastName && lastName.length > 10) {
			errors.lastName =
				'Last Name should be less than or equal 10 characters';
		}

		/**
		 * Validate Telephone Number
		 */
		const regs = /^\d+$/;
		const regsLength = /^\d{11}$/;
		if (this.state.touched.telNum && !regs.test(telNum)) {
			errors.telNum = 'Telephone number should contain only the number';
		} else if (this.state.touched.telNum && !regsLength.test(telNum)) {
			errors.telNum = 'Telephone number should be 11 characters';
		}

		/**
		 * Validate Email
		 */
		if (
			this.state.touched.email &&
			email.split('').filter((x) => x === '@').length !== 1
		) {
			errors.email = 'Email should contain a @ sign';
		}

		return errors;
	}

	render() {
		const errors = this.validate(
			this.state.firstName,
			this.state.lastName,
			this.state.telNum,
			this.state.email
		);
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
										valid={errors.firstName === ''}
										invalid={errors.firstName !== ''}
										value={this.state.firstName}
										onBlur={this.handleBlur('firstName')}
										onChange={this.handleInputChange}
									/>
									<FormFeedback>
										{errors.firstName}
									</FormFeedback>
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
										valid={errors.lastName === ''}
										invalid={errors.lastName !== ''}
										value={this.state.lastName}
										onBlur={this.handleBlur('lastName')}
										onChange={this.handleInputChange}
									/>
									<FormFeedback>
										{errors.lastName}
									</FormFeedback>
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
										valid={errors.telNum === ''}
										invalid={errors.telNum !== ''}
										value={this.state.telNum}
										onBlur={this.handleBlur('telNum')}
										onChange={this.handleInputChange}
									/>
									<FormFeedback>{errors.telNum}</FormFeedback>
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
										valid={errors.email === ''}
										invalid={errors.email !== ''}
										value={this.state.email}
										onBlur={this.handleBlur('email')}
										onChange={this.handleInputChange}
									/>
									<FormFeedback>{errors.email}</FormFeedback>
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
							<a role='button' href='true' className='btn btn-info'>
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
