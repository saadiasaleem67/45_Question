//2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let firstName:string="saadia saleem"
 console.log(`hey! ${firstName} would you learn typescript?`);

//3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let firstName1:string="saadia saleem"
console.log(firstName1.toLowerCase());//small letter
console.log(firstName1.toUpperCase());//capital letter
console.log(firstName1.charAt(0).toUpperCase() + firstName1.slice(1))//tittle case Saadia saleem
console.log(firstName1.slice(0,6));//pieces

//4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log('Adolf Hilter once said "if you want a shine like a sun you have to burn like it"')

//5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string="Adolf Hilter "
let message:string="if you want a shine like a sun you have to burn like it"
console.log(`${famous_person} once said ,"${message}"`)

//6  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("hello\tworld");// \t: extra space
console.log("hello\nworld");// \n: new line

let fname:string="ibrahim\tsaleem"
let fname1:string="ibrahim\nsaleem"
console.log(fname);
console.log(fname1);

//7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

let a:number = 10
let b:number=5
console.log(a+b);
console.log(a-b);
console.log(a*b)
console.log(a/b)

//8 You should create four lines that look like this: console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.

console.log(7+1);
console.log(4*2);
console.log(10-2);
console.log(16/2);

//9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let num:number=4
console.log(`my favourit nymber is ${num}`);

//10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//adddition program
let add:number=20
let add1:number=40
console.log(`${add} + ${add1} = ${add + add1}`);

//subtractin program
let sub:number=70
let sub1:number=69
console.log(`${sub} - ${sub1} = ${sub - sub1}`);

//11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names :string[]=["farooq" , "ruquaiya" , "chotoo"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

//12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let message1:string="is the founder of using mob"
console.log(names[0] + message1)

//13 our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transport:string[]=[
    "Bike",
    "MotorCycle",
    "Scoty",
    "BMW"
]
transport.map((item)=>console.log(`I would like to own a ${item}`))

//14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let Guest:string[]=["Saadia" , "Saleem" , "Ibrahim"]
Guest.map((item)=>console.log(`Dear ${item}, I would like to invite you a wondweful dinner in my place`))

//15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let newGuest:string="Saleem"
console.log(`${newGuest} is not coming for today dinner`);
let newadd="farooq"
Guest[Guest.indexOf(newGuest)]=newadd
Guest.map((item)=>console.log(`Dear ${item}, I would like to invite you a wondweful dinner in my place`))

//16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

Guest.unshift("Ayesha")
console.log(Guest);
Guest.splice(2,0,"saleem")
console.log(Guest);
Guest.push("Muzammil")
console.log(Guest);
Guest.map((item)=>console.log(`Dear ${item}, I would like to invite you a wondweful dinner in my place`))


//17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("im inviting you a dinner");
while(Guest.length>2){
    let remove = Guest.pop()
    console.log(`Dear ${remove} you are not invited`);
}
Guest.map((item)=>console.log(`Dear ${item}, I am invite you `))
Guest.pop()
Guest.pop()
console.log(Guest);

//18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let country = ["Pakistan" , "Bangladesh" , "Indai" , "Canada" , "America" , "China" ]
console.log(country);
country.sort()
console.log(country);
country.reverse()
console.log(country);

let country1 = ["Pakistan" , "Bangladesh" , "Indai" , "Canada" , "America" , "China" ]
console.log(country1.sort());

//19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
let guest:string[] = ["Aqsa" , "Rehmat" , "Eman" , "Muqaraam"]
console.log(guest.length);

//20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let dontLike = ["mountains" , "rivers" , "countries" ]
dontLike.map((item)=>(
    console.log(item)))
    
//21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let abc :{name:string,age:number}= {name:"Diya", age:19,}
console.log(abc);

//22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let fruit = ["Apple" , "Baanan" ,"Orange" ,"Grapes"]
console.log(fruit[4]);
console.log(fruit[2]);


//23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//1
let ans:string = "Coconut"
console.log('ans ===" Coconut " ? it true otherwisecfalse');
console.log(ans =="Coconut" );
console.log(ans =="Birynai" );

//2
let asn1:number = 5
console.log('ans1 == 5 ,? it true otherwise it fase');
console.log(asn1==5);
console.log(asn1==7);
console.log(asn1==5);

//3
let ans2 = "karachi "
let ans3 = "lahore"
console.log('if(karachi === lahore)"yes" : "no"'); 

if(ans2 === "Islamabad"){
    console.log("yes");   
}
else{
    console.log("no")
}

//4
let ans4 = 3
let ans5 =6
console.log('if(ans4===3 && ans5 === 6)"Your calcucation is very good" : "oo you failed"');

if(ans4===8 && ans5 === 9){
    console.log("Your calcucation is very good");
    
}
else{
    console.log("oo you failed");
    
}
//5 
let ans6 = "hello"
console.log('if(ans6 === "hello") "great job" : "you loos"');
if(ans6 === "hello") {
    console.log("great job");  
}
else{console.log("you loss");
}
//6
let myName = "cat"
console.log(`if(myName === "cat")"click picture" : "she is not here"`)
if(myName === "dog"){console.log("click picture");}
else{console.log("she is not here");
}

//7

let ans7 = true
console.log(` if(ans7)"you enter": "out`);

if(ans7){console.log("you enter");}
else{console.log("out");}
//8
let ans8 = false
//9
//10

//24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// 1- Tests using the lower case function
let string1: string = "hello";
let string2: string = "hello";
console.log(string1 === string2);


let string3: string = "hello";
let string4: string = "world";
console.log(string3 === string4);

// 2- Tests using the lower case function
let string5: string = "HELLO";
let string6: string = "hello";
console.log(string5.toLowerCase() === string6.toLowerCase());



// 3- Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// Equality
let num1: number = 5;
let num2: number = 5;
console.log(num1 === num2);//true

// Inequality
let num3: number = 10;
let num4: number = 5;
console.log(num3 !== num4);//true

// Greater than
let num5: number = 10;
let num6: number = 5;
console.log(num5 < num6);//false

// Less than
let num7: number = 3;
let num8: number = 7;
console.log(num7 > num8);//false

// Greater than or equal to
let num9: number = 5;
let num10: number = 5;
console.log(num9 >= num10);//true

// Less than or equal to
let num11: number = 3;
let num12: number = 7;
console.log(num11 <= num12);//true


// 4- Tests using "and" and "or" operators
// "and" operator
let x: number = 5;
console.log(x > 3 && x < 10);//true

// "or" operator
let y: number = 15;
console.log(y < 10 || y > 20);//false

// 5- Test whether an item is in a array
let array1: number[] = [1, 2, 3, 4, 5];
console.log(array1.includes(3));//true


let array2: number[] = [1, 2, 3, 4, 5];
console.log(array2.includes(6));//false

// 6- Test whether an item is not in a array
let array3: number[] = [1, 2, 3, 4, 5];
console.log(!array3.includes(6));//true


//25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color ="Green"
// if(alien_color === "Green"){
//     console.log("the player just earned 5 points.");
    
// }
alien_color = "red"
if(alien_color === "Green"){
    console.log("the player just earned 5 points.");
    
}

//26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alien_color1 ="Green"
if(alien_color1 === "Green"){
    console.log("the player just earned 5 points.");
    
}
else{
    console.log("the player just earned 10 points.");
    
}
alien_color1 = "red"
if(alien_color1 === "Green"){
    console.log("the player just earned 5 points.");
    
}
else{
    console.log("the player just earned 10 points.");
    
}

//27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien

let alien_color2 ="Red"
if(alien_color2 === "Green"){
    console.log("the player just earned 5 points.");
    
}
else if(alien_color2 === "Yellow"){
    console.log("the player just earned 10 points.");
    
}
else if(alien_color2 === "Red"){
    console.log("the player just earned 15 points.");
    
}
//28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
 let age :number = 70
 if(age<2){
    console.log("the person is a baby.");
 }
else if(age>=2 && age <=4){
    console.log("the person is a toddler");
    
}
else if(age>=4 && age <13){
    console.log("the person is a  kid.");
    
}
else if(age>=13 && age <20){
    console.log("the person is a  teenager.");
    
}
else if(age>=20 && age <65){
    console.log("the person is a  adult.");
    
}
else if( age >=65){
    console.log("the person is a  elder.");
    
}

//29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let  favorite_fruits:string[] = ["apple" , "banana" ,"grapes"]
if(favorite_fruits.includes("apple")){
    console.log("Apple is your favourite fruit");
    
}
if(favorite_fruits.includes("mango")){
    console.log("Mango is not there");
    
}

if(favorite_fruits.includes("banana")){
    console.log("Banana is your favourite fruit");
    
}
if(favorite_fruits.includes("kivi")){
    console.log("kivi is not there");
    
}
if(favorite_fruits.includes("grapes")){
    console.log("Grapes is your favourite fruit");
    
}

//30  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let empolyee:string[] = ["Saadia" , "Ibrahim" ,"Farooq" ,"Saleem" ,"Ruquiya"]
for(let i=0 ; i<empolyee.length ; i++){
   if(empolyee[i] == "Saadia"){
    console.log("Hello Saadia you like to see a status report?");
   }
   else{
    console.log(empolyee[i] + ",Thank you for logging in again.");
   }
}
//31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userName:string[] = []
if(userName.length == 0){
    console.log("We need some user name");
    
}
let userName1:string[] = ["Saadia" , "Hello"]
if(userName1.length == 0){
    console.log("We need some user name");
    
}
else{
    for(let j = 1; j<userName1.length; j++){
        console.log(userName1[j]);
        
    }
}
//32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Make a list of current users
let current_users: string[] = ["John", "Alice", "Bob", "Mary", "Jane"];

// Make another list of new users
let new_users: string[] = ["Jane", "Mike", "Sarah", "Bob", "Chris"];

// Loop through the new_users list
for (let i = 0; i < new_users.length; i++) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    let new_username_lowercase = new_users[i].toLowerCase();

    // Check if the new username is already in use
    if (current_users.some(user => user.toLowerCase() === new_username_lowercase)) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}

//33  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal: string;

    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}

//34  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// Store the names of three favorite pizzas in an array
let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("I really love pizza!");

//35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let Animals:string[] = ["Cat" , "Dog" ,"Horse"]
for(let m =0 ;m<Animals.length; m++){
    console.log(`A ${Animals[m]} would make a great pet. `);
    
}
console.log("Any of these animals would make a great pet!");

//36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}

make_shirt("Large", "Hello, World!");

//37  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Define the make_shirt function with default parameters
function make_shirt1(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
make_shirt1();
make_shirt1("Medium");
make_shirt1("Small", "Hello, World!");

//38 -Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function  describe_city(name:string,country:string="Pakistan"){
console.log(`${name} is in ${country}`);

}
describe_city("Karachi")
describe_city("Tokotyo" ,"Japan")
describe_city("New York" ,"USA")


//39 -City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string,countries:string):void {
    console.log(`"${city}" , "${countries}" `);   
}
city_country("Lahore" ,"Pakistan")
city_country("Bombay" ,"Indai")
city_country("Sahrja" ,"Dubai")


//40-Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// Define the make_album function with an optional parameter for number of tracks
function make_album(artist: string, album_title: string, tracks?: number):  { artist: string, album_title: string, tracks?: number } {
    let album: { artist: string, album_title: string, tracks?: number } = {
        artist: artist,
        album_title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3");

console.log(album1);
console.log(album2);
console.log(album3);
//41-Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

show_magicians(magician_names);


//42 -Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

function show_magicians1(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    
    return magicians.map(magician => `the Great megiciann is: ${magician}`);
}

let magician_names1: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

magician_names1 = make_great(magician_names1);

show_magicians1(magician_names1);

//43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



function show_magicians2(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great1(magicians: string[]): string[] {
    
    return magicians.map(magician => `the Great ${magician}`);
}

let magician_names4: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let magician_names_copy: string[] = magician_names4.slice();
let great_magicians: string[] = make_great1(magician_names_copy);
show_magicians2(magician_names4);
console.log("\nModified Magicians:");
show_magicians2(great_magicians);

//44-Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log(`- ${item}`));

    console.log("Enjoy your sandwich!\n");
}

make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese");
make_sandwich("Peanut Butter", "Jelly");

//45-Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        let key = Object.keys(option)[0];
        car[key] = option[key];
    });

    return car;
}

let my_car = create_car("Toyota", "Camry", { color: "blue" }, { year: 2023 });

console.log(my_car);


