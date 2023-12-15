import { useContext, useEffect } from "react";

import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
	const { user, logout } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) navigate("/");
	}, []);

	return (
		<main>
			<h2>Logout</h2>
			<div>
				<p>Are you sure you want to log out?</p>
				<div className="logout-buttons">
					<button
						onClick={() => {
							logout();
							navigate("/");
						}}
					>
						Confirm
					</button>
					<button onClick={() => navigate(-1)}>Cancel</button>
				</div>
			</div>
		</main>
	);
}
