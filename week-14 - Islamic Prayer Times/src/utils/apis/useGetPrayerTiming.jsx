import { useEffect, useState } from "react";

const useGetPrayerTiming = (cityName, country = "EG", date, settings = {}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Convert YYYY-MM-DD to DD-MM-YYYY as required by API
                const formatToDDMMYYYY = (iso) => {
                    if (!iso) return null;
                    const [yyyy, mm, dd] = iso.split("-");
                    return `${dd}-${mm}-${yyyy}`;
                };

                const todayISO = new Date().toISOString().split("T")[0];
                const apiDate = formatToDDMMYYYY(date || todayISO);
                const params = new URLSearchParams(); // build query params
                params.set("country", country);
                params.set("city", cityName);

                if (settings.method != null)
                    params.set("method", String(settings.method));
                if (settings.school != null)
                    params.set("school", String(settings.school));
                if (settings.latitudeAdjustmentMethod != null)
                    params.set(
                        "latitudeAdjustmentMethod",
                        String(settings.latitudeAdjustmentMethod)
                    );
                if (settings.timezone)
                    params.set("timezonestring", settings.timezone);

                const url = `https://api.aladhan.com/v1/timingsByCity/${apiDate}?${params.toString()}`;
                const response = await fetch(url);

                const result = await response.json();
                if (!response.ok) {
                    setError(result.message || "Something went wrong!");
                    throw new Error(result.message || "Something went wrong!");
                }
                setData(result.data);
                setError(null);
            } catch (err) {
                setError(err.message || "Something went wrong!");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData(); // run immediately on dependency change
    }, [cityName, country, date, JSON.stringify(settings)]);

    return { isLoading, error, data };
};

export default useGetPrayerTiming;
