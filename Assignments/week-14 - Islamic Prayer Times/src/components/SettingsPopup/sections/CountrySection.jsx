import React from "react";
import CustomSelect from "../../FormComponents/CustomSelect/CustomSelect";

const CountrySection = ({ selectedCountry, onChange, countryOptions }) => {
    return (
        <div className="settings-section">
            <h3>البلد</h3>
            <CustomSelect
                options={countryOptions}
                value={selectedCountry}
                onChange={onChange}
                placeholder="اختر البلد..."
            />
        </div>
    );
};

export default React.memo(CountrySection);
