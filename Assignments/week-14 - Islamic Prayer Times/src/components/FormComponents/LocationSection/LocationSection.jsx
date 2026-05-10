import React from "react";
import { computeQiblaBearing } from "../../../utils/functions/computeQiblaBearing";

const LocationSection = ({ onLocation, location, onQibla }) => {
    const [error, setError] = React.useState("");
    const [isLocating, setIsLocating] = React.useState(false);
    const [watching, setWatching] = React.useState(false);
    const watchRef = React.useRef(null);

    const startWatch = () => {
        setError("");
        setIsLocating(true);
        if (!navigator.geolocation) {
            setIsLocating(false);
            setError("المتصفح لا يدعم تحديد الموقع");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                const qibla = computeQiblaBearing(latitude, longitude);
                onLocation && onLocation({ latitude, longitude });
                onQibla && onQibla(qibla);
                // start watching for movement to update qibla dynamically
                try {
                    if (watchRef.current == null) {
                        watchRef.current = navigator.geolocation.watchPosition(
                            (p) => {
                                const { latitude: lat, longitude: lon } =
                                    p.coords;
                                onLocation &&
                                    onLocation({
                                        latitude: lat,
                                        longitude: lon,
                                    });
                                const qb = computeQiblaBearing(lat, lon);
                                onQibla && onQibla(qb);
                            },
                            () => {},
                            {
                                enableHighAccuracy: true,
                                timeout: 8000,
                                maximumAge: 30000,
                            }
                        );
                        setWatching(true);
                    }
                } catch {
                    console.error("Error starting watch");
                }
                setIsLocating(false);
            },
            () => {
                setIsLocating(false);
                setError("تعذر الحصول على الموقع");
            },
            { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
        );
    };

    const stopWatch = () => {
        if (
            watchRef.current != null &&
            navigator.geolocation &&
            navigator.geolocation.clearWatch
        ) {
            try {
                navigator.geolocation.clearWatch(watchRef.current);
            } catch {
                console.error("Error stopping watch");
            }
        }
        watchRef.current = null;
        setWatching(false);
        // reset current readings
        onLocation && onLocation(null);
        onQibla && onQibla(null);
        setError("");
        setIsLocating(false);
    };

    React.useEffect(() => {
        return () => {
            if (
                watchRef.current != null &&
                navigator.geolocation &&
                navigator.geolocation.clearWatch
            ) {
                try {
                    navigator.geolocation.clearWatch(watchRef.current);
                } catch {
                    console.error("Error clearing watch");
                }
            }
        };
    }, []);

    return (
        <div className="settings-section" style={{ padding: 16 }}>
            <h3>الموقع والقبلة</h3>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {!watching ? (
                    <button
                        className="settings-btn settings-btn--save"
                        onClick={startWatch}
                        disabled={isLocating}
                    >
                        {isLocating ? "جارٍ تحديد الموقع..." : "استخدم موقعي"}
                    </button>
                ) : (
                    <button
                        className="settings-btn settings-btn--cancel"
                        onClick={stopWatch}
                    >
                        إيقاف تحديد الموقع
                    </button>
                )}
                {location && (
                    <span style={{ color: "#333", fontSize: "0.95rem" }}>
                        ({location.latitude.toFixed(4)},{" "}
                        {location.longitude.toFixed(4)})
                    </span>
                )}
            </div>
            {error && (
                <div
                    style={{
                        marginTop: 8,
                        color: "#c0392b",
                        fontSize: "0.9rem",
                    }}
                >
                    {error}
                </div>
            )}
        </div>
    );
};

export default React.memo(LocationSection);
