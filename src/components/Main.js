import React from 'react';
import PropTypes from 'prop-types';

import project1 from '../images/geomindr.gif';
import project2 from '../images/parity.gif';
import me from '../images/ianhundere.jpg';
import fam from '../images/fam.jpeg';
import bike from '../images/bike.jpg';
import studio from '../images/studio.jpg';
import code from '../images/code.jpg';

class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			/>
		);

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
			>
				<article
					id="intro"
					className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout
						? 'timeout'
						: ''}`}
					style={{ display: 'none' }}
				>
					<h1 className="major">Projects</h1>
					<h2 align="center">GeoMindr</h2>
					<span className="main image">
						<a href="https://geomindr.com" target="_blank">
							<img src={project1} alt="" />
						</a>
					</span>
					<p>
						A backend web app created with Node, PostgreSQL, Express, Javascript, CSS, and HTML that allows
						users to text a{' '}
						<a href="https://www.twilio.com/learn/twilio-101/what-is-twilio" target="_blank">
							Twilio
						</a>{' '}
						number using{' '}
						<a href="https://ifttt.com/about" target="_blank">
							IFTTT
						</a>{' '}
						to record a reminder and their coordinates. This reminder gets saved in a database to be
						accessible at a later time either via our web interface or by messaging the same number to get a
						list of reminders.
					</p>
					<h3>Features</h3>
					<span className="icon fa-postgres" />
					<ul>
						<li>Full SMS support through Twilio</li>
						<li>Create, retrieve, update, and delete reminders via SMS or web interface</li>
						<li>View public reminders via web interface</li>
					</ul>
					<h2 align="center">Parity</h2>
					<span className="main image" height="150">
						<a href="https://paritygame.club" target="_blank">
							<img src={project2} alt="" />
						</a>
					</span>
					<p>
						A front-end memory game created with Javascript, CSS, and HTML where the user matches tiles
						based on pictures and sounds pulled randomly from two APIs (<a
							href="https://freesound.org/"
							target="_blank"
						>
							Free Sound
						</a>{' '}
						and{' '}
						<a href="https://https://unsplash.com/.org/" target="_blank">
							Unsplash Image
						</a>) making every gaming experience unique.
					</p>
					<p />
					<h3>Features</h3>
					<ul>
						<li>Progressive level system that allows users to play 5 levels of increasing difficulty</li>
						<li>Match either image or sound; excellent for accessibility</li>
						<li>Change between themes after each level completion or failure</li>
					</ul>
					{close}
				</article>
				<article
					id="work"
					className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout
						? 'timeout'
						: ''}`}
					style={{ display: 'none' }}
				>
					<h1 className="major">About</h1>
					<section>
						<img className="image right" src={me} alt="ian hundere" />
					</section>
					<p>
						Born and raised in Texas, I often found myself up late at night tinkering about on the computer
						to either install the latest distro of Linux or meeting new people on IRC. I left Texas for my
						undergrad in Victoria, BC, Canada where I received a Bachelors of Arts in 20th Century American
						History (from a Canadian perspective). I came back south to connect with old friends and landed
						a job at Apple Inc. in the summer of 2007 just as all Apple employees were receiving their first
						iPhones. I worked there for a few years until I made the choice to go back to school to pursue a
						Masters in Education.
					</p>
					<img className="image left" src={fam} alt="my family" />
					<p>
						Just as I was about to graduate, I met my wife and other half. She has kept me sane ever since.
						We have two beautiful children whom we do our best to keep them curious and motivated.
					</p>
					<br />
					<span className="main">
						<img className="image right" src={code} alt="screen of code" />
					</span>
					<p>
						As a software developer, I love programming because it lets me solve problems creatively to help
						others work more effectively. My successful tenure in education, both as a classroom teacher and
						as an academic tech coach, helps me communicate and collaborate at a high level with a wide
						range of client needs.
					</p>
					<img className="image left" src={bike} height="150" alt="bicycle" />
					<img className="image right" src={studio} height="150" alt="music studio" />
					<p>
						When I'm not with my family or coding, I like to go on long bike rides or make video game sounds
						late into the night (&nbsp;
						<a href="https://grassnose.bandcamp.com/" alt="bandcamp link" target="_blank">
							<span className="icon fa-bandcamp" />
						</a>{' '}
						/ {' '}
						<a href="https://soundcloud.com/grassnose" alt="soundcloud link" target="_blank">
							<span className="icon fa-soundcloud" />
						</a>{' '}
						).
					</p>
					{close}
				</article>
			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired
};

export default Main;
