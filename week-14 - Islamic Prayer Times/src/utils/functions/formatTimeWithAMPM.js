export const formatTimeWithAMPM = (time) => {
    if (!time) return "";

    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);

    if (hour === 0) {
        return `12:${minutes} AM`;
    } else if (hour < 12) {
        return `${time} AM`;
    } else if (hour === 12) {
        return `${time} PM`;
    } else {
        const pmHour = hour - 12;
        return `${pmHour}:${minutes} PM`;
    }
};
