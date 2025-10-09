// Compute initial bearing from (latitude, longitude ) to Kaaba (21.4225, 39.8262)
// Returns degrees in [0, 360)
export function computeQiblaBearing(latitude, longitude) {
    if (typeof latitude !== "number" || typeof longitude !== "number") {
        return null;
    }
    const toRad = (d) => (d * Math.PI) / 180;
    const toDeg = (r) => (r * 180) / Math.PI;

    const kaabaLat = toRad(21.4225);
    const kaabaLon = toRad(39.8262);
    const lat = toRad(latitude);
    const lon = toRad(longitude);

    const dLon = kaabaLon - lon;
    const y = Math.sin(dLon) * Math.cos(kaabaLat);
    const x =
        Math.cos(lat) * Math.sin(kaabaLat) -
        Math.sin(lat) * Math.cos(kaabaLat) * Math.cos(dLon);
    let brng = toDeg(Math.atan2(y, x));
    brng = (brng + 360) % 360;
    return brng;
}
