import React from 'react';
import PropTypes from 'prop-types';

import clusterGif from '../images/cluster.gif';

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
                        Born and raised in Texas, I spent late nights installing
                        whatever Linux distro was new that week and meeting
                        strangers on IRC. I headed north for undergrad in
                        Victoria, BC, where I picked up a BA in 20th Century
                        American History (from a Canadian perspective,
                        naturally). Back south, I landed at Apple in the summer
                        of 2007 — right as every employee was handed a free
                        iPhone — and stayed five years before going back to
                        school for a master's in education.
                    </p>
                    <img className="image left" src={fam} alt="my family" />
                    <p>
                        Right before graduating, I met my wife and other half;
                        she's kept me sane ever since. We have two kids we do
                        our best to keep curious, motivated, and occasionally on
                        time.
                    </p>
                    <img
                        className="image right"
                        src={code}
                        alt="screen of code"
                    />
                    <p>
                        After a gratifying run in education — teaching 4th and
                        5th graders, then coaching teachers as an academic
                        technologist (
                        <a
                            href="https://www.youtube.com/watch?v=Uc2CcrMO1W8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            video portfolio
                        </a>
                        ) — the tinkering itch won out, and around 2018 I
                        retrained and made the leap into engineering. I've been
                        doing DevOps and platform work ever since, and today I'm
                        a Lead DevOps Engineer specializing in software
                        supply-chain security, working remotely with Liatrio —
                        helping teams prove where their software actually comes
                        from. Lately that means designing private Sigstore
                        stacks, getting builds to SLSA Build Level 3 with GitHub
                        Artifact Attestations, writing a Go CLI that uses
                        Sigstore and OPA policy to decide whether an artifact
                        gets to ship, and contributing to the open source
                        projects (cosign, rekor, fulcio) that make it work.
                        Honestly, the teaching never stopped — mentoring
                        engineers is my favorite part of the job. That, and
                        getting software to show its work.
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
                        When I'm not tinkering at work or with my family, I'm
                        out on a long bike ride or up too late making video game
                        sounds. If you want proof of the latter, my bleeps and
                        bloops are below.
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
                    <h2 align="center">Software Supply-Chain Governance</h2>
                    <p>
                        My day job centers on autogov, the automated governance
                        system we build at Liatrio: artifacts ship with SLSA
                        Build Level 3 provenance through GitHub Artifact
                        Attestations, and a Go CLI verifies those attestations
                        — provenance, SBOMs, verification summaries — against
                        OPA policy before anything is allowed to deploy. The
                        reusable workflows behind it are open source.
                    </p>
                    <div align="right">
                        <a
                            href="https://github.com/liatrio/autogov-workflows"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>autogov-workflows</em>
                        </a>
                    </div>
                    <hr />
                    <h2 align="center">Sigstore Open Source</h2>
                    <p>
                        Along the way I've contributed across the Sigstore
                        ecosystem — cosign, rekor, fulcio, timestamp-authority —
                        mostly around certificate handling, timestamping, and
                        the plumbing that keeps signatures verifiable end to
                        end.
                    </p>
                    <div align="right">
                        <a
                            href="https://github.com/sigstore"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>github.com/sigstore</em>
                        </a>
                    </div>
                    <hr />
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
                        stack of media services — some public, some tucked
                        behind Tailscale. It's where work ideas get tested
                        before they're work ideas.
                    </p>
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
                    <h2 align="center">Earlier Work</h2>
                    <p>
                        Before all that: the projects from my retraining years —
                        a generative jam machine, an SMS reminder service, a
                        memory game, a synth or two — still live on GitHub, if
                        you enjoy a little archaeology.
                    </p>
                    <div align="right">
                        <a
                            href="https://github.com/ianhundere"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon fa-github" />{' '}
                            <em>github.com/ianhundere</em>
                        </a>
                    </div>
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
                            Thanks — your message is on its way. I'll get back
                            to you soon.
                        </p>
                    )}
                    {this.state.contactStatus === 'error' && (
                        <p role="status">
                            Hmm, that didn't send. Give it another try in a
                            minute, or find me on LinkedIn (link below).
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
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
