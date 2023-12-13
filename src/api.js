import axios from "axios";

const devdevApi = axios.create({
	baseURL: "https://dev-dev-api.onrender.com/api",
});

async function getArticles() {
	const response = await devdevApi.get("/articles");

	return response;
}

async function getArticleById(id) {
	const response = await devdevApi.get(`/articles/${id}`);

	return response;
}

async function getArticleComments(id) {
	const response = await devdevApi.get(`/articles/${id}/comments`);

	return response;
}

export { getArticles, getArticleById, getArticleComments };
