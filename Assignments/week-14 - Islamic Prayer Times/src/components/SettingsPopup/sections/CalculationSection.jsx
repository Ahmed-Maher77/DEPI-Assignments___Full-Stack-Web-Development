import React from "react";
import CustomSelect from "../../FormComponents/CustomSelect/CustomSelect";

const methodOptions = [
    { value: 5, label: "Egyptian General Authority" },
    { value: 2, label: "Islamic Society of North America" },
    { value: 3, label: "Muslim World League" },
    { value: 4, label: "Umm Al-Qura University, Makkah" },
    { value: 1, label: "University of Islamic Sciences, Karachi" },
    { value: 7, label: "Gulf Region" },
    { value: 8, label: "Kuwait" },
    { value: 9, label: "Qatar" },
    { value: 10, label: "Singapore" },
    { value: 11, label: "France" },
    { value: 12, label: "Turkey" },
    { value: 13, label: "Tehran" },
];

const madhabOptions = [
    { value: 0, label: "Shafi" },
    { value: 1, label: "Hanafi" },
];

const highLatOptions = [
    { value: 1, label: "MidNight" },
    { value: 2, label: "One Seventh" },
    { value: 3, label: "Angle Based" },
];

const CalculationSection = ({
    calcMethod,
    onCalcMethodChange,
    madhab,
    onMadhabChange,
    highLatitudeRule,
    onHighLatitudeRuleChange,
}) => {
    return (
        <div className="settings-section" style={{ padding: 16 }}>
            <h3>دقة الحساب</h3>
            <div style={{ display: "grid", gap: 12 }}>
                <label style={{ display: "grid", gap: 6 }}>
                    طريقة الحساب
                    <CustomSelect
                        options={methodOptions}
                        value={calcMethod}
                        onChange={onCalcMethodChange}
                        placeholder="اختر طريقة الحساب"
                    />
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                    المذهب (العصر)
                    <CustomSelect
                        options={madhabOptions}
                        value={madhab}
                        onChange={onMadhabChange}
                        placeholder="اختر المذهب"
                    />
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                    قواعد خطوط العرض العليا
                    <CustomSelect
                        options={highLatOptions}
                        value={highLatitudeRule}
                        onChange={onHighLatitudeRuleChange}
                        placeholder="اختر القاعدة"
                    />
                </label>
            </div>
        </div>
    );
};

export default React.memo(CalculationSection);
