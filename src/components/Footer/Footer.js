import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return (
			<>
				<div className='footer'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-4 col-sm-3'>
								<h5>Links</h5>
								<ul className='list-unstyled'>
									<li>
										<Link to='/home'>Home</Link>
									</li>
									<li>
										<Link to='/about'>About</Link>
									</li>
									<li>
										<Link to='/menu'>Menu</Link>
									</li>
									<li>
										<Link to='/contact'>Contact</Link>
									</li>
								</ul>
							</div>
							<div className='col-7 col-sm-5'>
								<h5>Our Address</h5>
								<address>
									121, Salt Lake
									<br />
									North Evenue, Down Street
									<br />
									USA
									<br />
									<i className='fa fa-phone fa-lg'></i> +852
									1234 5678
									<br />
									<i className='fa fa-fax fa-lg'></i> +852
									8765 4321
									<br />
									<i className='fa fa-envelope fa-lg'></i>
									<a href='mailto:foodreview@food.net'>
										foodreview@food.net
									</a>
								</address>
							</div>
							<div className='col-12 col-sm-4 align-self-center'>
								<div className='text-center'>
									<a
										className='btn btn-social-icon btn-google'
										href='http://google.com/+'>
										<i className='fa fa-google-plus'></i>
									</a>
									<a
										className='btn btn-social-icon btn-facebook'
										href='http://www.facebook.com/profile.php?id='>
										<i className='fa fa-facebook'></i>
									</a>
									<a
										className='btn btn-social-icon btn-linkedin'
										href='http://www.linkedin.com/in/'>
										<i className='fa fa-linkedin'></i>
									</a>
									<a
										className='btn btn-social-icon btn-twitter'
										href='http://twitter.com/'>
										<i className='fa fa-twitter'></i>
									</a>
									<a
										className='btn btn-social-icon btn-google'
										href='http://youtube.com/'>
										<i className='fa fa-youtube'></i>
									</a>
								</div>
							</div>
						</div>
						<div className='row justify-content-center'>
							<div className='col-auto'>
								<p>&copy; Copyright 2021 Food Review</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
