import React from 'react';
import PropTypes from 'prop-types';

import project1 from '../images/geomindr.gif';
import project2 from '../images/parity.gif';
import project3 from '../images/eggy.gif';
import project4 from '../images/Scale-o-Rama.gif';
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
					<h2 align="center">
						<a href="https://geomindr.com" target="_blank" rel="noopener noreferrer">
							GeoMindr
						</a>
					</h2>
					<span className="main image">
						<a href="https://geomindr.com" target="_blank" rel="noopener noreferrer">
							<img src={project1} alt="Link to GeoMindr.com" />
						</a>
					</span>
					<p>
						A backend web app created with Node.js, Express.js, PostgreSQL, Javascript, CSS, and HTML that
						allows users to text a{' '}
						<a
							href="https://www.twilio.com/learn/twilio-101/what-is-twilio"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twilio
						</a>{' '}
						number using{' '}
						<a href="https://ifttt.com/about" target="_blank" rel="noopener noreferrer">
							IFTTT
						</a>{' '}
						to then record a reminder and their GPS coordinates. This reminder gets saved in a database to
						be accessible at a later time either via the web interface or by messaging the same number to
						get a list of reminders.
					</p>
					<h3>Features</h3>
					<span className="icon fa-postgres" />
					<ul>
						<li>Full SMS support through Twilio</li>
						<li>Create, retrieve, update, and delete reminders via SMS or web interface</li>
						<li>View public reminders via web interface</li>
						<section align="right">
							<a
								href="https://github.com/ianhundere/GeoMindr"
								target="_blank"
								rel="noopener noreferrer"
								class="icon fa-github"
								alt="Link to GeoMindr Repo"
							><a href="https://github.com/ianhundere/GeoMindr" target="_blank"
								rel="noopener noreferrer"
								alt="Link to GeoMindr Repo"> <em>GitHub Repo</em></a>
							</a></section>
					</ul>
					<hr></hr>
					<h2 align="center">
						<a href="https://paritygame.club" target="_blank" rel="noopener noreferrer">
							Parity
						</a>
					</h2>
					<span className="main image" height="150">
						<a href="https://paritygame.club" target="_blank" rel="noopener noreferrer">
							<img src={project2} alt="Link to the Parity Memory Game" />
						</a>
					</span>
					<p>
						A front-end memory game created with Javascript, CSS, and HTML where the user matches tiles
						based on pictures and sounds pulled randomly from two APIs (<a
							href="https://freesound.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Free Sound
						</a>{' '}
						and{' '}
						<a href="https://https://unsplash.com/.org/" target="_blank" rel="noopener noreferrer">
							Unsplash Image
						</a>) making every gaming experience unique.
					</p>
					<p />
					<h3>Features</h3>
					<ul>
						<li>Progressive level system that allows users to play 5 levels of increasing difficulty</li>
						<li>Match either image or sound; excellent for accessibility</li>
						<li>Change between themes after each level completion or failure</li>
						<section align="right">
							<a
								href="https://github.com/ianhundere/parity-memory-game"
								target="_blank"
								rel="noopener noreferrer"
								class="icon fa-github"
								alt="Link to Parity Memory Game Repo"
							><a href="https://github.com/ianhundere/parity-memory-game" target="_blank"
								rel="noopener noreferrer" alt="Link to Parity Memory Game Repo"> <em>GitHub Repo</em></a>
							</a></section>
					</ul>
					<hr></hr>
					<h2 align="center">
						Scales<sub><strong>-O-</strong></sub><br></br>Rama
					</h2>
					<span className="main image" height="150">
						<img src={project4} alt="Gif of Scale-O-Rama" />
					</span>
					<p>
						A simple python app that allows users to find scales based on inputted notes or randomly choose scales from a variety of musical modes.
					</p>
					<p />
					<h3>Features</h3>
					<ul>
						<li>Scales randomly chosen from major, minor, dorian, phrygian, lydian, mixolydian, aeolian, and locrian scales</li>
						<li>The itertools module is used to flatten the dictionary of scales into values which then allow the scales to be randomized</li>
						<li>If the incorrect option is chosen, the user is alerted to enter either "lookup" or "random"</li>
						<section align="right">
							<a
								href="https://github.com/ianhundere/Scales-O-Rama"
								target="_blank"
								rel="noopener noreferrer"
								class="icon fa-github"
								alt="Link to Scales-O-Rama Repo"
							><a href="https://github.com/ianhundere/Scales-O-Rama" target="_blank"
								rel="noopener noreferrer" alt="Link to Scales-O-Rama Repo"> <em>GitHub Repo</em></a>
							</a></section>
					</ul>
					<hr></hr>
					<h2 align="center">
						Eggy <sup>Mc</sup>Eggy <br></br><sup>and</sup><sub>Friends</sub></h2>
					<span className="main image" height="150">
						<img src={project3} alt="Gif of Eggy Game" />
					</span>
					<p>
						A simple shoot'em up game created using Python and Pygame.
					</p>
					<p />
					<h3>Features</h3>
					<ul>
						<li>Ability to travel in all 2D directions (up, down, left, and right)</li>
						<li>Splash screen with instructions on how to play</li>
						<li>A score counter / multiple lives</li>
						<section align="right">
							<a
								href="https://github.com/ianhundere/Scales-O-Rama"
								target="_blank"
								rel="noopener noreferrer"
								class="icon fa-github"
								alt="Link to Eggy Game Repo"
							><a href="https://github.com/ianhundere/Scales-O-Rama" target="_blank"
								rel="noopener noreferrer" alt="Link to Eggy Game Repo"> <em>GitHub Repo</em></a>
							</a></section>
					</ul>
					{close}
				</article >
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
						to either install the latest distro of Linux or meet new people on IRC. I left Texas for my
						undergrad in Victoria, BC, Canada where I received a Bachelors of Arts in 20th Century American
						History (from a Canadian perspective). I came back south to connect with old friends and landed
						a job at Apple Inc. in the summer of 2007, just as all Apple employees were receiving their
						free iPhones. I worked there for a few years until I made the choice to go back to school to
						pursue a Masters in Education.
					</p>
					<img className="image left" src={fam} alt="my family" />
					<p>
						Right before I graduated, I met my wife and other half. She has kept me sane ever since.
						We have two beautiful children whom we do our best to keep curious and motivated.
					</p>
					<br />
					<span className="main">
						<img className="image right" src={code} alt="screen of code" />
					</span>
					<p>
						After a gratifying run in education, both as a teacher and an academic tech coach, I realized
						how powerful technology could be in changing lives. Now, as a developer, I am excited to be at
						the forefront in creating innovative tools to allow others to work more effectively.
					</p>
					<img className="image left" src={bike} height="150" alt="bicycle" />
					<img className="image right" src={studio} alt="music studio" />
					<p>
						When I'm not coding or with my family, I like to go on long bike rides or make video game sounds
						late into the night.<sub><strong>ps</strong></sub>
						<section align="left"><sub>my <sub>bleeps <sub>and <sub>bloops </sub></sub></sub></sub></section><section align="center"><br></br></section>
						<div align="center">
							<strong>&nbsp;</strong><a
								href="https://grassnose.bandcamp.com/"
								alt="bandcamp link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon fa-bandcamp" />
							</a>{' '}
							<strong>&nbsp;/&nbsp;</strong> {' '}
							<a
								href="https://soundcloud.com/grassnose"
								alt="soundcloud link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon fa-soundcloud" />
							</a><strong>&nbsp;</strong>{' '}
							<strong>&nbsp;/&nbsp;</strong> {' '}
							<a
								href="https://clyp.it/user/3b2ltmbv"
								alt="clyp.it link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon fa-music" />
							</a><strong></strong>{' '}
						</div>
					</p>
					{close}
				</article >
			</div >
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
