import axios from "axios";

const devdevApi = axios.create({
	baseURL: "https://dev-dev-api.onrender.com/api",
});

async function getArticles() {
	const response = await devdevApi.get("/articles");

	return response.data;
}

async function getArticleById(id) {
	const response = await devdevApi.get(`/articles/${id}`);

	return response.data;
}

async function getArticleComments(id) {
	const response = await devdevApi.get(`/articles/${id}/comments`);

	return response.data;
}

async function updateArticleVotes(id, vote) {
	const response = await devdevApi.patch(`/articles/${id}`, {
		inc_votes: vote,
	});

	return response.data;
}

async function getUsers() {
	const response = await devdevApi.get(`/users`);

	return response.data;
}

export {
	getArticles,
	getArticleById,
	getArticleComments,
	updateArticleVotes,
	getUsers,
};
