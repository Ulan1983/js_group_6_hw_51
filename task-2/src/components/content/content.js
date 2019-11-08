import React from 'react';
import './content.css';


const Content = function() {
	return (
		<div className='content'>
			<h2>Продажа авто</h2>
			<div className='box'>
				<div className='card'><a href='#'>
					<h3>Легковые авто</h3>
					<img src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-car-icon-sign-png-image_3568162.jpg'/>
				</a></div>
				<div className='card'><a href='#'>
					<h3>Внедорожники и минивены</h3>
					<img src='https://png.pngtree.com/png-clipart/20190603/original/pngtree-creative-suv-advertising-illustrator-vector-material-png-image_15359.jpg'/>
				</a></div>
			</div>
			<div className='box'>
				<div className='card1'><a href='#'>
					<h3>Грузовые авто</h3>
					<img src='https://png.pngtree.com/png-clipart/20190920/original/pngtree-orange-container-truck-illustration-png-image_4628091.jpg'/>
				</a></div>
				<div className='card1'><a href='#'>
					<h3>Шины и диски</h3>
					<img src='https://png.pngtree.com/png-clipart/20190612/original/pngtree-automobile-tire-png-image_3446740.jpg'/>
				</a></div>
			</div>
		</div>
	)
};

export default Content;