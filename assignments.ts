//Task 1 : Declaring variables and assigning values.

let num1: number=10;
let num2: number=20;
let stringData: string='hello World!';
let booleanData: boolean=false;
let Array_Of_Numbers:number[]=[10, 20, 30, 40];
let tupleData:[string, number]=["Typescript",100];
enum week_Days{
    Sunday=1,   //Sunday is initialized with value 1 otherwise it will be automatically initialized with the value 0.
    Monday,     // As sunday=0, The value of monday will become 1
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}


//Displaying the values of the variables.
console.log("The values of the variables are:");
console.log("num1=",num1);
console.log("num2=",num2);
console.log("stringData=",stringData);
console.log("booleanData=",booleanData);
console.log("Array_of_Numbers=",Array_Of_Numbers);
console.log("Second element of the array is:",Array_Of_Numbers[1]) //Random accessing of the elements of an array

//Accessing enum member by name.
console.log(week_Days.Monday);

//Accessing enum member by numeric value(index).
console.log(week_Days[2]);

// Task 2: Typescript functions.

//1.Function to add two numbers.
function add(num1: number, num2: number): number{
    return num1 + num2;
}
const sum=add(num1,num2); //calling the function add()
console.log("\n\nThe sum of ", num1, "and", num2, "is:", sum);//displaying the result

//2.Function to capitalize the given string

function capitalize(str: string): string{
    if(!str){
        return str;   //if string is null or empty it will resturn the string as it is.
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log("\n\nThe capitalized version of the string ",stringData, "is:",capitalize(stringData));

//Task 3: Interfaces

interface Person{
    name: string;
    age: number;
    email: string;
}
//Creating  a variable user for the interface Person and assigning the values.
const user: Person={
    name: "Saraswathi",
    age: 20,
    email: "20981a0517@raghuenggcollege.in",
}

//Task 4: Creating a class and then implementing a method.

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model= model;
        this.year = year; 
    }

    displayInfo(): void{
        console.log("\n\nDisplaying the information of the object created.\n")
        console.log("Car information:\nMake:",this.make,"\nModel:",this.model,"\nYear:",this.year);
    }
}
// Creating an object for the class Car.
const myCar = new Car("Toyota","Camry",2021);
myCar.displayInfo(); // Calling the method displayInfo()

//Task 5:Generics

//Creating a generic function Which takes an array of any type and returns the reversed version of that array.
function reversedArray<T>(arr: T[]):T[] {
    return arr.reverse();
}

//Testing the generic function for interger array.
const num_Array:number[] = [1,2,3,4,5];
console.log("\n\nReverse of numeric array ",num_Array,"using generic function is:");
const reverse_Of_Num_Array=reversedArray(num_Array);
console.log(reverse_Of_Num_Array);

//Testing the generic function for string array.
const String_Array = ["apple", "Papaya", "orange"];
console.log("\n\nReverse of string array",String_Array,"using generic function is:");
const reverse_Of_Str_Array=reversedArray(String_Array);
console.log(reverse_Of_Str_Array);