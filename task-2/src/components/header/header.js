import React from 'react';
import './header.css';


const Header = function() {
		return (
		<div className='container header_container'>
			<header className='header'>
				<a className='logo' href='#'>Some logo</a>
					<nav className='main-nav'>
						<ul>
							<li><a href='#'>Home</a></li>
							<li><a href='#'>Services</a></li>
							<li><a href='#'>Latest news</a></li>
							<li><a href='#'>Contact us</a></li>
						</ul>
					</nav>
			</header>
		</div>
	)
};

export default Header;