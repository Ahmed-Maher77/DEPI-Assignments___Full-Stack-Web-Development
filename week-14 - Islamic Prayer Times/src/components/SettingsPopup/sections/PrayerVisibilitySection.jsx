import React from "react";
import { prayerOptions } from "../../../utils/data/prayerOptions";
import PrayerToggle from "../../PrayerToggle/PrayerToggle";

const PrayerVisibilitySection = ({
    visiblePrayers,
    onPrayerToggle,
    className,
}) => {
    return (
        <div className={`settings-section ${className}`}>
            <h3>أوقات الصلاة المراد عرضها</h3>
            <div className="prayer-toggles">
                {prayerOptions.map((prayer) => (
                    <PrayerToggle
                        key={prayer.key}
                        prayerName={prayer.name}
                        prayerKey={prayer.key}
                        isVisible={visiblePrayers[prayer.key] || false}
                        onToggle={onPrayerToggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default React.memo(PrayerVisibilitySection);
