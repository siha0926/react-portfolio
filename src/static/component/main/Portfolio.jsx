import React from 'react';
import { IMG_FST,
    IMG_POWERPLUS,
    IMG_SALLYGEN,
    IMG_LAW,
    IMG_UVPOT,
    IMG_BOILER_PC,
    IMG_BOILER_MOBILE,
    IMG_LEBATON,
    IMG_EEVEN_PC,
    IMG_EEVEN_MOBILE,
    IMG_TNP,
    IMG_ZENTECH,
    IMG_INTOCNS,
    IMG_GRYPHONTEA,
    IMG_LA_VIE_EN_ROSE,
    IMG_DOBONGGU_CENTER,
    IMG_FEELWARE,
    IMG_HUVIS,
    IMG_JAMSIL,
    IMG_CHENGEORAM,
    IMG_ON_MARKET,
    IMG_MY_MARKET,
    IMG_PARTSMALL,
    IMG_ONSURE_PC,
    IMG_ONSURE_MOBILE,
    IMG_CELLO_PC,
    IMG_CELLO_MOBILE,
    IMG_PEOPLE,
    IMG_EVERYAIR, 
    IMG_DNP, 
    IMG_PO,
    IMG_5GX_01,
    IMG_5GX_02,
    IMG_ZUTOPIA,
    IMG_FUTURES,
    IMG_STOCK,
    IMG_THANK,
    IMG_CUCKOO,
    IMG_GONG,
    IMG_SOBANG,
    IMG_ARMY_01,
    IMG_GONGSSEL,
    IMG_SOBANGCAMPUS,
    IMG_ARMY_02,
    IMG_ANSUNG,
    IMG_NGBR,
    IMG_MEGAJOB,
    IMG_EL,
    IMG_ELLISPACE,
    IMG_ELLIPARK,
    IMG_NFT_T,
    IMG_CBT } from '../../images/'

const Portfolio = () => {
    // const tabChange = () => {
    //     document.querySelector(".nav button").classList.remove("active");
    //     Element.current.classList.add("active");
    //     // document.querySelector("li").style.display = "none";
    //     // document.getElementsByClassName("y" + year).style.display = "block";
    // }
    // useEffect(() => {
    //     document.addEventListener('click', tabChange)
    // }, []);
    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            {/* <nav className='nav'>
                <button onClick={tabChange} className='active'>All</button>
                <button onClick={tabChange}>2017</button>
                <button>2018</button>
                <button>2019</button>
                <button>2020</button>
                <button>2021</button>
                <button>2022</button>
                <button>2023</button>
            </nav> */}
            <ul className='list'>
                <li>
                    <a href="http://powerplusenc.webmoa21.co.kr/eng/index.php" target="_blank" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_POWERPLUS} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>POWERPLUS <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://sallygen.com/" target="_blank" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_SALLYGEN} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>SALLYGEN <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://boiler-center.com/main.php" target="_blank" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_BOILER_PC} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>한국난방기술관리 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://boiler-center.com/mobile/" target="_blank" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_BOILER_MOBILE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>한국난방기술관리 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* http://lebaton.co.kr/mobile/ */}
                        <div className="img">
                            <img src={IMG_LEBATON} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>Lebaton <span>(쇼핑몰 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* http://tnpchemical.com/ */}
                        <div className="img">
                            <img src={IMG_TNP} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>TNP <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://zen-tech.co.kr/main.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ZENTECH} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>ZEN TECH <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* http://intocns.webmoa21.co.kr/kr/ */}
                        <div className="img">
                            <img src={IMG_INTOCNS} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>INTO CNS <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://www.gryphontea.co.kr/main.php" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_GRYPHONTEA} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>gryphontea <span>(쇼핑몰)</span></dt>
                                <dd title='진행기간'>2017년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://www.fstc.co.kr/kr/" target="_blank" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_FST} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>FST <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://haegyeol.com/" target="_blank" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_LAW} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>노무법인해결 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://www.uv-pot.com/" target="_blank" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_UVPOT} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>UVPOT <span>(기업제품홍보사이트)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* http://eeven.webmoa21.co.kr/?device=pc */}
                        <div className="img">
                            <img src={IMG_EEVEN_PC} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>EEVEN <span>(쇼핑몰 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* http://eeven.webmoa21.co.kr/?device=mobile */}
                        <div className="img">
                            <img src={IMG_EEVEN_MOBILE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>EEVEN <span>(쇼핑몰 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://lavieenrosepilates.co.kr/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_LA_VIE_EN_ROSE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>LA_VIE_EN_ROSE <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018 년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://www.dbjahwal.or.kr/mobile/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_DOBONGGU_CENTER} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>도봉지역자활센터 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://www.feelaware.com/kr/index.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_FEELWARE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>FEEL@WARE <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* http://huvisglobal.com/kr/index.asp */}
                        <div className="img full">
                            <img src={IMG_HUVIS} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>휴비스글로벌 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://www.xn--ok1bq3yjjbr8i.org/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_JAMSIL} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>잠실성당 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_CHENGEORAM} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>청어람 <span>(도서사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>앱퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ON_MARKET} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>온마켓 <span>(쇼핑몰 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>앱퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_MY_MARKET} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>마이마켓 <span>(쇼핑몰 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>앱퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img full">
                            <img src={IMG_PARTSMALL} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>parts-mall <span>(기업내부사이트)</span></dt>
                                <dd title='진행기간'>2018년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.onsure.co.kr/p/homepage/main.do" rel="noopener noreferrer">
                        <div className="img full">
                            <img src={IMG_ONSURE_PC} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>한화온슈어 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018.11~2019.02</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>JAVA</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.onsure.co.kr/m/homepage/main.do" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ONSURE_MOBILE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>한화온슈어 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2018.11~2019.02</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>JAVA</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* https://www.cellologistics.com/cellosq/web/pc/html/eng/main.html */}
                        <div className="img full">
                            <img src={IMG_CELLO_PC} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>삼성SDI - 첼로 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2019.03~2019.07</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>JAVA</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* https://www.cellologistics.com/cellosq/web/mobile/html/eng/main.html */}
                        <div className="img">
                            <img src={IMG_CELLO_MOBILE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>삼성SDI - 첼로 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2019.03~2019.07</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>JAVA</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* https://www.cellologistics.com/cellosq/web/mobile/html/eng/main.html */}
                        <div className="img full">
                            <img src={IMG_PEOPLE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>피플앤코 <span>(쇼핑몰 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>JAVA</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* https://www.every-air.com/portal/page/camp/pc/index.html */}
                        <div className="img full">
                            <img src={IMG_EVERYAIR} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>에브리에어 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>JAVA</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_DNP} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>DNP <span>(기업사이트 - 관리자)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>JAVA</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_PO} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>포카리스웨트 <span>(이벤트)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_5GX_01} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>skt 5gx - 시범서비스 <span>(이벤트)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_5GX_02} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>skt 5gx - 시범서비스 이용안내 <span>(이벤트)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>모바일 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ZUTOPIA} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>주토피아 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* https://www.futureson.net/index.asp */}
                        <div className="img">
                            <img src={IMG_FUTURES} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>퓨쳐스온 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2019년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* https://www.sstock.net/index.asp */}
                        <div className="img full">
                            <img src={IMG_STOCK} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>에스스탁 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2020년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        {/* http://www.thankyoubaek.com/ */}
                        <div className="img full">
                            <img src={IMG_THANK} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>땡큐백승배 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2020년</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img full">
                            <img src={IMG_CUCKOO} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>쿠쿠 <span>(기업사이트 - 관리자)</span></dt>
                                <dd title='진행기간'>2019년 ~ 2020년</dd>
                                <dd>PC 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.megagong.net/megagong.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_GONG} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가공무원 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://sobang.megagong.net/megagong.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_SOBANG} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가소방 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://army.megagong.net/megagong.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ARMY_01} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가군무원 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://gongssel.megagong.net/megagong.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_GONGSSEL} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가공무원학원 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://sobangcampus.megagong.net/megagong.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_SOBANGCAMPUS} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가소방학원 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://army.megagong.net/s/army/campus/index.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ARMY_02} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가군무원학원 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://ansung.megagong.net/megagong.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ANSUNG} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가기숙전문관 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://ngbr.megagong.net/megagong.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_NGBR} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가공무원 스파르타 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.megajob.co.kr/megajob.asp" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_MEGAJOB} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>메가공기업 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2021년~</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>HTML</span><span>CSS</span><span>JS</span><span>ASP</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://elgroup.kr/" rel="noopener noreferrer">
                        <div className="img full">
                            <img src={IMG_EL} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>이엘그룹 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2022.07~2022.07</dd>
                                <dd>전체 모션 100%</dd>
                                <dd title="Skill&Libraries"><span>REACT</span><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://metaverse.elpark.co.kr/" rel="noopener noreferrer">
                        <div className="img full">
                            <img src={IMG_ELLISPACE} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>ElliSPACE <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2022.07~2022.07</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>REACT</span><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="http://metaverse.elpark.co.kr/" rel="noopener noreferrer">
                        <div className="img">
                            <img src={IMG_ELLIPARK} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>엘리파크 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2022.08~2022.12</dd>
                                <dd>앱퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>REACT NATIVE</span><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://nft-t.io/" rel="noopener noreferrer">
                        <div className="img full">
                            <img src={IMG_NFT_T} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>NFT 풀페이지 <span>(기업사이트)</span></dt>
                                <dd title='진행기간'>2022.12.16~2022.12.23</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>REACT</span><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/" rel="noopener noreferrer">
                        <div className="img full">
                            <img src={IMG_CBT} alt="" />
                        </div>
                        <div className="info">
                            <dl>
                                <dt>CBT 사이트 <span>(기업사이트 - <em>폐쇄</em>)</span></dt>
                                <dd title='진행기간'>2023.01.09~2023.02.08</dd>
                                <dd>반응형 웹퍼블리싱 100%</dd>
                                <dd title="Skill&Libraries"><span>REACT</span><span>HTML</span><span>CSS</span><span>JS</span></dd>
                            </dl>
                        </div>
                    </a>
                </li>
                
            </ul>
        </div>
    );
};

export default Portfolio;