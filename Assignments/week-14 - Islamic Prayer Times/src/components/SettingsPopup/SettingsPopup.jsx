import React, { useState, useEffect } from "react";
import { countryOptions } from "../../utils/data/countryOptions";
import CountrySection from "./sections/CountrySection";
import DateSection from "./sections/DateSection";
import PrayerVisibilitySection from "./sections/PrayerVisibilitySection";
import CalculationSection from "./sections/CalculationSection";
import TimezoneSection from "./sections/TimezoneSection";
import HijriSection from "./sections/HijriSection";
import LocationSection from "../FormComponents/LocationSection/LocationSection";
import QiblaCompass from "../FormComponents/QiblaCompass/QiblaCompass";
import "./SettingsPopup.css";

const SettingsPopup = ({
    isOpen,
    onClose,
    currentCountry,
    onCountryChange,
    currentDate,
    onDateChange,
    visiblePrayers,
    onPrayerToggle,
    calcMethod,
    onCalcMethodChange,
    madhab,
    onMadhabChange,
    highLatitudeRule,
    onHighLatitudeRuleChange,
    timezoneAuto,
    onTimezoneAutoChange,
    timezoneOverride,
    onTimezoneOverrideChange,
    hijriEnabled,
    onHijriEnabledChange,
}) => {
    const [selectedCountry, setSelectedCountry] = useState(currentCountry);
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [isAnimating, setIsAnimating] = useState(false);
    const [location, setLocation] = useState(null);
    const [qibla, setQibla] = useState(null);

    // update the selected country when the current country changes
    useEffect(() => {
        setSelectedCountry(currentCountry);
    }, [currentCountry]);

    // update the selected date when the current date changes
    useEffect(() => {
        setSelectedDate(currentDate);
    }, [currentDate]);

    // prevent background scroll while modal is open
    useEffect(() => {
        if (isOpen) {
            // Store the current scroll position
            const scrollY = window.scrollY;
            // Apply styles to prevent scrolling
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";

            return () => {
                // restore scrolling when modal closes
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    const handleSave = () => {
        // commit local selections to parent state
        onCountryChange(selectedCountry);
        onDateChange(selectedDate);
        handleClose();
    };

    const handleCancel = () => {
        setSelectedCountry(currentCountry);
        setSelectedDate(currentDate);
        handleClose();
    };

    const handleClose = () => {
        setIsAnimating(true);
        setTimeout(() => {
            onClose();
            setIsAnimating(false);
        }, 300);
    };

    if (!isOpen) return null; // render nothing when closed

    return (
        <div
            className={`settings-popup-overlay ${
                isAnimating ? "fade-out" : ""
            }`}
            onClick={handleClose}
        >
            <div
                className={`settings-popup-container ${
                    isAnimating ? "slide-out-down" : ""
                }`}
            >
                <div
                    className="settings-popup"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ============== Header ============== */}
                    <div className="settings-popup__header">
                        <h2>الإعدادات</h2>
                        <button
                            className="settings-popup__close"
                            onClick={handleClose}
                        >
                            ✕
                        </button>
                    </div>

                    <div className="settings-popup__content">
                        <CountrySection
                            selectedCountry={selectedCountry}
                            onChange={setSelectedCountry}
                            countryOptions={countryOptions}
                        />

                        {/* ============== Date Selection ============== */}
                        <DateSection
                            selectedDate={selectedDate}
                            onChange={setSelectedDate}
                        />

                        {/* ============== Prayer Visibility ============== */}
                        <PrayerVisibilitySection
                            visiblePrayers={visiblePrayers}
                            onPrayerToggle={onPrayerToggle}
                            className="settings-popup__prayer-visibility"
                        />

                        {/* ============== Calculation Settings ============== */}
                        <CalculationSection
                            calcMethod={calcMethod}
                            onCalcMethodChange={onCalcMethodChange}
                            madhab={madhab}
                            onMadhabChange={onMadhabChange}
                            highLatitudeRule={highLatitudeRule}
                            onHighLatitudeRuleChange={onHighLatitudeRuleChange}
                        />

                        {/* ============== Timezone Settings ============== */}
                        <TimezoneSection
                            timezoneAuto={timezoneAuto}
                            onTimezoneAutoChange={onTimezoneAutoChange}
                            timezoneOverride={timezoneOverride}
                            onTimezoneOverrideChange={onTimezoneOverrideChange}
                        />

                        {/* ============== Hijri ============== */}
                        <HijriSection
                            hijriEnabled={hijriEnabled}
                            onHijriEnabledChange={onHijriEnabledChange}
                        />

                        {/* ============== Location & Qibla ============== */}
                        <LocationSection
                            onLocation={setLocation}
                            onQibla={setQibla}
                            location={location}
                        />
                        <QiblaCompass qiblaBearing={qibla} />
                    </div>

                    {/* ============== Footer Actions ============== */}
                    <div className="settings-popup__footer">
                        <button
                            className="settings-btn settings-btn--cancel"
                            onClick={handleCancel}
                        >
                            إلغاء
                        </button>
                        <button
                            className="settings-btn settings-btn--save"
                            onClick={handleSave}
                        >
                            حفظ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPopup;
