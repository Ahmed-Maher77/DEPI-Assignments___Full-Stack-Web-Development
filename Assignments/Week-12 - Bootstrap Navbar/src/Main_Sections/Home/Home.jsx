import React, { useState } from "react";
import "./Home.scss";
import Modal from "../../common/Modal/Modal";

const Home = () => {
    const [showDemo, setShowDemo] = useState(false);
    return (
        <section
            id="Home"
            className="py-5"
            data-anim="fade-in"
            aria-labelledby="home-heading"
        >
            <div
                className="container d-flex flex-column align-items-center justify-content-center"
                data-anim="fade-in"
            >
                {/* Title */}
                <h1
                    id="home-heading"
                    className="text-center white-c fw-semibold"
                    data-anim="slide-up"
                    data-anim-delay="100"
                >
                    Welcome to my website
                </h1>

                {/* Description */}
                <p
                    className="text-center off-white-c mt-4"
                    style={{ maxWidth: "720px" }}
                    data-anim="slide-up"
                    data-anim-delay="200"
                >
                    I am Ahmed Maher specialized in converting ideas into
                    responsive, accessible, dynamic, interactive, fast, and
                    user-friendly websites.
                </p>

                {/* Button */}
                <button
                    className="main-btn black-btn mt-5"
                    data-anim="zoom-in"
                    data-anim-delay="300"
                    onClick={() => setShowDemo(true)}
                    aria-label="Open demo modal"
                >
                    Explore
                </button>
            </div>

            {/* Modal */}
            <Modal
                isOpen={showDemo}
                onClose={() => setShowDemo(false)}
                title="Nothing to do — it is just a demo"
            >
                <button
                    className="main-btn black-btn ms-auto"
                    onClick={() => setShowDemo(false)}
                    style={{ padding: "12px 29px" }}
                >
                    Close
                </button>
            </Modal>
        </section>
    );
};

export default Home;
