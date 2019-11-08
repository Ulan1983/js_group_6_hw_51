import React from 'react';
import './sidebar.css';

const Sidebar = function() {
	return (
		<div className='sidebar'>
			<ul className='ul_sidebar'>
				<li className='li_sidebar'>
					<a href='#'>Questions & Answers</a>
				</li>
				<li className='li_sidebar'>
					<a href='#'>FAQ</a>
				</li>
				<li className='li_sidebar'>
					<a href='#'>Support</a>
				</li>
				<li className='li_sidebar'>
					<a href='#'>Contact us</a>
				</li>
			</ul>
		</div>
		)
};

export default Sidebar;