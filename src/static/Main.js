import React, { useEffect } from 'react';
import Header from './component/layout/Header'
import Visual from './component/main/Visual'
import About from './component/main/About'
import Skill from './component/main/Skill'
import Portfolio from './component/main/Portfolio'


const Main = () => {
    const headerScroll = () => {
    if (window.scrollY < 100) {
        document.querySelector('header').classList.remove('scroll')
    }
    if (window.scrollY >= 100) {
        document.querySelector('header').classList.add('scroll')
    }
    }

    useEffect(() => {
        document.addEventListener('scroll', headerScroll)
    return () => {
        window.removeEventListener('scroll', headerScroll)
        }
    }, [])
    return (
        <>
            <Header />
            <Visual />
            <About />
            <Skill />
            <Portfolio />
        </>
    );
};

export default Main;