import React from 'react';

const Header = ({keywords}) => (
	<header className="headerMain">
		<div className="logo">Feed<span className="colorYellow">r</span>.</div>
		<div className="search">
			<input id="search" placeholder="search" onChange={keywords} />
			<label htmlFor="search">
				<i className="fas fa-search"></i>
			</label>
		</div>
	</header>
)

export default Header;