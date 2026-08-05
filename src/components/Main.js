import React from 'react';
import PropTypes from 'prop-types';

import clusterGif from '../images/cluster.gif';
import ranJamGif from '../images/ran-jam.gif';
import geomindrGif from '../images/geomindr.gif';
import parityGif from '../images/parity.gif';
import pianoGif from '../images/react-cital-piano.gif';
import eggyGif from '../images/eggy.gif';
import scalesGif from '../images/Scale-o-Rama.gif';

import me from '../images/ianhundere.jpg';
import fam from '../images/fam.jpeg';
import bike from '../images/bike.jpg';
import studio from '../images/studio.jpg';
import code from '../images/code.jpg';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contactStatus: 'idle' };
    }

    handleContactSubmit = (e) => {
        e.preventDefault();
        const key = process.env.GATSBY_CONTACT_FORM_KEY;
        if (!key) {
            this.setState({ contactStatus: 'error' });
            return;
        }
        const form = e.target;
        const data = new FormData(form);
        data.append('access_key', key);
        this.setState({ contactStatus: 'sending' });
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' },
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.success) {
                    form.reset();
                    this.setState({ contactStatus: 'success' });
                } else {
                    this.setState({ contactStatus: 'error' });
                }
            })
            .catch(() => this.setState({ contactStatus: 'error' }));
    };

    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle();
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        this.props.onCloseArticle();
                    }
                }}
                role="button"
                tabIndex={0}
                aria-label="Close article"
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
                    id="about"
                    className={`${this.props.article === 'about' ? 'active' : ''}
                        ${this.props.articleTimeout ? 'timeout' : ''}`}
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
                        born and raised in texas / late nights spent
                        installing whatever linux distro was new that week or
                        meeting strangers on irc. headed north for undergrad in
                        victoria, bc where i picked up a BA in 20th century
                        american history (from a canadian perspective,
                        naturally). came back south and landed at apple in the
                        summer of 2007, right as every employee was getting a
                        free iphone, and stayed five years before heading back
                        to school for a master's in education.
                    </p>
                    <img className="image left" src={fam} alt="my family" />
                    <p>
                        right before graduating, i met my wife + other half /
                        she's kept me sane ever since. we have two kids we do
                        our best to keep curious, motivated, and occasionally
                        on time.
                    </p>
                    <img
                        className="image right"
                        src={code}
                        alt="screen of code"
                    />
                    <p>
                        after a gratifying run in education (taught 4th + 5th
                        graders, then coached teachers as an academic
                        technologist /{' '}
                        <a
                            href="https://www.youtube.com/watch?v=Uc2CcrMO1W8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            video portfolio
                        </a>
                        ), the tinkering itch won out and around 2018 i made
                        the leap into engineering. been doing devops + platform
                        work ever since / these days i'm a lead devops engineer
                        specializing in software supply-chain security, working
                        remotely w/ liatrio, helping teams prove where their
                        software actually comes from. lately that means
                        designing private sigstore stacks, getting builds to
                        SLSA build level 3 w/ github artifact attestations,
                        writing a go cli that uses sigstore + OPA policy to
                        decide whether an artifact gets to ship, and
                        contributing to the open source projects (cosign,
                        rekor, fulcio) that make it work. honestly, the
                        teaching never stopped / mentoring engineers is my
                        favorite part of the job. that, and getting software to
                        show its work.
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
                        when i'm not tinkering at work or w/ my family, i'm
                        out on a long bike ride or up too late making video
                        game sounds. if you want proof of the latter, my bleeps
                        + bloops are below.
                    </p>
                    <div align="center">
                        <a
                            href="https://grassnose.bandcamp.com/"
                            aria-label="Bandcamp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-bandcamp" />
                        </a>{' '}
                        <strong>&nbsp;/&nbsp;</strong>{' '}
                        <a
                            href="https://soundcloud.com/grassnose"
                            aria-label="SoundCloud"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-soundcloud" />
                        </a>{' '}
                        <strong>&nbsp;/&nbsp;</strong>{' '}
                        <a
                            href="https://clyp.it/user/3b2ltmbv"
                            aria-label="Clyp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-music" />
                        </a>
                    </div>
                    {close}
                </article>
                <article
                    id="work"
                    className={`${this.props.article === 'work' ? 'active' : ''}
                        ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h1 className="major">Work</h1>
                    <h2 align="center">Industry</h2>
                    <p>
                        my day job is devops / platform / cloud infra work
                        w/ liatrio. lately a good chunk of that has been
                        autogov, the automated governance system we build
                        there: artifacts ship
                        w/ SLSA build level 3 provenance through github
                        artifact attestations, and a go cli verifies those
                        attestations (provenance, SBOMs, verification
                        summaries) against OPA policy before anything is
                        allowed to deploy. along the way i've contributed
                        across the sigstore ecosystem (
                        <a
                            href="https://github.com/sigstore/cosign/pulls?q=is%3Apr+author%3Aianhundere+is%3Amerged"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            cosign
                        </a>
                        ,{' '}
                        <a
                            href="https://github.com/sigstore/rekor/pulls?q=is%3Apr+author%3Aianhundere+is%3Amerged"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            rekor
                        </a>
                        ,{' '}
                        <a
                            href="https://github.com/sigstore/fulcio/pulls?q=is%3Apr+author%3Aianhundere+is%3Amerged"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            fulcio
                        </a>
                        ,{' '}
                        <a
                            href="https://github.com/sigstore/timestamp-authority/pulls?q=is%3Apr+author%3Aianhundere+is%3Amerged"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            timestamp-authority
                        </a>
                        ).
                    </p>
                    <h3>focus areas</h3>
                    <ul>
                        <li>
                            software supply-chain security / automated
                            governance (autogov, SLSA, Sigstore)
                        </li>
                        <li>ai enablement / agentic workflows for engineering teams</li>
                        <li>
                            app modernization / CI/CD, containers, platform and
                            cloud infrastructure / honestly anything infra +
                            devops + sre for sure.
                        </li>
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/search?q=author%3Aianhundere+is%3Apr+is%3Amerged&type=pullrequests"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>all my contributions</em>
                        </a>
                    </div>
                    <hr />
                    <h3 align="center">personal projects / built for fun</h3>
                    <h2 align="center">RPI K3s Cluster</h2>
                    <div align="center">
                        <a
                            href="https://github.com/ianhundere/rpi-k3s"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="image main"
                                src={clusterGif}
                                alt="Link to RPI K3s Repo"
                            />
                        </a>
                    </div>
                    <p>
                        The homelab: a four-node Raspberry Pi 4 Kubernetes
                        cluster running k3s, hosting a UniFi controller,
                        FileBrowser, a Ninjam server for remote jams, and a
                        stack of media services (some public, some tucked behind
                        Tailscale). It's where work ideas get tested before
                        they're work ideas.
                    </p>
                    <h3>Lessons Learned</h3>
                    <ul>
                        <li>Assume nothing</li>
                        <li>Document everything</li>
                        <li>
                            It often pays to know and understand the why behind
                            something working (or not working) before moving on
                        </li>
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere/rpi-k3s"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>GitHub Repo</em>
                        </a>
                    </div>
                    <hr />
                    <h2 align="center">Ran-Jam</h2>
                    <div align="center">
                        <a
                            href="https://github.com/ianhundere/Ran-Jam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="image main"
                                src={ranJamGif}
                                alt="Link to Ran-Jam Repo"
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
                            href="https://nodejs.org/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            Node.js
                        </a>
                        ,
                        <a
                            href="https://expressjs.com/"
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
                            {' '}
                            MongoDB
                        </a>
                        , and{' '}
                        <a
                            href="https://tonejs.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tone.js
                        </a>{' '}
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
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere/Ran-Jam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>GitHub Repo</em>
                        </a>
                    </div>
                    <hr />
                    <h2 align="center">GeoMindr</h2>
                    <div align="center">
                        <a
                            href="https://github.com/ianhundere/GeoMindr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <img
                            className="main image"
                            src={geomindrGif}
                            alt="Gif of GeoMindr"
                        />
                        </a>
                    </div>
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
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere/GeoMindr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>GitHub Repo</em>
                        </a>
                    </div>
                    <hr />
                    <h2 align="center">Parity</h2>
                    <div align="center">
                        <a
                            href="https://github.com/ianhundere/parity-memory-game"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="image main"
                                src={parityGif}
                                alt="Link to the Parity Memory Game Repo"
                            />
                        </a>
                    </div>
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
                            href="https://unsplash.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Unsplash Image
                        </a>
                        ) making every gaming experience unique.
                    </p>
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
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere/parity-memory-game"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>GitHub Repo</em>
                        </a>
                    </div>
                    <hr />
                    <h2 align="center">React-Cital Piano</h2>
                    <div align="center">
                        <a
                            href="https://github.com/ianhundere/React-Cital-Piano"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="image main"
                                src={pianoGif}
                                alt="Link to React-Cital Piano Repo"
                            />
                        </a>
                    </div>
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
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere/React-Cital-Piano"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>GitHub Repo</em>
                        </a>
                    </div>
                    <hr />
                    <h2 align="center">
                        Eggy <sup>Mc</sup>
                        Eggy <br />
                        <sup>and</sup>
                        <sub>Friends</sub>
                    </h2>
                    <div align="center">
                        <a
                            href="https://github.com/ianhundere/Eggy-McEggy-and-Friends"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <img
                            className="image main"
                            src={eggyGif}
                            alt="Gif of Eggy Game"
                        />
                        </a>
                    </div>
                    <p>
                        A simple shoot'em up game created using Python and
                        Pygame.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>
                            Ability to travel in all 2D directions (up, down,
                            left, and right)
                        </li>
                        <li>Splash screen with instructions on how to play</li>
                        <li>A score counter / multiple lives</li>
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere/Eggy-McEggy-and-Friends"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>GitHub Repo</em>
                        </a>
                    </div>
                    <hr />
                    <h2 align="center">
                        Scales
                        <sub>
                            <strong>-O-</strong>
                        </sub>
                        <br />
                        Rama
                    </h2>
                    <div align="center">
                        <a
                            href="https://github.com/ianhundere/Scales-O-Rama"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <img
                            className="main image"
                            src={scalesGif}
                            alt="Gif of Scale-O-Rama"
                        />
                        </a>
                    </div>
                    <p>
                        A simple python app that allows users to find scales
                        based on inputted notes or randomly choose scales from a
                        variety of musical modes.
                    </p>
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
                    </ul>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere/Scales-O-Rama"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>GitHub Repo</em>
                        </a>
                    </div>
                    <hr />
                    <p>
                        full history in the{' '}
                        <a
                            href="/IanHundereResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            resume
                        </a>{' '}
                        / say hi via{' '}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onSwitchArticle('contact');
                            }}
                        >
                            contact
                        </a>
                        .
                    </p>
                    {close}
                </article>
                <article
                    id="contact"
                    className={`${this.props.article === 'contact' ? 'active' : ''}
                        ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h1 className="major">Contact</h1>
                    <p>
                        i'm open to consulting / contract work. background in
                        cloud infrastructure and devops / these days focused on
                        software supply-chain security (getting software to
                        prove where it came from). if it touches how software
                        gets built, shipped, or trusted, i'm interested. tell
                        me a bit about what you're working on and i'll get back
                        to you.
                    </p>
                    <form method="post" onSubmit={this.handleContactSubmit}>
                        <input
                            type="checkbox"
                            name="botcheck"
                            tabIndex={-1}
                            autoComplete="off"
                            hidden
                        />
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                            />
                        </div>
                        <ul className="actions">
                            <li>
                                <input
                                    type="submit"
                                    value={
                                        this.state.contactStatus === 'sending'
                                            ? 'Sending…'
                                            : 'Send Message'
                                    }
                                    className="special"
                                    disabled={
                                        this.state.contactStatus === 'sending'
                                    }
                                />
                            </li>
                        </ul>
                    </form>
                    {this.state.contactStatus === 'success' && (
                        <p role="status">
                            thanks / your message is on its way. i'll get
                            back to you soon.
                        </p>
                    )}
                    {this.state.contactStatus === 'error' && (
                        <p role="status">
                            hmm, that didn't send. give it another try in a
                            minute, or find me on{' '}
                            <a
                                href="https://www.linkedin.com/in/ianhundere/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin
                            </a>
                            .
                        </p>
                    )}
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
    onSwitchArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
