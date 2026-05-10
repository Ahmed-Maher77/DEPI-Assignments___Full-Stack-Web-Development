import React from "react";
import "./Loader.css";

const Loader = ({ size = "medium", color = "#fff" }) => {
    const getSizeClass = () => {
        switch (size) {
            case "small":
                return "loader--small";
            case "large":
                return "loader--large";
            default:
                return "loader--medium";
        }
    };

    return (
        <div className={`loader ${getSizeClass()}`}>
            <div className="loader__spinner" style={{ borderTopColor: color }}>
                <div className="loader__spinner-inner"></div>
            </div>
            <div className="loader__text">جاري التحميل...</div>
        </div>
    );
};

export default Loader;
