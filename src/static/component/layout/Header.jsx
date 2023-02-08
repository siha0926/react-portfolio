import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="inner">
                <h1>
                    <a href="/">
                        AnBoYoung
                    </a>
                </h1>
                <nav>
                    <a href="/">Main</a>
                    <a href="/">About</a>
                    <a href="/">Skill</a>
                    <a href="/">Portfolio</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;