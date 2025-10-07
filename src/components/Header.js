import React from 'react';
import PropTypes from 'prop-types';

const resume = '/IanHundereResume.pdf';

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="content">
            <div className="inner">
                <h1>Ian Hundere</h1>
                <h4>DevOps<strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>{' '}SRE{' '}<strong>&nbsp;&nbsp;/&nbsp;&nbsp;</strong>{' '}Platform</h4>
                <h2>Engineer</h2>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('work');
                        }}
                    >
                        About
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

