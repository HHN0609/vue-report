import dayjs from "dayjs"
import isLeapYear from 'dayjs/plugin/isLeapYear'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(isLeapYear)
dayjs.extend(weekOfYear)
const getTotalWeeksInMonth = ( year: number, month: number):number => {
    const dayObj = dayjs(`${year}-${month}`)
    return dayObj.endOf('month').week() - dayObj.startOf('month').week() + 1
}
export default getTotalWeeksInMonth