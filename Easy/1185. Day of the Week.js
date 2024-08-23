
var dayOfTheWeek = function(day, month, year) {

    //Approach - 1
    let date = new Date(`${month}/${day}/${year}`);
    let day1 = date.toLocaleString('en-us', {weekday: 'long'});
    return day1

    //Approach - 2
    // let a=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // let date=new Date(year,month-1,day)
    // let cur=date.getDay()
    // console.log(cur)
    //  return a[cur] 
};
const day = 18, month = 7, year = 1999
console.log(dayOfTheWeek(day, month, year));
