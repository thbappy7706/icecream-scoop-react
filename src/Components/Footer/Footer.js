import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={['container',classes.container].join(' ')}>
                <div>
                    Copyright &copy;2021.
                </div>
                <div className="textRight">
                    Built with <span className="red">&hearts;</span> by
                    <a
                        href="https://th-bappy.github.io/"
                        target="_blank"
                    >Tanvir Hossen Bappy</a
                    >
                </div>
            </div>
        </footer>
    );
};

export default Footer;
