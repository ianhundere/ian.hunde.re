import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<ul class="icons">
			<li>
				<a
					href="https://github.com/ianhundere"
					target="_blank"
					rel="noopener noreferrer"
					class="icon fa-github"
				>
					<span class="label">GitHub</span>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/ianhundere/"
					target="_blank"
					rel="noopener noreferrer"
					class="icon fa-linkedin"
				>
					<span class="label">Linked-In</span>
				</a>
			</li>
		</ul>
		<p className="copyright">
			&copy; Ian Hundere&nbsp;|&nbsp;Built with{' '}
			<a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
				Gatsby.js
			</a>&nbsp;|&nbsp;Design:
			<a href="https://html5up.net" target="_blank" rel="noopener noreferrer">
				HTML5 UP
			</a>.
		</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool
};

export default Footer;
