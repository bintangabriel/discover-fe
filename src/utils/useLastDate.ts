import { format, parseISO, setDate } from "date-fns";
 
let lastDate = (Number(format(new Date(), "yyyyMMdd"))-1).toString();

export const getLastDate = () => lastDate;

export const setLastDate = (date:string) => {
    // lastDate = (Number(date)- 1).toString();
    lastDate = date;
}