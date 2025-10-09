import "./App.css";
import React from "react";
import TimingList from "./components/TimingList/TimingList";
import Footer from "./components/Footer/Footer";
import MainLoader from "./components/Loader/MainLoader/MainLoader";

function App() {
    const [isAppLoading, setIsAppLoading] = React.useState(true);
    const isAppReady = !isAppLoading;

    React.useEffect(() => {
        const timer = setTimeout(() => setIsAppLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`App ${isAppReady ? "app-ready" : ""}`}>
            {isAppLoading ? (
                <div className="app-main">
                    <MainLoader />
                </div>
            ) : (
                <>
                    {/* main content */}
                    <div className="app-main">
                        <TimingList />
                    </div>
                    {/* footer */}
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
