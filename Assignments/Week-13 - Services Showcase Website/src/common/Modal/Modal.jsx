/* Reusable modal component */
import { useEffect, useRef } from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
    const modalContentRef = useRef(null);
    const previouslyFocusedElement = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Store the previously focused element
            previouslyFocusedElement.current = document.activeElement;

            // Add overflow: hidden to body to prevent scrolling
            document.body.style.overflow = "hidden";

            // Focus the modal content
            const timer = setTimeout(() => {
                modalContentRef.current?.focus();
            }, 0);

            return () => {
                clearTimeout(timer);
                // Restore overflow on close
                document.body.style.overflow = "";
                // Restore focus to previously focused element
                previouslyFocusedElement.current?.focus();
            };
        } else {
            document.body.style.overflow = ""; // Ensure scroll is restored if modal closes by other means
            previouslyFocusedElement.current?.focus();
        }
    }, [isOpen]);

    // Focus trap: keep focus within modal
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            onClose();
            return;
        }

        if (e.key === "Tab") {
            const focusableElements = modalContentRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (!focusableElements || focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="app-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            aria-describedby={title ? "modal-description" : undefined}
        >
            {/* Backdrop */}
            <div
                className="app-modal__backdrop"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Content */}
            <div
                className="app-modal__content"
                tabIndex={-1}
                ref={modalContentRef}
                onKeyDown={handleKeyDown}
            >
                {/* Close button */}
                <button
                    className="app-modal__close bg-transparent border-0"
                    aria-label="Close modal"
                    onClick={onClose}
                    type="button"
                >
                    <i className="bx bx-x" aria-hidden="true"></i>
                </button>

                {/* Title */}
                {title ? (
                    <h3 id="modal-title" className="text-center fs-5 my-4 pt-5">
                        {title}
                    </h3>
                ) : null}

                {/* Description for screen readers */}
                <div id="modal-description" className="sr-only">
                    Modal content. Press Escape to close or Tab to navigate.
                </div>

                {/* Children */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
