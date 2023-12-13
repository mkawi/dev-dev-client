import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments } from "../api";

import Comment from "../components/Comment";

export default function ArticlePage() {
	const { article_id } = useParams();

	const [article, setArticle] = useState({});
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const date = new Date(article.created_at).toLocaleDateString("en-gb");

	useEffect(() => {
		getArticleById(article_id).then(({ data }) => {
			setArticle(data.article);
			setIsLoading(false);

			getArticleComments(article_id).then(({ data }) =>
				setComments(data.comments)
			)
		})
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
					<h3 style={{ marginTop: "2.5rem" }}>
						Comments{" "}
						{comments.length && (
							<span className="total-comments">{comments.length}</span>
						)}
					</h3>
					{comments.length === 0 ? (
						<p>No comments yet. Be the first to comment.</p>
					) : (
						comments.map((comment) => (
							<Comment key={comment.comment_id} comment={comment} />
						))
					)}
				</>
			)}
		</main>
	);
}
