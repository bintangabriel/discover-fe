import { format, subDays } from 'date-fns';

export const getDateList = (): string[] => {
    let datesArray:string[] = [];
    const todayDate = new Date();
    const formattedDate = format(todayDate, "yyyyMMdd");
    datesArray.push(formattedDate);

    return datesArray;
}