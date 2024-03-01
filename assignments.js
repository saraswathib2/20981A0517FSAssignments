//Task 1 : Declaring variables and assigning values.
var num1 = 10;
var num2 = 20;
var stringData = 'hello World!';
var booleanData = false;
var Array_Of_Numbers = [10, 20, 30, 40];
var tupleData = ["Typescript", 100];
var week_Days;
(function (week_Days) {
    week_Days[week_Days["Sunday"] = 1] = "Sunday";
    week_Days[week_Days["Monday"] = 2] = "Monday";
    week_Days[week_Days["Tuesday"] = 3] = "Tuesday";
    week_Days[week_Days["Wednesday"] = 4] = "Wednesday";
    week_Days[week_Days["Thursday"] = 5] = "Thursday";
    week_Days[week_Days["Friday"] = 6] = "Friday";
    week_Days[week_Days["Saturday"] = 7] = "Saturday";
})(week_Days || (week_Days = {}));
//Displaying the values of the variables.
console.log("The values of the variables are:");
console.log("num1=", num1);
console.log("num2=", num2);
console.log("stringData=", stringData);
console.log("booleanData=", booleanData);
console.log("Array_of_Numbers=", Array_Of_Numbers);
console.log("Second element of the array is:", Array_Of_Numbers[1]); //Random accessing of the elements of an array
//Accessing enum member by name.
console.log(week_Days.Monday);
//Accessing enum member by numeric value(index).
console.log(week_Days[2]);
// Task 2: Typescript functions.
//1.Function to add two numbers.
function add(num1, num2) {
    return num1 + num2;
}
var sum = add(num1, num2); //calling the function add()
console.log("\n\nThe sum of ", num1, "and", num2, "is:", sum); //displaying the result
//2.Function to capitalize the given string
function capitalize(str) {
    if (!str) {
        return str; //if string is null or empty it will resturn the string as it is.
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("\n\nThe capitalized version of the string ", stringData, "is:", capitalize(stringData));
//Creating  a variable user for the interface Person and assigning the values.
var user = {
    name: "Saraswathi",
    age: 20,
    email: "20981a0517@raghuenggcollege.in",
};
//Task 4: Creating a class and then implementing a method.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("\n\nDisplaying the information of the object created.\n");
        console.log("Car information:\nMake:", this.make, "\nModel:", this.model, "\nYear:", this.year);
    };
    return Car;
}());
// Creating an object for the class Car.
var myCar = new Car("Toyota", "Camry", 2021);
myCar.displayInfo(); // Calling the method displayInfo()
//Task 5:Generics
//Creating a generic function Which takes an array of any type and returns the reversed version of that array.
function reversedArray(arr) {
    return arr.reverse();
}
//Testing the generic function for interger array.
var num_Array = [1, 2, 3, 4, 5];
console.log("\n\nReverse of numeric array ", num_Array, "using generic function is:");
var reverse_Of_Num_Array = reversedArray(num_Array);
console.log(reverse_Of_Num_Array);
//Testing the generic function for string array.
var String_Array = ["apple", "Papaya", "orange"];
console.log("\n\nReverse of string array", String_Array, "using generic function is:");
var reverse_Of_Str_Array = reversedArray(String_Array);
console.log(reverse_Of_Str_Array);
