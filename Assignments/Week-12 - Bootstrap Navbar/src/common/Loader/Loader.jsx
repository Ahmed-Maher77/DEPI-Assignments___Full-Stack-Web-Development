import "./Loader.scss";

const Loader = () => {
    return (
        <div
            className="app-loader"
            role="status"
            aria-live="polite"
            aria-label="Loading"
        >
            <div className="app-loader__ring">
                <span className="app-loader__segment seg-1"></span>
                <span className="app-loader__segment seg-2"></span>
                <span className="app-loader__segment seg-3"></span>
                <span className="app-loader__segment seg-4"></span>
                {/* Content */}
                <div className="app-loader__content">
                    <div className="app-loader__brand">
                        <span className="dot">D</span>
                        <span className="dot">E</span>
                        <span className="dot">P</span>
                        <span className="dot">I</span>
                    </div>
                    <div className="app-loader__text">Loading</div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
