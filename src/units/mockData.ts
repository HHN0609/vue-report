import dayjs from "dayjs"
import { MonthDataTemplate } from '../types'
/**
 * 
 * @returns [0, 13]的整数
 */
const randomDepth = () => {
    return Math.floor(Math.random() * 14)
}

const randomDescription = () => {
    return Math.floor(Math.random() * 100)
}
/**
 * 
 * @param year 年份
 * @param startMonth 开始的月份
 * @param monthNum 月的个数
 * @returns MonthDataTemplate[]
 */
export default function (year: number, startMonth: number, monthNum: number): MonthDataTemplate[] {
   if(startMonth <= 0) startMonth = 1 
   const res: MonthDataTemplate[] = []
   for(let i: number = 0; i < monthNum; i++){
        let totalDays = dayjs(`${year}-${startMonth + i}`).daysInMonth()
        let obj: MonthDataTemplate = {
            month: dayjs(`${year}-${startMonth + i}`).month() + 1,
            year: dayjs(`${year}-${startMonth + i}`).year(),
            dailyMsgs: []
        }
        for(let j: number = 0; j < totalDays; j++){
            obj.dailyMsgs.push({
                depth: randomDepth(),
                description: randomDescription()
            })
        }
        res.push(obj)
   }
   return res
}