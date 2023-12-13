import { Link } from "react-router-dom";
import { PATHS } from "../routes/PATHS";

export default function Header() {
	return (
		<header>
			<h3>
				<Link to={PATHS.HOME}>DevDev</Link>
			</h3>
			<nav>
				<ul>
					<li>
						<Link to={PATHS.HOME}>Home</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
