import React from "react";

const PrayerToggle = ({ prayerName, isVisible, onToggle, prayerKey }) => {
    const inputId = `prayer-toggle-${prayerKey}`;
    return (
        <div className="prayer-toggle">
            <label className="prayer-toggle__label" htmlFor={inputId}>
                <input
                    type="checkbox"
                    id={inputId}
                    checked={isVisible}
                    onChange={() => onToggle(prayerKey)}
                    className="prayer-toggle__checkbox"
                    role="switch"
                    aria-checked={isVisible}
                    aria-label={prayerName}
                />
                <span className="prayer-toggle__slider"></span>
                <span className="prayer-toggle__text">{prayerName}</span>
            </label>
        </div>
    );
};

export default PrayerToggle;
