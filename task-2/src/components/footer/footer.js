import React from 'react';
import './footer.css';

const Footer = function() {
	return (
		<footer className='footer'>
			<div className='footer_div'>
				<a href='#'><img src='https://png.pngtree.com/png-clipart/20190613/original/pngtree-instagram-logo-icon-png-image_3588821.jpg'/></a>
			</div>
			<div className='footer_div'>
				<a href='#'><img src='https://png.pngtree.com/png-clipart/20190515/original/pngtree-facebook-icon-png-image_3549981.jpg'/></a>
			</div>
			<div className='footer_div'>
				<a href='#'><img src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-twitter-icon-png-image_3562007.jpg'/></a>
			</div>
			<div className='footer_div'>
				<a href='#'><img src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-google-plus-png-icon-png-image_3562024.jpg'/></a>
			</div>
			<span>@ copyright 2019. All rights reserved.<a href='#'>www.email.com</a></span>
		</footer>
		)
};

export default Footer;