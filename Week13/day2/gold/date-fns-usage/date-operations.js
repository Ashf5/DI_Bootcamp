
import { format, addDays } from 'date-fns';

export function getFiveDaysFromNow() {
    let today = new Date();
    let fiveDays = addDays(today, 5);
    let fiveDaysFormatted = format(fiveDays, 'dd-mm-yyyy');
    console.log(fiveDaysFormatted);
    
    
}
