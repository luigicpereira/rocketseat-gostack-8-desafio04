import React from "react";

import "./Comment.css";

export default function Comment({ comment }) {
	return (
		<div className="comment-container">
			<img className="avatar" src={comment.author.avatar} alt="avatar" />
			<div className="comment">
				<p>
					<strong>{comment.author.name}</strong> {comment.content}
				</p>
			</div>
		</div>
	);
}
