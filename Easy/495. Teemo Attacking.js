
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length === 0) return 0

    let totalPosionedTime = 0;

    for(let i = 0; i < timeSeries.length - 1; i++){

        // calculating the difference 
        const timeGap = timeSeries[i+1] - timeSeries[i]

        totalPosionedTime += Math.min(timeGap, duration)
    }

    totalPosionedTime += duration

    return totalPosionedTime
};
const timeSeries = [1,4], duration = 2
// const timeSeries = [1,2], duration = 2
console.log(findPoisonedDuration(timeSeries, duration))
