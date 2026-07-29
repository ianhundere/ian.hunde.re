import React from 'react';
import PropTypes from 'prop-types';

const resume = '/IanHundereResume.pdf';

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="content">
            <div className="inner">
                <h1>Ian Hundere</h1>
                <h4>Lead DevOps<strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>{' '}SRE{' '}<strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>{' '}Platform</h4>
                <h2>Engineer</h2>
                <h4>software supply-chain security</h4>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            props.onOpenArticle('about');
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#work"
                        onClick={(e) => {
                            e.preventDefault();
                            props.onOpenArticle('work');
                        }}
                    >
                        Work
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            props.onOpenArticle('contact');
                        }}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
};

export default Header;

