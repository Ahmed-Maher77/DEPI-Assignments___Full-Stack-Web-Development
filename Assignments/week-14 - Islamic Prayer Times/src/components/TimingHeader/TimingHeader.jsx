import React from "react";
import CustomSelect from "../FormComponents/CustomSelect/CustomSelect";
import { citiesByCountry } from "../../utils/data/citiesByCountry";
import "./TimingHeader.css";

const cityDictionary = citiesByCountry;

// City selector and date display
const TimingHeader = ({
    onChangeCity,
    data,
    selectedCity = "cairo",
    country = "EG",
    showHijri = false,
}) => {
    const gregDate = data?.date?.gregorian?.date;
    const hijriDateRaw = data?.date?.hijri?.date; // format: DD-MM-YYYY

    const cityOptions = cityDictionary[country] || cityDictionary.EG;

    // Ensure selected city is valid for current country
    React.useEffect(() => {
        const isValid = cityOptions.some((c) => c.value === selectedCity);
        if (!isValid && cityOptions.length > 0) {
            onChangeCity(cityOptions[0].value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country]);

    const handleCityChange = (value) => {
        onChangeCity(value);
    };

    return (
        <header>
            <div className="city">
                <h1>المدينة</h1>
                <CustomSelect
                    options={cityOptions}
                    value={selectedCity}
                    onChange={handleCityChange}
                    placeholder="اختر المدينة..."
                />
            </div>

            <div className="date">
                <h1>التاريخ</h1>
                {showHijri ? (
                    <div style={{ display: "grid", lineHeight: 1.2 }}>
                        <span>{hijriDateRaw || "—"}</span>
                        <span style={{ opacity: 0.8, fontSize: "0.9em" }}>
                            {gregDate || ""}
                        </span>
                    </div>
                ) : (
                    <span>{gregDate || "—"}</span>
                )}
            </div>
        </header>
    );
};

export default React.memo(TimingHeader);
