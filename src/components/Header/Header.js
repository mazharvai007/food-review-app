import React, { Component } from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
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
			</>
		);
	}
}
