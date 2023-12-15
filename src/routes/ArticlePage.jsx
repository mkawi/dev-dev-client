import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments, updateArticleVotes } from "../api";

import Comment from "../components/Comment";
import { UserContext } from "../contexts/UserContext";

export default function ArticlePage() {
	const { article_id } = useParams();
	const { user } = useContext(UserContext);

	const [article, setArticle] = useState({});
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setError] = useState(null);
	const [votes, setVotes] = useState();

	const date = new Date(article.created_at).toLocaleDateString("en-gb");

	useEffect(() => {
		getArticleById(article_id).then(({ data }) => {
			setArticle(data.article);
			setIsLoading(false);
			setVotes(data.article.votes);

			getArticleComments(article_id).then(({ data }) =>
				setComments(data.comments)
			);
		});
	}, []);

	function vote(vote_amount) {
		setVotes((currVotes) => currVotes + vote_amount);
		setError(null)

		updateArticleVotes(article_id, vote_amount).catch(() => {
			setError("An error occured, please try again.");
			setVotes((currVotes) => currVotes - vote_amount);
		});
	}

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
						<li>{votes} Votes</li>
						<li>{article.comment_count} Comments</li>
					</ul>
					<p>{article.body}</p>
					{user && (
						<>
							<h3>Votes</h3>
								<h4>{votes}</h4>
								{isError && <p>{isError}</p>}
							<div className="voting-ui">
								<button onClick={() => vote(1)}>Upvote +1</button>
								<button onClick={() => vote(-1)}>Downvote -1</button>
							</div>
						</>
					)}
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
