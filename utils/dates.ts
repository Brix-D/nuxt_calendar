export function getStartEndOfWeek(date: string | Date) {
    const convertedDate = date instanceof Date ? date : new Date(date);


    const weekDayOffset = convertedDate.getDay() === 0 ? 6 : convertedDate.getDay() - 1;

    const monday = new Date(convertedDate.getFullYear(), convertedDate.getMonth(), convertedDate.getDate() - weekDayOffset);
    const offsetToSunday = 6 - weekDayOffset;
    const sunday = new Date(convertedDate.getFullYear(), convertedDate.getMonth(), convertedDate.getDate() + offsetToSunday)


    return { monday, sunday };
}

export default getStartEndOfWeek;