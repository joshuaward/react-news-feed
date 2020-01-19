import React, { useState } from 'react';

const Footer = () => {
	const [ date, setDate ] = useState('');

	return(
		<footer className="footerMain">
			<div className="footerMain-inner">
				<div className="info">
					<div className="logo">
						Feed<span className="colorRed">r</span>.
					</div>
					<div className="address">
						123 Crestwood Dr.<br />
						Anyville, MA, 01325
					</div>
					<div className="phone">
						(123) 654-9876
					</div>
					<div className="copyright">
						&copy;{(new Date().getFullYear())} - All Rights Reserved
					</div>
				</div>
				<div className="info">
					<h4>Support</h4>
					<div>Contact</div>
					<div>Twitter</div>
					<div>GitHub</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;