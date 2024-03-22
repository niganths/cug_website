import React from "react";
import { Link } from "react-router-dom";

import favicon from "../../assets/gifs/logo.png";
import navLinks from "../../util/navigation.js";
import "./header.css";

const Header = () => {
	// const { headerStyle, breakpoint } = useContext(GlobalContext);
	return (
		<header className="header" >
			<Link className="header-left" to="/">
				<div className="header-left-image">
					<img src={favicon} alt="FORCE-IIITU" />
				</div>
				<div className="header-left-content">
					<span className="header-left-content__name">CUG</span>
					<span className="header-left-content__subtitle">
						CLOUD USER GROUP
					</span>
				</div>
			</Link>
		
				<div className="header-right">
					<nav className="header-right-nav header-nav">
						<ul className="header-nav-ul">
							{navLinks.map((navLink, id) => (
								<li key={id}>
									<Link to={navLink.link}>
										{navLink.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			
		</header>
	);
};

export default Header;
