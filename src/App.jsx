import { Routes, Route } from "react-router";

import { PATHS } from "./routes/PATHS";
import Layout from "./components/Layout";
import HomePage from "./routes/HomePage";

export default function App() {
	return (
    <Routes>
      <Route element={<Layout />}>
			  <Route path={PATHS.HOME} element={<HomePage />} />
      </Route>
		</Routes>
	);
}
