console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.
const averageLife = 80
const dayInYear = 365
console.log("Your current age is: " + currentAge);

// 1. The total number of days the person has lived.
console.log("You have lived: " + currentAge + " years.")

// 2. The estimated number of remaining days, assuming an average life span of 80 years.
console.log("You still have : " + (averageLife - currentAge) *365 + " days to live.")

// 3. The percentage of life already lived, in relation to the expected life span.
console.log("You already lived " +  (currentAge/averageLife*100) + "% of your live")

// 4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.
console.log("The number of days the person has spent sleeping in their live: " + (averageLife*1/3*365).toFixed(0) + " days")




