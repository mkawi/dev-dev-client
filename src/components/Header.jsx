import { useContext } from "react";
import { Link } from "react-router-dom";

import { PATHS } from "../routes/PATHS";
import { UserContext } from "../contexts/UserContext";

export default function Header() {
	const { user } = useContext(UserContext)
	
	return (
		<header>
			<h3>
				<Link to={PATHS.HOME}>DevDev</Link>
			</h3>
			<nav>
				{user && <div className="header-user"><img src={user.avatar_url} />{user.username}</div>}
				<ul className="header-nav">
					<li>
						<Link to={PATHS.HOME}>All Posts</Link>
					</li>
					<li>
						{user ? <Link to={PATHS.LOGOUT}>Logout</Link> : <Link to={PATHS.LOGIN}>Login</Link>}
					</li>
				</ul>
			</nav>
		</header>
	);
}
