// utils/getWeekDates.js
export const getWeekDates = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    // Adjust to Monday
    const diffToMonday = (dayOfWeek + 6) % 7;
    startOfWeek.setDate(today.getDate() - diffToMonday);
    endOfWeek.setDate(today.getDate() + (6 - diffToMonday));

    // Get dates for the week
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        weekDates.push({
            day: date.toLocaleDateString('en-US', { weekday: 'short' }),
            date: date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
        });
    }

    return weekDates;
};
