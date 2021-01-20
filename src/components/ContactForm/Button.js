import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({children, onClick, ...restProps}) => {
    return (
        <div>
            <button {...restProps}>{children}</button>
        </div>
    );
};

Button.propTypes = {
    
};

export default Button;