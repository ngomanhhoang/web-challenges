console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if(receivedPassword === SUPER_SECRET_PASSWORD) {
    console.log("Welcome! You are logged in as Brunhilde1984.")
} else {
    console.log("Access denied!")
}

// Part 2: Even / Odd
const number = 11;
if(number%2 == 0) {
    console.log("Even number: " + number)
}else {
    console.log("Odd number: " + number)
}

// Part 3: Hotdogs
const numberOfHotdogs = 5;

if(numberOfHotdogs < 5) {
    console.log("You have to pay: $" + numberOfHotdogs * 2)
}else if(numberOfHotdogs < 100) {
    console.log("You have to pay: $" + numberOfHotdogs * 1.50)
}else if(numberOfHotdogs < 1000000) {
    console.log("You have to pay: $" + numberOfHotdogs * 1)
}else {
    console.log("You have to pay: $" + numberOfHotdogs * 0.10)
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 12 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Simon";

const greeting = userName === "Archibald" ? "Hello " + userName + "!" : "Goodbye!!";

console.log(greeting);
