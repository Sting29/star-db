import React from 'react';

import './ErrorIndicator.css';

import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" className="icon-error"/>
            <h4 className="boom">BOOM!</h4>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;