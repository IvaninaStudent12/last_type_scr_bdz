import React from 'react';
import backgroundImage from '/last_typescr_bdz/frontend/src/assets/main_bkgd_train.jpeg';

const BackgroundImage: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.7,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        ></div>
    );
};

export default BackgroundImage;
