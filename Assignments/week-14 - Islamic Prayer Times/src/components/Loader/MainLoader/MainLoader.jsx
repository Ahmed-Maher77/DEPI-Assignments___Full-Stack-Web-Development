import React from "react";
import "./MainLoader.css";
import Loader from "../Loader";

const MainLoader = () => {
    return (
        <div className="main-loader">
            <Loader size="large" />
        </div>
    );
};

export default MainLoader;
