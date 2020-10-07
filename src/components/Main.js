import React from 'react';
import PropTypes from 'prop-types';

import project1 from '../images/geomindr.gif';
import project2 from '../images/parity.gif';
import project3 from '../images/eggy.gif';
import project4 from '../images/Scale-o-Rama.gif';
import project5 from '../images/oblique.gif';
import project6 from '../images/react-cital-piano.gif';
import project7 from '../images/ran-jam.gif';
import project8 from '../images/cluster.jpg';

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
                style={
                    this.props.timeout
                        ? { display: 'flex' }
                        : { display: 'none' }
                }
            >
                <article
                    id="intro"
                    className={`${
                        this.props.article === 'intro' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h1 className="major">Projects</h1>
                    <h2 align="center">Raspberry PI K3s Cluster</h2>
                    <div align="center">
                        <a
                            href="https://***REMOVED***"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="image fit"
                                src={project8}
                                alt="Link to https://***REMOVED***"
                            />
                        </a>
                    </div>
                    <p>Fun with RPI and K3s.</p>
                    <h3>Lessons Learned</h3>
                    <ul>
                        <li>ou</li>
                        <li>oui</li>
                        <li>wee</li>
                        <div align="right">
                            <strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>
                            <a
                                href="https://github.com/ianhundere/rpi-k3s"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to RPI K3s Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/rpi-k3s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to RPI K3s Repo"
                                >
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    <hr />
                    <h2 align="center">Ran-Jam</h2>
                    <div align="center">
                        <a
                            href="https://ran-jam-174homj5z.now.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="image fit"
                                src={project7}
                                alt="Link to ranjam"
                            />
                        </a>
                    </div>
                    <p>
                        A full-stack web app built with{' '}
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React
                        </a>
                        ,
                        <a
                            href="https://nodejs.org/en/ "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Node.js
                        </a>
                        ,
                        <a
                            href="https://expressjs.com/ "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            Express.js
                        </a>
                        ,
                        <a
                            href="https://www.mongodb.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MongoDB
                        </a>
                        , and
                        <a
                            href="https://tonejs.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tone.js
                        </a>
                        that allows users to jam along with randomly created
                        music. Users can also log into the app using Google
                        oAuth to save their own musical jams.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Ability to save songs</li>
                        <li>
                            Pulls samples from the FreeSound API based on a
                            search query
                        </li>
                        <li>
                            Each experience is different with the generative
                            element
                        </li>
                        <li>Choose from a variety of instruments</li>
                        <div align="right">
                            <a
                                href="https://ran-jam-174homj5z.now.sh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-laptop"
                                alt="Link to Ran-Jam"
                            >
                                <a
                                    href="https://ran-jam-174homj5z.now.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Ran-Jam"
                                >
                                    <em>Live Demo</em>
                                </a>
                            </a>
                            <strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>
                            <a
                                href="https://github.com/ianhundere/Ran-Jam"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to Ran-Jam Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/Ran-Jam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Ran-Jam Repo"
                                >
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    <hr />
                    <h2 align="center">GeoMindr</h2>
                    <p>
                        A full-stack web app with an emphasis on the backend
                        created with Node.js, Express.js, PostgreSQL,
                        JavaScript, CSS, and HTML that allows users to text a{' '}
                        <a
                            href="https://www.twilio.com/learn/twilio-101/what-is-twilio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twilio
                        </a>{' '}
                        number using{' '}
                        <a
                            href="https://ifttt.com/about"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IFTTT
                        </a>{' '}
                        to then record a reminder and their GPS coordinates.
                        This reminder gets saved in a database to be accessible
                        at a later time either via the web interface or by
                        messaging the same number to get a list of reminders.{' '}
                        <a
                            href="https://www.npmjs.com/package/bcrypt"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Bcrypt{' '}
                        </a>
                        was used to hash the user's password while
                        <a
                            href="https://www.npmjs.com/package/express-session"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            express-session{' '}
                        </a>
                        was used to keep track of whether the user was still
                        logged in or not.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Full SMS support through Twilio</li>
                        <li>
                            Create, retrieve, update, and delete reminders via
                            SMS or web interface
                        </li>
                        <li>View public reminders via web interface</li>
                        <div align="right">
                            <a
                                href="https://github.com/ianhundere/GeoMindr"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to GeoMindr Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/GeoMindr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to GeoMindr Repo"
                                >
                                    {' '}
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    <hr />
                    <h2 align="center">Parity</h2>
                    <a
                        href="https://paritymemorygame-aaly8t3wc.now.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="image main"
                            src={project2}
                            alt="Link to the Parity Memory Game"
                        />
                    </a>
                    <p>
                        A front-end memory game created with JavaScript, CSS,
                        and HTML where the user matches tiles based on pictures
                        and sounds pulled randomly from two APIs (
                        <a
                            href="https://freesound.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Free Sound
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://https://unsplash.com/.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Unsplash Image
                        </a>
                        ) making every gaming experience unique.
                    </p>
                    <p />
                    <h3>Features</h3>
                    <ul>
                        <li>
                            Progressive level system that allows users to play 5
                            levels of increasing difficulty
                        </li>
                        <li>
                            Match either image or sound; excellent for
                            accessibility
                        </li>
                        <li>
                            Change between themes after each level completion or
                            failure
                        </li>
                        <div align="right">
                            <a
                                href="https://paritymemorygame-aaly8t3wc.now.sh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-laptop"
                                alt="Link to Parity"
                            >
                                <a
                                    href="https://paritymemorygame-aaly8t3wc.now.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Parity"
                                >
                                    {' '}
                                    <em>Live Demo</em>
                                </a>
                            </a>
                            <strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>
                            <a
                                href="https://github.com/ianhundere/parity-memory-game"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to Parity Memory Game Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/parity-memory-game"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Parity Memory Game Repo"
                                >
                                    {' '}
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    <hr />
                    <h2 align="center">React-Cital Piano</h2>
                    <a
                        href="https://react-cital-piano-ge90qfy7t.now.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="image main"
                            src={project6}
                            alt="Link to React-Cital Piano"
                        />
                    </a>
                    <p>
                        A front-end synthesizer built using React and (
                        <a
                            href="http://tonejs.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tone.js
                        </a>
                        ). The user is given 2 octaves to play with as well as
                        sheet music and a metronome to better help them
                        understand music theory.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Keys controlled via mouse or QWERTY keyboard </li>
                        <li>
                            Each key held down lights up pink to inform the user
                            what keys are pressed
                        </li>
                        <li>Multiple keys can be pressed</li>
                        <div align="right">
                            <a
                                href="https://react-cital-piano-ge90qfy7t.now.sh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-laptop"
                                alt="Link to React-Cital Piano"
                            >
                                <a
                                    href="https://react-cital-piano-ge90qfy7t.now.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to React-Cital Piano"
                                >
                                    {' '}
                                    <em>Live Demo</em>
                                </a>
                            </a>
                            <strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>
                            <a
                                href="https://github.com/ianhundere/React-Cital-Piano"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to React-Cital Piano Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/React-Cital-Piano"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to React-Cital Piano Repo"
                                >
                                    {' '}
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    <hr />
                    <h2 align="center">Oblique Strategies</h2>
                    <a
                        href="https://oblique-strategies-gpbyfeotj.now.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div align="center">
                            <img
                                className="image fit"
                                src={project5}
                                alt="Gif of Oblique Strategies"
                            />
                        </div>
                    </a>
                    <p>
                        A very simple front-end project that displays, Oblique
                        Strategies; a card-based method for inspiring artists
                        created by Brian Eno and Peter Schmidt.
                    </p>
                    <p />
                    <h3>Features</h3>
                    <ul>
                        <li>
                            An info modal that explains what Oblique Strategies
                            is
                        </li>
                        <li>
                            Each strategy is coupled with an image from{' '}
                            <a
                                href="https://imgur.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                imgur
                            </a>{' '}
                        </li>
                        <li>Strategies / images are randomized</li>
                        <div align="right">
                            <a
                                href="https://oblique-strategies-gpbyfeotj.now.sh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-laptop"
                                alt="Link to Oblique Strategies"
                            >
                                <a
                                    href="https://oblique-strategies-gpbyfeotj.now.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Oblique Strategies"
                                >
                                    {' '}
                                    <em>Live Demo</em>
                                </a>
                            </a>
                            <strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>
                            <a
                                href="https://github.com/ianhundere/oblique-strategies"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to Oblique Strategies Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/oblique-strategies"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Oblique Strategies Repo"
                                >
                                    {' '}
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    <hr />
                    <h2 align="center">
                        Eggy <sup>Mc</sup>
                        Eggy <br />
                        <sup>and</sup>
                        <sub>Friends</sub>
                    </h2>
                    <img
                        className="image main"
                        src={project3}
                        alt="Gif of Eggy Game"
                    />
                    <p>
                        A simple shoot'em up game created using Python and
                        Pygame.
                    </p>
                    <p />
                    <h3>Features</h3>
                    <ul>
                        <li>
                            Ability to travel in all 2D directions (up, down,
                            left, and right)
                        </li>
                        <li>Splash screen with instructions on how to play</li>
                        <li>A score counter / multiple lives</li>
                        <div align="right">
                            <a
                                href="https://github.com/ianhundere/Scales-O-Rama"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to Eggy Game Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/Scales-O-Rama"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Eggy Game Repo"
                                >
                                    {' '}
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    <hr />
                    <h2 align="center">
                        Scales
                        <sub>
                            <strong>-O-</strong>
                        </sub>
                        <br />
                        Rama
                    </h2>
                    <img
                        className="main image"
                        src={project4}
                        alt="Gif of Scale-O-Rama"
                    />
                    <p>
                        A simple python app that allows users to find scales
                        based on inputted notes or randomly choose scales from a
                        variety of musical modes.
                    </p>
                    <p />
                    <h3>Features</h3>
                    <ul>
                        <li>
                            Scales randomly chosen from major, minor, dorian,
                            phrygian, lydian, mixolydian, and locrian scales
                        </li>
                        <li>
                            The itertools module is used to flatten the
                            dictionary of scales into values which then allow
                            the scales to be randomized
                        </li>
                        <li>
                            If the incorrect option is chosen, the user is
                            alerted to enter either "lookup" or "random"
                        </li>
                        <div align="right">
                            <a
                                href="https://github.com/ianhundere/Scales-O-Rama"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon fa-github"
                                alt="Link to Scales-O-Rama Repo"
                            >
                                <a
                                    href="https://github.com/ianhundere/Scales-O-Rama"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="Link to Scales-O-Rama Repo"
                                >
                                    {' '}
                                    <em>GitHub Repo</em>
                                </a>
                            </a>
                        </div>
                    </ul>
                    {close}
                </article>
                <article
                    id="work"
                    className={`${
                        this.props.article === 'work' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h1 className="major">About</h1>
                    <section>
                        <img
                            className="image main"
                            src={me}
                            alt="ian hundere"
                        />
                    </section>
                    <p>
                        Born and raised in Texas, I often found myself up late
                        at night tinkering about on the computer to either
                        install the latest distro of Linux or meet new people on
                        IRC. I left Texas for my undergrad in Victoria, BC,
                        Canada, where I received a Bachelor of Arts in 20th
                        Century American History (from a Canadian perspective).
                        I came back south to connect with old friends and landed
                        a job at Apple Inc. in the summer of 2007, just as all
                        Apple employees were receiving their free iPhones. I
                        worked there for a few years until I made the choice to
                        go back to school to pursue a master's in education.
                    </p>
                    <img className="image left" src={fam} alt="my family" />
                    <p>
                        Right before I graduated, I met my wife and other half.
                        She has kept me sane ever since. We have two beautiful
                        children, whom we do our best to keep curious and
                        motivated.
                    </p>
                    <img
                        className="image right"
                        src={code}
                        alt="screen of code"
                    />
                    <p>
                        After a gratifying run in education, both as a teacher
                        and an academic tech coach (
                        <a
                            href="https://www.youtube.com/watch?v=Uc2CcrMO1W8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            video portfolio
                        </a>
                        ), I realized how powerful technology could be in
                        changing lives. Now, as a developer, I am excited to be
                        at the forefront of creating innovative tools that add
                        real value to people's lives.
                    </p>
                    <img
                        className="image left"
                        src={bike}
                        height="150"
                        alt="bicycle"
                    />
                    <img
                        className="image right"
                        src={studio}
                        alt="music studio"
                    />
                    <p>
                        When I'm not tinkering at work or with my family, I like
                        to go on long bike rides or make video game sounds late
                        into the night.
                        <sub>
                            <strong>ps</strong>
                        </sub>
                        <section align="left">
                            <sub>
                                my{' '}
                                <sub>
                                    bleeps{' '}
                                    <sub>
                                        and <sub>bloops </sub>
                                    </sub>
                                </sub>
                            </sub>
                        </section>
                        <section align="center">
                            <br />
                        </section>
                        <div align="center">
                            <strong>&nbsp;</strong>
                            <a
                                href="https://grassnose.bandcamp.com/"
                                alt="bandcamp link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon fa-bandcamp" />
                            </a>{' '}
                            <strong>&nbsp;/&nbsp;</strong>{' '}
                            <a
                                href="https://soundcloud.com/grassnose"
                                alt="soundcloud link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon fa-soundcloud" />
                            </a>
                            <strong>&nbsp;</strong>{' '}
                            <strong>&nbsp;/&nbsp;</strong>{' '}
                            <a
                                href="https://clyp.it/user/3b2ltmbv"
                                alt="clyp.it link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon fa-music" />
                            </a>
                            <strong />{' '}
                        </div>
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
    setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
