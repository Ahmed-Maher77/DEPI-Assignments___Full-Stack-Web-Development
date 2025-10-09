import React, { useState, useRef, useEffect } from "react";
import "./CustomSelect.css";

const CustomSelect = ({
    options,
    value,
    onChange,
    placeholder = "اختر...",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || "");
    const selectRef = useRef(null);

    // update the selected value when the value prop changes
    useEffect(() => {
        setSelectedValue(value || "");
    }, [value]);

    // handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // handle option click
    const handleOptionClick = (optionValue) => {
        setSelectedValue(optionValue);
        onChange(optionValue);
        setIsOpen(false);
    };

    // get the selected option
    const selectedOption = options.find(
        (option) => option.value === selectedValue
    );

    return (
        <div className="custom-select" ref={selectRef}>
            {/* ================== Trigger ================== */}
            <div
                className={`custom-select__trigger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="custom-select__value">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <span className="custom-select__arrow">▼</span>
            </div>

            {/* ================== Options ================== */}
            {isOpen && (
                <div className="custom-select__options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`custom-select__option ${
                                selectedValue === option.value ? "selected" : ""
                            }`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
