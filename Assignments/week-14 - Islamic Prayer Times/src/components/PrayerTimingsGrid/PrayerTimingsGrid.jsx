import React from "react";
import PrayerTimingItem from "../PrayerTimingItem/PrayerTimingItem";

const PrayerTimingsGrid = ({ timings, visiblePrayers = {} }) => {
    const allPrayerTimes = [
        { key: "Fajr", name: "الفجر", time: timings.Fajr },
        { key: "Sunrise", name: "الشروق", time: timings.Sunrise },
        { key: "Dhuhr", name: "الظهر", time: timings.Dhuhr },
        { key: "Asr", name: "العصر", time: timings.Asr },
        { key: "Maghrib", name: "المغرب", time: timings.Maghrib },
        { key: "Isha", name: "العشاء", time: timings.Isha },
    ];

    const prayerTimes = allPrayerTimes.filter(
        (prayer) => visiblePrayers[prayer.key]
    );

    return (
        <div className="prayer-timings">
            <h2>أوقات الصلاة</h2>
            <div className="timings-grid">
                {prayerTimes.map((prayer) => (
                    <PrayerTimingItem
                        key={prayer.name}
                        prayerName={prayer.name}
                        prayerTime={prayer.time}
                    />
                ))}
            </div>
        </div>
    );
};

export default PrayerTimingsGrid;
