import { Link, NavLink } from "react-router-dom";
import { Logo, ThemeButton, NavItem } from "../style";

const NavBar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Navbar
			</a>
			{/* <Logo className="navbar-brand" to="/">
				<img src={lightLogo} alt="logo" />
			</Logo> */}
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			{/* <ThemeButton className="nav-item" onClick={props.toggleTheme}>
				{currentTheme === "light" ? "Dark" : "Light"} Mode
			</ThemeButton> */}

			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<NavItem to="/">Home</NavItem>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/books">
							books
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default NavBar;
