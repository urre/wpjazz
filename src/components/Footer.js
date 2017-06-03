import React from "react";
const Footer = () => {
	return (
		<footer className="footer" role="contentinfo">
			<p className="footer-paragraph">
				"WordPress core developers share a love of jazz music, and
				{" "}<a href="https://codex.wordpress.org/WordPress_Versions">
					since WordPress 1.0
				</a>
				{" "}all major releases are named in honor of jazz musicians they
				admire"
			</p>
			<div className="footer-cta">
				<a href="https://wordpress.org/download/" className="footer-button">
					Download WordPress
				</a>
				<p className="footer-slogan">Code and jazz is poetry</p>
			</div>
			<div className="footer-byline">
				<span className="footer-byline-text">
					Made with ❤ for <a href="https://jazztips.se">Jazz</a> and
					{" "}<a href="https://wordpress.org/">WordPress</a>
				</span>
				<a className="footer-byline-link" href="https://urre.me">By Urban Sandén</a>
				<div className="footer-follow">
					<a
						className="twitter-follow-button"
						href="https://twitter.com/urre"
						data-size="small"
						data-show-count="false"
					>
						Follow @urre
					</a>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
