import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

export default function ArticlePage() {
	const [article, setArticle] = useState({});
	const { article_id } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	const date = new Date(article.created_at).toLocaleDateString("en-gb");

	useEffect(() => {
		getArticleById(article_id).then(({ data }) => {
			setArticle(data.article);
			setIsLoading(false);
		});
	}, []);

	return (
		<main className="article-page">
			{isLoading ? (
				<h3>Loading...</h3>
			) : (
				<>
					<img src={article.article_img_url} />
					<h2>{article.title}</h2>
					<ul className="article-details">
						<li>Posted by {article.author}</li>
						<li>{date}</li>
						<li>{article.votes} Votes</li>
						<li>{article.comment_count} Comments</li>
					</ul>
					<p>{article.body}</p>
				</>
			)}
		</main>
	);
}
