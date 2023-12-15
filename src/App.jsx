import { Routes, Route } from "react-router";

import { PATHS } from "./routes/PATHS";
import Layout from "./components/Layout";
import HomePage from "./routes/HomePage";
import ArticlePage from "./routes/ArticlePage";
import LoginPage from "./routes/LoginPage";

import UserProvider from "./contexts/UserContext";
import LogoutPage from "./routes/LogoutPage";

export default function App() {
	return (
		<UserProvider>
			<Routes>
				<Route element={<Layout />}>
					<Route path={PATHS.HOME} element={<HomePage />} />
					<Route path={PATHS.ARTICLE} element={<ArticlePage />} />
					<Route path={PATHS.LOGIN} element={<LoginPage />} />
					<Route path={PATHS.LOGOUT} element={<LogoutPage />} />
				</Route>
			</Routes>
		</UserProvider>
	);
}
