export type DescriptionTemplate = {
    depth: number,
    description: any
}
export type MonthDataTemplate = {
    year: number,
    month: number,
    dailyMsgs: DescriptionTemplate[]
}