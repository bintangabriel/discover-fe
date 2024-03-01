import { format, parseISO, setDate } from "date-fns";
 
let lastDate = (Number(format(new Date(), "yyyyMMdd"))-1).toString();

export const getLastDate = () => lastDate;

export const setLastDate = (date:string) => {
    if(date === "20240300"){
        lastDate = "20240229"
    }
    else {
        lastDate = date;
    }
}