import React, { useEffect, useState } from 'react';

const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState('visual')
    const clickScrollMoveHandler = (e) => {
        const targetId = e.target.id
        document.querySelector(`.${targetId}`).scrollIntoView({ behavior: 'smooth' });
    }
  
    useEffect(() => {
        const visualOffsetTop = document.querySelector(".visual").offsetTop;
        const aboutOffsetTop = document.querySelector(".about").offsetTop;
        const skillOffsetTop = document.querySelector(".skill").offsetTop;
        const portfolioOffsetTop = document.querySelector(".portfolio").offsetTop;
        const scrollMenuEvent = () => {
            const scrollTop = Math.floor(window.scrollY)
            if (scrollTop >= visualOffsetTop && scrollTop < aboutOffsetTop) setSelectedMenu("visual")
            else if (scrollTop >= aboutOffsetTop && scrollTop < skillOffsetTop) setSelectedMenu("about")
            else if (scrollTop >= skillOffsetTop && scrollTop < portfolioOffsetTop) setSelectedMenu("skill")
            else if (scrollTop >= portfolioOffsetTop) setSelectedMenu("portfolio")
        }
            window.addEventListener('scroll', scrollMenuEvent)
        return () => {
            window.removeEventListener('scroll', scrollMenuEvent)
        }
    }, [])

    return (
        <header>
            <div className="inner">
                <h1>
                    <a href="/react-portfolio/index.html">
                        AnBoYoung
                    </a>
                </h1>
                <nav>
                    <button onClick={clickScrollMoveHandler} id="visual" className={`${selectedMenu === 'visual' ? 'active' : ""}`}>Main</button>
                    <button onClick={clickScrollMoveHandler} id="about" className={`${selectedMenu === 'about' ? 'active' : ""}`}>About</button>
                    <button onClick={clickScrollMoveHandler} id="skill" className={`${selectedMenu === 'skill' ? 'active' : ""}`}>Skill</button>
                    <button onClick={clickScrollMoveHandler} id="portfolio" className={`${selectedMenu === 'portfolio' ? 'active' : ""}`}>Portfolio</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;