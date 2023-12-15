import { useContext } from "react";
import { Link } from "react-router-dom";

import { routePaths } from "../utils/routePaths";
import { UserContext } from "../contexts/UserContext";

export default function Header() {
	const { user } = useContext(UserContext)
	
	return (
		<header>
			<h3>
				<Link to={routePaths.HOME}>DevDev</Link>
			</h3>
			<nav>
				{user && <div className="header-user"><img src={user.avatar_url} />{user.username}</div>}
				<ul className="header-nav">
					<li>
						<Link to={routePaths.HOME}>All Posts</Link>
					</li>
					<li>
						{user ? <Link to={routePaths.LOGOUT}>Logout</Link> : <Link to={routePaths.LOGIN}>Login</Link>}
					</li>
				</ul>
			</nav>
		</header>
	);
}
