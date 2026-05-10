import React from "react";
import ToggleSwitch from "../../FormComponents/ToggleSwitch/ToggleSwitch";

const TimezoneSection = ({
    timezoneAuto,
    onTimezoneAutoChange,
    timezoneOverride,
    onTimezoneOverrideChange,
}) => {
    return (
        <div className="settings-section" style={{ padding: 16 }}>
            <h3>المنطقة الزمنية</h3>
            <ToggleSwitch
                checked={timezoneAuto}
                onChange={onTimezoneAutoChange}
                label="كشف تلقائي"
            />
            {!timezoneAuto && (
                <input
                    placeholder="مثال: Africa/Cairo"
                    value={timezoneOverride}
                    onChange={(e) => onTimezoneOverrideChange(e.target.value)}
                    className="settings-date-input"
                    style={{ marginTop: 12 }}
                />
            )}
        </div>
    );
};

export default React.memo(TimezoneSection);
