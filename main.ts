 //Maryam khan
 //april-15-2024
 //this program contains 100 days of coding assignments including the 45 assignments

 //DAY 1
//Q1) Install Node.js, TypeScript and VS Code on your computer.

//Q2) Personal message: store a person's name in a variable and print a message to that person.
let personName: string = "matt";
console.log("hey " + personName + ", do you want to hangout today?");

/*Q3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.*/
let name: string = "Emily";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());


//DAY 2
/*Q4) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
  Your output should look something like the following, including the quotation marks:
  Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
console.log('Leonardo da Vinci once said,"Simplicity is the ultimate sophistication"');

/* Q5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
   famous_person.Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person: string = "Leonardo da Vinci";
let message: string = ' once said,"Simplicity is the ultimate sophistication"';
console.log (famous_person + message);

/* Q6) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
   and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
   Print the name once, so the whitespace around the name is displayed. Then print the name after striping 
   the white spaces. */
let myName: string = "\t\n maryam \t\n";
console.log(myName);
console.log (myName.trim());


//DAY 3
/* Q7) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
 Be sure to enclose your operations in print statements to see the results.*/
 console.log (4+4); //addition
 console.log (9-1); //subtraction
 console.log (8*1); //multiplication
 console.log(32/4); //division

 /* Q8) you should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.*/
 console.log (4+4); //addition
 console.log (9-1); //subtraction
 console.log (8*1); //multiplication
 console.log(32/4); //division

/* Q9) Favorite Number: Store your favorite number in a variable. Then, using that variable, 
create a message that reveals your favorite number. Print that message.*/
  let favoriteNumber: number = 7;
  console.log (favoriteNumber + " is my favorite number");


//DAY 4
/* Q10) Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, 
just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.*/

/* Q11) Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/
let names: string[] = ["jade", "alex", "scarlet"];
for (let index = 0; index < names.length; index++) {
   let element = names[index];
   console.log (element);
};

/* Q12) Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same, but each message should be personalized
  with the person’s name.*/
for (let friend of names) {
   console.log ("hey "+friend+", wanna hangout today?");
};


//DAY 5
/* Q13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.” */
let favTransport: string[] = ["jeep", "motorcycle", "car"];
favTransport.forEach(favTransport => {
   console.log("I wanna buy a "+favTransport);
});

/* Q14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
inviting them to dinner. */
let invitee: string[] = ["Leonardo da Vinci", "Fyodor Dostoevsky", "Dazai Osamu"];
invitee.forEach(invitee => {
   console.log(`dear ${invitee}, would you like to join me for dinner?`);
});

/* Q15) Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of 
invitations with a replacement guest.*/
let notAttending:string = "Leonardo da Vinci";
console.log(notAttending + " is unable to attend the dinner.");
let newInvitee:string = "Albert Einstein";
invitee[invitee.indexOf (notAttending)] = newInvitee;
invitee.forEach(invitee => {
   console.log(`dear ${invitee}, would you like to join me for dinner?`);
});


//DAY 6
/* Q16) More Guests: You've found a bigger dinner table, so there's room for more guests. */
console.log("look forward to a bigger dinner party, I'll be inviting more guests.");
invitee.unshift ("Akutagawa Ryunosuke");
invitee.push ("Ranpo Edogawa");
invitee.splice(2,0,"Edgar Allan Poe");
invitee.forEach (invitee => {
   console.log(`dear ${invitee}, would you like to join me for dinner?`);
});

/* Q17) Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.*/
console.log ("unfortunately, I'm unable to invite more than two guests");
while (invitee.length >= 3) {
   let uninvited = invitee.pop();
   console.log (`my sincirest apologies, ${uninvited}, but you are no longer invited.`);
};
invitee.forEach (invitee => {
   console.log(`dear ${invitee}, you're still invited to dinner`);
});
invitee.splice (0 , invitee.length);
console.log(invitee);

/* Q18) Seeing the World: Think of at least five places in the world you’d like to visit. */
let travelSpots:string[] = ["Japan", "Germany", "Iceland", "Italy", "Norway"];
console.log(travelSpots); //original order
console.log([...travelSpots].sort()); //alphabetical order
console.log(travelSpots); //still in original order
console.log([...travelSpots].sort().reverse()); //reverse alphabetical order
console.log(travelSpots); //still in original order
travelSpots.reverse(); 
console.log(travelSpots); //original order reversed
travelSpots.reverse();
console.log(travelSpots); //changed back to original order
travelSpots.sort();
console.log(travelSpots); //original order changed to alphabetical order
travelSpots.reverse();
console.log(travelSpots); //alphabetical order reversed


//DAY 7
/* Q19) Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating
 the number of people you are inviting to dinner.*/
 let guests:string[] = ["Akutagawa Ryunosuke", "Fyodor Dostoevsky", "Ranpo Edogawa", "Dazai Osamu", "Edgar Allan Poe"];
 console.log (`I'll be inviting ${guests.length} people for dinner.`);

 /* Q20) Think of something you could store in an array. For example, you could make a list of mountains, rivers,
  countries, cities, languages, or anything else you’d like. Write a program that creates a list containing 
  these items. */
  let languages:string[] = ["Japanese", "German", "Chineese", "Arabic"];
  console.log ("i'd like to learn these languages: "+ languages);

  /* Q21)  Think of something you could store in a TypeScript Object. Write a program that creates Objects containing
   these items. */
   let student: {department:string; name:string; id:number; gpa:number} = {
      department: "Aerospace engineering",
      name: "Jake Wilder",
      id: 2112,
      gpa: 3.5,      
   };
   console.log(`"${student.name}", The student of "${student.department}" with id of "${student.id}", currently holds "${student.gpa}" GPA.`);


//DAY 8
/* Q22) Intentional Error: Try to produce an array index error in one of your programs. Correct the error before 
finishing. */
let colors:string[] = ["crimson", "lilac", "teal"];
console.log(colors[3]); //gives international error as index 3 does'nt exist (index count starts from 0 unlike length)
console.log(colors[2]); //fixing the error

/* Q23) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction
 for the results of each test. 
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
let author:string = "Akutagawa Ryunosuke";
console.log ('is author == "Akutagawa Ryunosuke"?, i predict true');
console.log (author == "Akutagawa Ryunosuke"); //1st result = true
console.log ('is author == "Fyodor Dostoevsky"?, i predict false');
console.log (author == "Fyodor Dostoevsky"); //2nd result = false
let friend:string = "scarlet";
console.log ('is friend == "scarlet"?, i predict true');
console.log (friend == "scarlet"); //3rd result = true
console.log ('is friend == "joe"?, i predict false');
console.log (friend == "joe"); //4th result = false
let pet:string = "cat";
console.log ('is pet == "cat"?, i predict true');
console.log (pet == "cat"); //5th result = true
console.log ('is pet == "fish"?, i predict false');
console.log (pet == "fish"); //6th result = false
let oddNumber:number = 13;
console.log ('is oddNumber == 13?, i predict true');
console.log (oddNumber == 13); //7th result = true
console.log ('is oddNumber == 7?, i predict false');
console.log (oddNumber == 7); //8th result = false
let symbol:string = "$";
console.log ('is symbol == "$"?, i predict true');
console.log (symbol == "$"); //9th result = true
console.log ('is symbol == "@"?, i predict false');
console.log (symbol == "@"); //10th result = false

/* Q24) More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons. */
console.log("testing equality and inequality with strings:");
let flavor:string = "mint"
console.log(flavor=="mint"); //equal or true
console.log(flavor=="Mint"); //unequal or false

console.log("testing with lowercase function:");
console.log("BOOK".toLowerCase() == "book"); //true
console.log("BOOK".toLowerCase() == "BOOK"); //false

console.log("testing equality and inequality of greaterthan, lessthan, greaterthan or equalto, and lessthan or equalto.");
let num1:number = 50;
console.log(num1>50); //unequal or false
console.log(num1>40); //equal or true
console.log(num1<60); //equal or true
console.log(num1<40); //unequal or false
console.log(num1>=50); //true
console.log(num1>=60); //false
console.log(num1>=40); //true
console.log(num1<=50); //true
console.log(num1<=60); //true
console.log(num1<=40); //false

console.log("tests using 'and' and 'or' operators:");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

let foods:string[] = ["pizza", "burger", "tacos", "nachos"];
console.log("testing wether an item is included in an array:");
console.log("does foods include tacos?: " + foods.includes("tacos")); //true
console.log("testing wether an item is not included in an array:");
console.log("does foods include burrito?: " + foods.includes("burrito")); //false


//DAY 9
/* Q25) Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
assign it a value of 'green', 'yellow', or 'red'. Write an if statement to test whether the alien’s color is green. 
If it is, print a message that the player just earned 5 points. Write one version of this program that passes the 
if test and another that fails. (The version that fails will have no output.)*/
let alien_color = "red";
if (alien_color == "green") {
   console.log("you just earned 5 points!");
};
alien_color = "green";
if (alien_color == "green") {
   console.log("you just earned 5 points!");
};


/* Q26) Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
If the alien’s color isn’t green, print a statement that the player just earned 10 points. Write one version of 
this program that runs the if block and another that runs the else block. */
if (alien_color == "green") {
   console.log("you just earned 5 points!");
} else {
   console.log("you just earned 10 points");
};
alien_color = "red";
if (alien_color == "green") {
   console.log("you just earned 5 points!");
} else {
   console.log("you just earned 10 points!");
};

/* Q27) Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. If the alien is green, 
print a message that the player earned 5 points. If the alien is yellow, print a message that the player earned 10 
points. If the alien is red, print a message that the player earned 15 points. Write three versions of this program, 
making sure each message is printed for the appropriate color alien. */
alien_color = "green";
if (alien_color == "green") {
   console.log("you earned 5 points!");
} else if (alien_color == "yellow") {
   console.log("you earned 10 points!");
} else if (alien_color == "red") {
   console.log ("you earned 15 points!");
};
alien_color = "yellow";
if (alien_color == "green") {
   console.log("you earned 5 points!");
} else if (alien_color == "yellow") {
   console.log("you earned 10 points!");
} else if (alien_color == "red") {
   console.log ("you earned 15 points!");
};
alien_color = "red";
if (alien_color == "green") {
   console.log("you earned 5 points!");
} else if (alien_color == "yellow") {
   console.log("you earned 10 points!");
} else if (alien_color == "red") {
   console.log ("you earned 15 points!");
};


//DAY 10
/* Q28) Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
 and then: If the person is less than 2 years old, print a message that the person is a baby. If the person is at least 2 
 years old but less than 4, print a message that the person is a toddler. If the person is at least 4 years old but less 
 than 13, print a message that the person is a kid. If the person is at least 13 years old but less than 20, print a 
 message that the person is a teenager. If the person is at least 20 years old but less than 65, print a message that the 
 person is an adult. */
 let age:number = 18
 if (age<2) {
   console.log("that's a baby");
 } else if (age>=2 && age<4) {
   console.log("that's a toddler");
 } else if (age>=4 && age<13) {
   console.log("that's a kid");
 } else if (age>=13 && age<20) {
   console.log("that's a teenager");
 } else if (age>=20 && age<65) {
   console.log("that's an adult");
 };  

/* Q29) Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that
check for certain fruits in your array. Make a array of your three favorite fruits and call it favorite_fruits. Write five
if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if 
block should print a statement, such as You really like bananas! */
let favorite_fruits:string[] = ["strawberry", "kiwi", "orange"];
if (favorite_fruits.includes("strawberry")) {
   console.log("i love strawberries");
};
if (favorite_fruits.includes("cherry")) {
   console.log("cherries are a winter fruit");
};
if (favorite_fruits.includes("kiwi")) {
   console.log("kiwis are sour");
};
if (favorite_fruits.includes("apple")) {
   console.log("an apple a day keeps the doctor away");
};
if (favorite_fruits.includes("orange")) {
   console.log("orange juice is tangy yet refreshing at the same time");
}; 
/* Q30) Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code 
that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to 
each user: If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status 
report? Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let user: string[] = ["admin", "ted", "alex", "jake", "ben"];
user.forEach(user => {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
});