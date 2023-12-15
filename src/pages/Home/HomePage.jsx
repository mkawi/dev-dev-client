import { useEffect, useState } from "react";

import { getArticles } from "../../utils/api";
import ArticlePreview from "./ArticlePreview";

export default function HomePage() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticles().then(({ articles }) => {
			setArticles(articles);
			setIsLoading(false);
		});
	}, []);

	return (
		<main>
			{isLoading ? (
				<h3>Loading...</h3>
			) : (
				articles.map((article) => (
					<ArticlePreview key={article.article_id} article={article} />
				))
			)}
		</main>
	);
}
