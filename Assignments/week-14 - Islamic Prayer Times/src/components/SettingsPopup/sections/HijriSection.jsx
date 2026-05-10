import React from "react";
import ToggleSwitch from "../../FormComponents/ToggleSwitch/ToggleSwitch";

const HijriSection = ({ hijriEnabled, onHijriEnabledChange }) => {
    return (
        <div className="settings-section" style={{ padding: 16 }}>
            <h3>التاريخ الهجري</h3>
            <ToggleSwitch
                checked={hijriEnabled}
                onChange={onHijriEnabledChange}
                label="عرض التاريخ الهجري"
            />
        </div>
    );
};

export default React.memo(HijriSection);
