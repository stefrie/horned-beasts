import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<>
				<header>
					<h1>{Header.title}</h1>
					<h2>{Header.message}</h2>
				</header>
			</>
		);
	}
}

export default Header;

// --------------Lab 02------------//
// function Header() {
//     return <h1>Title Goes Here</h1>;
// }

// export default Header;
