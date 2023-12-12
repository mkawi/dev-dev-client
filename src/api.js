import axios from "axios";

const devdevApi = axios.create({
	baseURL: "https://dev-dev-api.onrender.com/api",
});

async function getArticles() {
	const response = await devdevApi.get("/articles");

	return response;
}

export { getArticles };
