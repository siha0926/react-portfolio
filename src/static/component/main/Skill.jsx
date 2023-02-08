import React from 'react';
import { 
    IMG_HTML,
    IMG_CSS,
    IMG_SASS,
    IMG_STYLE_COMPONENT,
    IMG_REACT,
    IMG_JAVASCRIPT,
    IMG_JQUERY,
    IMG_SVN,
    IMG_GIT,
    IMG_SOURCETREE,
    IMG_JIRA,
    IMG_SLACK,
    IMG_ZEPLIN,
    IMG_FIGMA,
    IMG_PHOTOSHOP } from '../../images/'

const Skill = () => {
    return (
        <div className='skill'>
            <div className="inner">
                <h2>Skill</h2>
                <ul>
                    <li>
                        <i><img src={IMG_HTML} alt="html logo" /></i>
                        <strong>HTML</strong>
                    </li>
                    <li>
                        <i><img src={IMG_CSS} alt="" /></i>
                        <strong>CSS3</strong>
                    </li>
                    <li>
                        <i><img src={IMG_SASS} alt="" /></i>
                        <strong>SCSS</strong>
                    </li>
                    <li>
                        <i><img src={IMG_STYLE_COMPONENT} alt="" /></i>
                        <strong>STYLE-COMPONENT</strong>
                    </li>
                    <li>
                        <i><img src={IMG_REACT} alt="" /></i>
                        <strong>REACT</strong>
                    </li>
                    <li>
                        <i><img src={IMG_REACT} alt="" /></i>
                        <strong>REACT NATIVE</strong>
                    </li>
                    <li>
                        <i><img src={IMG_JAVASCRIPT} alt="" /></i>
                        <strong>JAVASCRIPT</strong>
                    </li>
                    <li>
                        <i><img src={IMG_JQUERY} alt="" /></i>
                        <strong>JQUERY</strong>
                    </li>
                    <li>
                        <i><img src={IMG_SVN} alt="" /></i>
                        <strong>SVN</strong>
                    </li>
                    <li>
                        <i><img src={IMG_GIT} alt="" /></i>
                        <strong>GIT</strong>
                    </li>
                    <li>
                        <i><img src={IMG_SOURCETREE} alt="" /></i>
                        <strong>SOURCETREE</strong>
                    </li>
                    <li>
                        <i><img src={IMG_JIRA} alt="" /></i>
                        <strong>JIRA</strong>
                    </li>
                    <li>
                        <i><img src={IMG_SLACK} alt="" /></i>
                        <strong>SLACK</strong>
                    </li>
                    <li>
                        <i><img src={IMG_ZEPLIN} alt="" /></i>
                        <strong>Zeplin</strong>
                    </li>
                    <li>
                        <i><img src={IMG_FIGMA} alt="" /></i>
                        <strong>Figma</strong>
                    </li>
                    <li>
                        <i><img src={IMG_PHOTOSHOP} alt="" /></i>
                        <strong>Photoshop</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skill;