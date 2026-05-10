import React from "react";
import useGetPrayerTiming from "../../utils/apis/useGetPrayerTiming";
import TimingHeader from "../TimingHeader/TimingHeader";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PrayerTimingsContainer from "../PrayerTimingsContainer/PrayerTimingsContainer";
import SettingsIcon from "../SettingsIcon/SettingsIcon";
const SettingsPopup = React.lazy(() =>
    import("../SettingsPopup/SettingsPopup")
);

const TimingList = () => {
    const [cityName, setCityName] = React.useState("cairo");
    const [country, setCountry] = React.useState("EG");
    const [selectedDate, setSelectedDate] = React.useState(
        new Date().toISOString().split("T")[0]
    );
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
    const [visiblePrayers, setVisiblePrayers] = React.useState({
        Fajr: true,
        Sunrise: false,
        Dhuhr: true,
        Asr: true,
        Maghrib: true,
        Isha: true,
    });

    // Accuracy & customization settings
    const [calcMethod, setCalcMethod] = React.useState(5); // 5 = Egyptian General Authority
    const [madhab, setMadhab] = React.useState(0); // 0 Shafi, 1 Hanafi
    const [highLatitudeRule, setHighLatitudeRule] = React.useState(1); // 1 = MidNight
    const [timezoneAuto, setTimezoneAuto] = React.useState(true);
    const [timezoneOverride, setTimezoneOverride] = React.useState("");
    const [hijriEnabled, setHijriEnabled] = React.useState(false);

    // fetch prayer timings with current settings
    const { isLoading, error, data } = useGetPrayerTiming(
        cityName,
        country,
        selectedDate,
        {
            method: calcMethod,
            school: madhab,
            latitudeAdjustmentMethod: highLatitudeRule,
            timezone: timezoneAuto
                ? Intl.DateTimeFormat().resolvedOptions().timeZone
                : timezoneOverride || undefined,
        }
    );

    // toggle visibility per prayer
    const handlePrayerToggle = (prayerKey) => {
        setVisiblePrayers((prev) => ({
            ...prev,
            [prayerKey]: !prev[prayerKey],
        }));
    };

    // render main area based on fetch state
    const renderContent = () => {
        if (isLoading) {
            return <Loader size="large" />;
        }

        if (error) {
            return <ErrorMessage message={`خطأ: ${error}`} />;
        }

        return (
            <PrayerTimingsContainer
                timings={data?.timings}
                visiblePrayers={visiblePrayers}
            />
        );
    };

    return (
        <>
            <main className="timing-list">
                <SettingsIcon
                    onClick={() => setIsSettingsOpen(true)}
                    isOpen={isSettingsOpen}
                />

                <TimingHeader
                    onChangeCity={setCityName}
                    data={data}
                    selectedCity={cityName}
                    country={country}
                    showHijri={hijriEnabled}
                />

                {renderContent()}
            </main>

            <React.Suspense fallback={null}>
                <SettingsPopup
                    isOpen={isSettingsOpen}
                    onClose={() => setIsSettingsOpen(false)}
                    currentCountry={country}
                    onCountryChange={setCountry}
                    currentDate={selectedDate}
                    onDateChange={setSelectedDate}
                    visiblePrayers={visiblePrayers}
                    onPrayerToggle={handlePrayerToggle}
                    calcMethod={calcMethod}
                    onCalcMethodChange={setCalcMethod}
                    madhab={madhab}
                    onMadhabChange={setMadhab}
                    highLatitudeRule={highLatitudeRule}
                    onHighLatitudeRuleChange={setHighLatitudeRule}
                    timezoneAuto={timezoneAuto}
                    onTimezoneAutoChange={setTimezoneAuto}
                    timezoneOverride={timezoneOverride}
                    onTimezoneOverrideChange={setTimezoneOverride}
                    hijriEnabled={hijriEnabled}
                    onHijriEnabledChange={setHijriEnabled}
                />
            </React.Suspense>
        </>
    );
};

export default TimingList;
