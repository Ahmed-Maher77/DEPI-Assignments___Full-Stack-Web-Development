import React from "react";
import PrayerTimingsGrid from "../PrayerTimingsGrid/PrayerTimingsGrid";
import "../PrayerTimings/PrayerTimings.css";

const PrayerTimingsContainer = ({ timings, visiblePrayers }) => {
    if (!timings) {
        return null;
    }

    return (
        <PrayerTimingsGrid timings={timings} visiblePrayers={visiblePrayers} />
    );
};

export default PrayerTimingsContainer;
