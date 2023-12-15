import { Routes, Route } from "react-router";

import { routePaths } from "./utils/routePaths";
import Layout from "./components/Layout";
import HomePage from "./pages/Home/HomePage";
import ArticlePage from "./pages/Article/ArticlePage";
import LoginPage from "./pages/Login/LoginPage";

import UserProvider from "./contexts/UserContext";
import LogoutPage from "./pages/Logout/LogoutPage";

export default function App() {
	return (
		<UserProvider>
			<Routes>
				<Route element={<Layout />}>
					<Route path={routePaths.HOME} element={<HomePage />} />
					<Route path={routePaths.ARTICLE} element={<ArticlePage />} />
					<Route path={routePaths.LOGIN} element={<LoginPage />} />
					<Route path={routePaths.LOGOUT} element={<LogoutPage />} />
				</Route>
			</Routes>
		</UserProvider>
	);
}
