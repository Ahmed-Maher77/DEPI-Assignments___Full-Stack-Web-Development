import React from "react";
import { formatTimeWithAMPM } from "../../utils/functions/formatTimeWithAMPM";

const PrayerTimingItem = ({ prayerName, prayerTime }) => {
    return (
        <div className="timing-item">
            <span className="prayer-name">{prayerName}</span>
            <span className="prayer-time">
                {formatTimeWithAMPM(prayerTime)}
            </span>
        </div>
    );
};

export default PrayerTimingItem;
