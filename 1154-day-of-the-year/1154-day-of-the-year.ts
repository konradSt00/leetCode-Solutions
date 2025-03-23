function dayOfYear(date: string): number {
    const year = parseInt(date.slice(0, 4));
    const leapYear = year % 4 === 0 && year !== 1900;
    const month = parseInt(date.slice(5, 7));
    const day = parseInt(date.slice(8, 10));
    const numberOfDays = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let result = day;
    for(let i = 0; i < month - 1; i ++) {
        result += numberOfDays[i]
    }
    return result;
};