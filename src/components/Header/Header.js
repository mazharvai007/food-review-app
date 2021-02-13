import React, { Component } from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleLogin(event) {
		this.toggleModal();
		alert(
			'Username: ' +
				this.username.value +
				' Password: ' +
				this.password.value +
				' Remember: ' +
				this.remember.checked
		);

		event.preventDefault();
	}

	render() {
		return (
			<>
				<Navbar light expand='md' variant='light'>
					<div className='container'>
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className='mr-auto' href='/'>
							<img
								src='assets/images/logo.png'
								alt='Food Review'
								width='100'
							/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar className='ml-auto'>
								<NavItem>
									<NavLink className='nav-link' to='/home'>
										<span className='fa fa-home fa-lg'></span>{' '}
										Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/about'>
										<span className='fa fa-info fa-lg'></span>{' '}
										About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/menu'>
										<span className='fa fa-list fa-lg'></span>{' '}
										Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/contact'>
										<span className='fa fa-address-card fa-lg'></span>{' '}
										Contact
									</NavLink>
								</NavItem>
							</Nav>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<Button outline onClick={this.toggleModal}>
										<span className='fa fa-sign-in fa-lg'></span>{' '}
										Login
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1>Food Review</h1>
								<p>
									We take reviews from the world's best
									cuisines, and create a unique fusion
									experience. Our lipsmacking creations wil
									tickle your culinary senses!
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
				<Modal
					isOpen={this.state.isModalOpen}
					toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>
						Login Form
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor='username'>Username</Label>
								<Input
									type='text'
									id='username'
									name='username'
									innerRef={(input) =>
										(this.username = input)
									}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='password'>Password</Label>
								<Input
									type='text'
									id='password'
									name='password'
									innerRef={(input) =>
										(this.password = input)
									}
								/>
							</FormGroup>
							<FormGroup check className='mb-3'>
								<Label check>
									<Input
										type='checkbox'
										name='remember'
										id='remember'
										innerRef={(input) =>
											(this.remember = input)
										}
									/>{' '}
									Remember Me
								</Label>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 12 }}>
									<Button
										type='submit'
										value='submit'
										color='primary'>
										Login
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</>
		);
	}
}
