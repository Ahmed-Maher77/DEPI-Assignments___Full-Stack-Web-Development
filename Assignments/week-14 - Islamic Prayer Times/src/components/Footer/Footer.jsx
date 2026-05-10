import React from "react";
import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="app-footer__content">
                <span className="app-footer__copy">© {year}</span>
                <span className="app-footer__sep">•</span>
                <span className="app-footer__by">
                    Designed & developed by
                    <a
                        href="https://ahmedmaher-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-footer__link"
                        aria-label="Ahmed Maher Portfolio"
                    >
                        Ahmed Maher
                    </a>
                </span>

                <div className="app-footer__social">
                    <a
                        href="https://ahmedmaher-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-footer__icon"
                        aria-label="Portfolio"
                        title="Portfolio"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15 3h6v6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 14L21 3"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ahmed-maher-algohary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-footer__icon"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 9v10"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="6"
                                cy="5"
                                r="2"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            />
                            <path
                                d="M10 19v-6a4 4 0 0 1 8 0v6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://m.facebook.com/ahmed.maher.algohary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-footer__icon"
                        aria-label="Facebook"
                        title="Facebook"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14 9h3V6h-3a3 3 0 0 0-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1Z"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
