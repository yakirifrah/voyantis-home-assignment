import './Header.css';

const Header = () => {
	return (
		<nav className="header">
			<div className="header__container">
				<a className="header__link" href="https://www.voyantis.ai/">
					<img
						src="https://comeet-euw-app.s3.amazonaws.com/1675/0109b3c917c63cff7e12fba25b98a6afeb7c5644"
						alt="Voyantis Logo"
						height="80"
						className="header__img"
					/>
				</a>
			</div>
		</nav>
	);
};

export default Header;
