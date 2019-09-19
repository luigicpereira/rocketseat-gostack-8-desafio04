import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<a href="#">
					<img
						src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1.png"
						alt="facebook logo"
						className="logo"
					/>
				</a>
				<div className="profile">
					<p>Meu perfil</p>
					<i className="material-icons">account_circle</i>
				</div>
			</div>
		);
	}
}
