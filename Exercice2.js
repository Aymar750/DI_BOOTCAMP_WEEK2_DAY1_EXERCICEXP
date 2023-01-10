//part1

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength)

const myWatchedSeriesSentence =  myWatchedSeries.join();
console.log(myWatchedSeriesSentence)

console.log("I watched 3 series : "+ myWatchedSeriesSentence)

//part2

//1
const index = myWatchedSeries.indexOf("the big bang theory")
myWatchedSeries[index] = "Friends"
console.log(myWatchedSeries)
//2
myWatchedSeries.push("Games of thrones")
console.log(myWatchedSeries)
//3
myWatchedSeries.unshift("Doctor House")
console.log(myWatchedSeries)
//4
myWatchedSeries.splice(1,1)
console.log (myWatchedSeries)
//5
console.log(myWatchedSeries[1][2])
//6
console.log(myWatchedSeries)

