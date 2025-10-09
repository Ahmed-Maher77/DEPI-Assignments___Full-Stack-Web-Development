import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ checked, onChange, label, id }) => {
    const switchId = id || `toggle-${Math.random().toString(36).slice(2, 9)}`;
    return (
        <label className="settings-toggle" htmlFor={switchId}>
            <input
                id={switchId}
                type="checkbox"
                className="settings-toggle__checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <span className="settings-toggle__slider" />
            {label && <span className="settings-toggle__text">{label}</span>}
        </label>
    );
};

export default ToggleSwitch;
