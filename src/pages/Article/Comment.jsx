export default function Comment({ comment }) {
	const { body, author, votes, created_at } = comment;
	const date = new Date(created_at).toLocaleDateString("en-gb");

	return (
		<div className="comment-card">
			<p>{body}</p>
			<ul className="comment-details">
				<li>Posted by {author}</li>
				<li>{date}</li>
				<li>{votes} Votes</li>
			</ul>
		</div>
	);
}
