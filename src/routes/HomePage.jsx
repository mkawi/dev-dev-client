import { useEffect, useState } from "react";

import { getArticles } from "../api";
import ArticlePreview from "../components/ArticlePreview";

export default function HomePage() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles().then(({ data }) => setArticles(data.articles));
	}, []);

	return (
		<main>
			{articles.map((article) => (
				<ArticlePreview key={article.article_id} article={article} />
			))}
		</main>
	);
}
