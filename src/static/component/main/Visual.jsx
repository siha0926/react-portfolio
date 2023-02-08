import React from 'react';
import VIDEO from '../../video/video.mp4'

const Visual = () => {
    return (
        <div className='visual'>
            <video loop autoPlay muted>
                <source src={VIDEO} type="video/mp4" />
            </video>
            <div className="inner">
                <h2>
                    Wellcome.<br/>
                    한 발자국을 깊게 남기며 걸어가는 <br/>
                    웹퍼블리셔 안보영입니다.
                </h2>
            </div>
        </div>
    );
};

export default Visual;