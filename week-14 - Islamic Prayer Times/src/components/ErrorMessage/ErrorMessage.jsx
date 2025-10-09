import React from "react";

const ErrorMessage = ({ message }) => {
    return (
        <div className="error">
            <div className="error__icon">⚠️</div>
            <div className="error__message">{message}</div>
        </div>
    );
};

export default ErrorMessage;
