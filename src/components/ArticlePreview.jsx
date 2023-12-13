import { Link } from "react-router-dom";

export default function ArticlePreview({ article }) {
	const { title, author, created_at, comment_count, topic, votes, article_id } =
		article;
	const date = new Date(created_at).toLocaleDateString("en-gb");

	return (
		<div className="article-card">
			<ul className="article-details">
				<li>Posted by {author}</li>
				<li>{date}</li>
			</ul>
			<Link to="/">
				<h2>{title}</h2>
			</Link>
			<ul className="article-details">
				<li>{votes} Votes</li>
				<li>{comment_count} Comments</li>
			</ul>
		</div>
	);
}
