import React from "react";

const Header = () => {
	return (
		<header className="header mb3" role="banner">
			<div className="container container-header">
				<div className="header-intro">
					<h1><a href="/">WordPress Jazz</a></h1>
					<p className="header-intro-paragraph">
						The Music Behind The Releases
					</p>
				</div>
				<div className="tweet">
					<a
						className="twitter-share-button"
						href="https://twitter.com/intent/tweet?text=WordPress%20Jazz%20-%20The%20Music%20Behind%20The%20Releases"
						data-size="small"
					>
						Tweet
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
