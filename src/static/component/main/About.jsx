import React from 'react';
import { IMG_MY } from '../../images/'

const About = () => {
    return (
        <div className='about'>
            <div className="inner">
                <h2>About</h2>
                <div className='profileWrap'>
                    <div className="profile">
                        <img src={IMG_MY} alt="" />
                    </div>
                    <div className='myInfo'>
                        <ul>
                            <li>
                                <strong>이름</strong>
                                <p>안보영</p>
                            </li>
                            <li>
                                <strong>생일</strong>
                                <p>1992년 09월 26일</p>
                            </li>
                            <li>
                                <strong>주소</strong>
                                <p>서울</p>
                            </li>
                            <li>
                                <strong>핸드폰번호</strong>
                                <p><a href="tel:01075071484" rel="noopener noreferrer">010-7507-1484</a></p>
                            </li>
                            <li>
                                <strong>메일</strong>
                                <p><a href="mailto:qhdud1484@naver.com" rel="noopener noreferrer">qhdud1484@naver.com</a></p>
                            </li>
                        </ul>
                    </div>
                    <div className='work'>
                        <h3>경력사항</h3>
                        <ul>
                            <li>
                                이엘파크 <span>[2022.07 ~ 재직중]</span>
                                <em>☞ 재직중</em>
                            </li>
                            <li>
                                메가스터디교육 <span>[2020.06 ~ 2022.07]</span>
                                <em>☞ 2년 2개월</em>
                            </li>
                            <li>
                                소프트브리지 <span>[2019.07 ~ 2020.06]</span>
                                <em>☞ 1년</em>
                            </li>
                            <li>
                                미디어포스앤컴퍼니 <span>[2018.11 ~ 2019.06]</span>
                                <em>☞ 8개월</em>
                            </li>
                            <li>
                                개미커뮤니케이션 <span>[2018.08 ~ 2018.11]</span>
                                <em>☞ 4개월</em>
                            </li>
                            <li>
                                웹모아 <span>[2017.03 ~ 2018.05]</span>
                                <em>☞ 1년 3개월</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;