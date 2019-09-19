import React from "react";

import "./PostList.css";

import Post from "./Post";

export default function PostList() {
	const state = {
		posts: [
			{
				id: 1,
				author: {
					name: "Júlio Alcantara",
					avatar: "https://images.opencollective.com/moneypug/45f8d53/logo.png"
				},
				date: "04 Jun 2019",
				content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
				comments: [
					{
						id: 1,
						author: {
							name: "Diego Fernandes",
							avatar:
								"https://images.opencollective.com/moneypug/45f8d53/logo.png"
						},
						content:
							"Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário "
					},
					{
						id: 2,
						author: {
							name: "Diego Fernandes",
							avatar:
								"https://images.opencollective.com/moneypug/45f8d53/logo.png"
						},
						content:
							"Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário "
					},
					{
						id: 3,
						author: {
							name: "Diego Fernandes",
							avatar:
								"https://images.opencollective.com/moneypug/45f8d53/logo.png"
						},
						content:
							"Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário "
					}
				]
			},
			{
				id: 2,
				author: {
					name: "Júlio Alcantara",
					avatar: "https://images.opencollective.com/moneypug/45f8d53/logo.png"
				},
				date: "04 Jun 2019",
				content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
				comments: [
					{
						id: 1,
						author: {
							name: "Diego Fernandes",
							avatar:
								"https://images.opencollective.com/moneypug/45f8d53/logo.png"
						},
						content: "Conteúdo do comentário"
					}
				]
			},
			{
				id: 3,
				author: {
					name: "Júlio Alcantara",
					avatar: "https://images.opencollective.com/moneypug/45f8d53/logo.png"
				},
				date: "04 Jun 2019",
				content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
				comments: [
					{
						id: 1,
						author: {
							name: "Diego Fernandes",
							avatar:
								"https://images.opencollective.com/moneypug/45f8d53/logo.png"
						},
						content: "Conteúdo do comentário"
					}
				]
			}
		]
	};

	return (
		<div className="postlist-container">
			{state.posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
}
