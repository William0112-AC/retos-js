function countHours(year holidays) {
    return holidays.map(holiday => {
        let date = new Date('${year}/${holiday}')
        return [1, 2, 3, 4, ,5]. includes(date.getDay())
    }).reduce((count, extraHour) => count + extraHour) * 2
}


// D 0 
// L 1
// M 2S
// M 3
// J 4
// V 5
// S 6

console.log( 4
    countHours(2022, ['01/06', '04/01', 13/25])
    )