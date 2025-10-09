import React from "react";

// Visual compass: rotating dial by device heading, fixed upward needle, Kaaba marker at absolute bearing
const QiblaCompass = ({ qiblaBearing }) => {
    const [heading, setHeading] = React.useState(0);
    const target = typeof qiblaBearing === "number" ? qiblaBearing : null;

    React.useEffect(() => {
        const handler = (e) => {
            // iOS: webkitCompassHeading (clockwise from North). Others: 360 - alpha -> compass heading.
            const raw =
                e.webkitCompassHeading != null
                    ? e.webkitCompassHeading
                    : e.alpha != null
                    ? 360 - e.alpha
                    : 0;
            const normalized = ((raw % 360) + 360) % 360;
            setHeading(normalized);
        };
        const enable = async () => {
            try {
                if (
                    typeof DeviceOrientationEvent !== "undefined" &&
                    DeviceOrientationEvent.requestPermission
                ) {
                    const res =
                        await DeviceOrientationEvent.requestPermission();
                    if (res !== "granted") return;
                }
                window.addEventListener("deviceorientation", handler);
            } catch {
                console.error("Error enabling device orientation");
            }
        };
        enable();
        return () => window.removeEventListener("deviceorientation", handler);
    }, []);

    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                gap: 10,
                padding: 16,
            }}
        >
            <div
                aria-label="Qibla compass"
                role="img"
                style={{
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    border: "2px solid rgba(0,0,0,0.15)",
                    position: "relative",
                    background: "rgba(255,255,255,0.8)",
                }}
            >
                {/* Rotating dial (by -heading) */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        transform: `rotate(${-heading}deg)`,
                        transition: "transform 120ms linear",
                        willChange: "transform",
                    }}
                    aria-hidden
                >
                    {/* North marker on dial */}
                    <div
                        style={{
                            position: "absolute",
                            top: 6,
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: 12,
                        }}
                    >
                        N
                    </div>
                    {/* Kaaba marker at absolute bearing on the dial rim */}
                    {target != null && (
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%) rotate(${target}deg) translateY(-60px)`,
                                transformOrigin: "center",
                            }}
                            aria-hidden
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Kaaba"
                            >
                                <rect
                                    x="3"
                                    y="8"
                                    width="18"
                                    height="10"
                                    rx="2"
                                    stroke="#a54f3a"
                                    strokeWidth="2"
                                    fill="#ffffff"
                                />
                                <rect
                                    x="6"
                                    y="6"
                                    width="12"
                                    height="4"
                                    rx="1"
                                    fill="#a54f3a"
                                />
                                <path
                                    d="M6 13h12"
                                    stroke="#a54f3a"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Center dot (needle pivot) */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 8,
                        height: 8,
                        background: "#a54f3a",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        boxShadow: "0 0 0 2px #fff, 0 0 0 4px rgba(0,0,0,0.08)",
                    }}
                    aria-hidden
                />

                {/* Fixed upward needle */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transformOrigin: "bottom center",
                        transform: `translate(-50%, -100%)`,
                        height: 80,
                        width: 0,
                    }}
                    aria-hidden
                >
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: -1,
                            width: 2,
                            height: 60,
                            background: "#a54f3a",
                            borderRadius: 2,
                        }}
                    />
                </div>
            </div>
            <div style={{ fontSize: "0.95rem", color: "#333" }}>
                {target == null
                    ? "اضغط على استخدم موقعي"
                    : `اتجاه القبلة: ${Math.round(target)}°`}
            </div>
        </div>
    );
};

export default React.memo(QiblaCompass);
