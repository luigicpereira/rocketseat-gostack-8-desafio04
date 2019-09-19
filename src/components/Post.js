import React from "react";

import "./Post.css";

import Comment from "./Comment";

export default function Post({ post }) {
	console.log(post);

	return (
		<div className="post">
			<div className="user-container">
				<img className="avatar" src={post.author.avatar} alt="avatar" />
				<div className="user">
					<strong>{post.author.name}</strong>
					<p>{post.date}</p>
				</div>
			</div>
			<div className="content">
				<p>{post.content}</p>
			</div>
			<hr />
			{post.comments.map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
}
