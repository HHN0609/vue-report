import dayjs from "dayjs"
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
/**
 * 
 * @param year 年份
 * @param month 月份
 * @returns 某年每月横跨了多少个星期
 */
const getTotalWeeksInMonth = ( year: number, month: number):number => {
    const dayObj = dayjs(`${year}-${month}`)
    if(month === 12){
        let weeks = (dayObj.daysInMonth() - (7 - dayObj.startOf('month').day()) - (1 + dayObj.endOf('month').day())) / 7
        if(dayObj.startOf('month').day() !== 0){
            weeks++
        }
        if(dayObj.endOf('month').day() !== 6){
            weeks++
        }
        return weeks
    }
    return dayObj.endOf('month').week() - dayObj.startOf('month').week() + 1
}
export default getTotalWeeksInMonth