import React from "react";

const DateSection = ({ selectedDate, onChange }) => {
    return (
        <div className="settings-section">
            <h3>التاريخ</h3>
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => onChange(e.target.value)}
                className="settings-date-input"
            />
        </div>
    );
};

export default React.memo(DateSection);
