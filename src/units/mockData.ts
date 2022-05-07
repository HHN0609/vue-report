import dayjs from "dayjs"
import { MonthDataTemplate } from '../types'
const randomDepth = () => {
    return Math.floor(Math.random() * 14)
}
const randomDescription = () => {
    return Math.floor(Math.random() * 100)
}
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