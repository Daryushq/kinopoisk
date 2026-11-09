import '../Header/Header.css';

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<p className="header__logo">Logo</p>
                    <div className="header__right">
					<nav className="header__nav">
						<ul className="header__list">
							<li>
								<a href="!#">Главная</a>
							</li>
							<li>
								<a href="!#">Фильмы</a>
							</li>
							<li>
								<a href="!#">О нас</a>
							</li>
						</ul>
					</nav>
					<a href="!#" className="header__btn">
						Войти
					</a>
                    </div>
				</div>
			</div>
		</header>
	);
}

export default Header;
