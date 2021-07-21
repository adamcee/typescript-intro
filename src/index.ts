function hello(person: string): string {
  return `Hello, world! Hello, ' ${person}`;
}

console.log(hello('Bob'));

const SUNNY_DAY_MESSAGE: string = "It is beautiful and sunny out today!"
const NOT_SUNNY_DAY_MESSAGE: string = "It is not sunny out today."

// Put function params on separate lines as they get more verbose.
function sunnyDayMessage(
    isSunny: boolean, 
    numberOfSunnyDays: number): string {

  // Checking for our negative case first like this is called a guar.
  if (!isSunny) {
    return NOT_SUNNY_DAY_MESSAGE;
  }


  // Because of our guard, we don’t explicitly need an “else” statement.
  return `${SUNNY_DAY_MESSAGE} There have been ${numberOfSunnyDays} sunny days!`;
}

let isSunny: boolean = true;
let numberOfSunnyDays:number = 1;
console.log(`Hello! ${sunnyDayMessage(isSunny, numberOfSunnyDays)}`);