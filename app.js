


function talk() {
  let questions = {
    "What is the capital of France?": "Paris",
    "What is the largest continent?": "Asia",
    "What is the smallest country in the world?": "Vatican City",
    "What is the name of Pakistan's capital": "Islamabad",
    "Who owns spacex": "Elon Musk",
    "Who owns tesla": "Elon Musk",
    "Who owns Daraz": "Ali Baba" ,
    "What is your return policy?": 'Our return policy allows customers to return items within 30 days of purchase, as long as the item is in its original condition.',
    'What payment methods do you accept?': 'We accept all major credit cards, PayPal, and Apple Pay.',
    'What is the delivery time for orders?': 'Delivery times can vary depending on the product and your location, but we aim to deliver within 3-5 business days.',
    'Do you offer free shipping?': 'Yes, we offer free shipping for all orders over $50.',
    'Can I track my order?': 'Yes, you can track your order by logging into your account on our website or using the tracking number we provide.',
    'Do you offer gift wrapping?': 'Yes, we offer gift wrapping for an additional fee of $5.',
    'What is your price match policy?': 'We will match the price of any identical product from a competitor within 14 days of purchase.',
    'Do you offer any discounts or promotions?': 'Yes, we often run promotions and offer discounts to our customers. Be sure to sign up for our email newsletter to stay up-to-date.',
    'What is your customer service phone number?': 'Our customer service phone number is 1-800-555-1234. We are available to take your call 24/7.',
    'What is your best-selling product?': 'Our best-selling product is our XYZ model. It has received great reviews from customers and is highly recommended.',
    'Do you offer international shipping?': 'Yes, we offer international shipping to select countries. Please check our website for a full list of eligible countries and shipping rates.',
    'Can I cancel my order?': 'Yes, you can cancel your order within 24 hours of placing it. After that, it may not be possible to cancel the order.',
    'What is your customer satisfaction guarantee?': 'We stand behind our products and offer a 100% customer satisfaction guarantee. If you are not completely satisfied with your purchase, please let us know and we will do everything we can to make it right.',
    'What is your privacy policy?': 'We take your privacy and security very seriously. Please read our privacy policy on our website for more information.',
    'Do you have a loyalty program?': 'Yes, we offer a loyalty program that rewards customers for their repeat business. You can earn points on each purchase and redeem them for discounts and other rewards.'
  };
  let para = document.getElementById("chat-bot-para");
  let question = document.getElementById("messagee").value.toLowerCase();
  let answer = "";

  for (let key in questions) {
    if (question === key.toLowerCase()) {
      answer = questions[key];
      break;
    }
    else{
      
       answer="sorry ask a relevant question!"    

    }
  }

  para.textContent = answer;
}







// IGNORE THESE 
// Just for my own practice

// var firstNum= parseInt (prompt("what is the first num"))
// var SecNum= parseInt(prompt("what is the Sec num"))
// document.write(Math.ceil(firstNum+SecNum))


//////////////////// /////////Math.round method overview ///////////////
///////////////////////////////////////////////////////////////////////

// let x=Math.random()
// console.log(x)


// let weatherr=prompt("what is the weather like there")
// if(true){
//     document.getElementById("input-names").value=("I'll recommend to take an umbrella with with you")
// }


// function hi(name){ 
//     var classs=+prompt("which class?") 
//  console.log(`hello and how are you ${name} and class        ${classs}`)
// }
// hi("taleman")

///////////////  function explaining template literral /////////////////
///////////////////////////////////////////////////////////////////////

// function sayit(name){
//     var sst= +prompt("marks?")
//     var urdu= +prompt("marks?")
//     var sci= +prompt("marks?")
//     var eng= +prompt("marks?")
//     var math= +prompt("marks?")
//     var isl= +prompt("marks?")
//     var final= sst+urdu+sci+isl+eng+math
// console.log(`hello ${name}      ${final}`)// template literral

// }
// sayit("taleman")






///////////// function explaining return statement /////////////////////
///////////////////////////////////////////////////////////////////////

// function number(a,b,c,d,e){

// return a+b+c+d+e


// }

// console.log(number(20,20,20,20,100))




////////////////// learning return in depth/////////////////////////////
///////////////////////////////////////////////////////////////////////



// function calculategrade(student1,student2,student3,student4,student5){



// var student1=student1/600*100
// var student2=student2/600*100
// var student3=student3/600*100
// var student4=student4/600*100
// var student5=student5/600*100

//   return [Math.round(student1),Math.round( student2),Math.round( student3)];
// //    getting multiple values by using return!!!
// }

// console.log(calculategrade(400,466,344,544,455))


// depth checking of function 

// function sum(a,b){
// return a*b


// }
// console.log(sum(10,10))



// checking already used functions ///////////////////////

// var tt=12
// var ttt=12
// var final=sum(tt,ttt)
// console.log(final)



// checking the implicit arrow function///////////////////////

// const sum1=(a,b)=>
// a+b*tt

// console.log(sum1(30,30))


// var num1=12
// var num2=12
// var final=num1+num2
// document.write(final) 


// checking the explicit arrow function ////////////////////////
//  const sum1=(a,b,c,d,e)=>{
// return a*b/c+d/e

//  }

//  console.log(sum1(400,120,100,100,10))




// const groceries=["soap","cotton","wood"]

// console.log([1])



// var names=prompt("your name")
// var age=parseInt(prompt("your age"))
// var Rno=parseInt(prompt("your roll no"))
// var result;
// if (names=ryan || names==hamza){
// var result=true

// }
// else{
//    var result=false
// }

// console.log(result)

// true and false checking 

// var names=prompt("your name")
// var roll=parseInt(prompt("yur noi"))
// var classs=parseInt(prompt("calss"))
// var result=roll>=classs ? "haha": "wow"
// var checking=roll>classs
// console.log(checking)
// console.log(result)




//conditional ternory operator 

// var age = 23;

// var drive= age>=20 ? 'wow':'how'
// console.log(drive)


// var car='honda'
// var house= 'big'
// var worth= car=="honda" ? 'poor':"rich"
// console.log(worth)

// var listprice=100
// var sellprice=200
// var result= listprice>sellprice
// console.log(result)

// var hamzamarks=100
// var umairmarks=101
// var correct= umairmarks>=101 ? "narks are invalid" : 'marks are valid and congreats'
// console.log(correct)


// var driver=age>=12 ?'wow':'how'

// var names=prompt("name")
// var classs="11"
// var result=names>="hastman" ? 'pass' : 'fail'
// console.log(
// typeof result
// )


// Object js 

// const valid={
// names: ["hamza,wajid,raza"],
// cars: 'civic,hummer,picanto',
// school:"bss,iqra , ilma, aptech",

// }
// console.log(valid.school,3)



// const person={

// fname:"hastman",
// sname:"jan",
// car:"audi"

// }


// document.write(person.car=="audi" ? "rich" : "poor")



// var person={
// clothes:"black",
// house:"big",
// car:"small"
// }




// var questions={
// "what is your name":"my is chat bot",
// "who are you":"I am a chat bot",
// "where are you from":"Pakistan",
// "what do you do for a living":"I am a chatbot"
// }








// var answers={
// ans1:"my name is chatbot",
// ans2:"I am a chatbot",
// ans3:"I am from pakistan",
// ans4:"I answer lullos like you"
// }















// bracket notation 

// One advantage of bracket notation is that it
//  allows you to use variables or expressions to
//   specify the property name, whereas dot notation only allows for literal property names.
//  Here is an example:


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
//   };
//   const propertyName = "firstName";
//   console.log(person[propertyName]); // "John"



//   dot notation 


// const person1 = {
//     firstName: "John1",
//     lastName: "Doe",
//     age: 310
//   };
  
//   console.log(person1.firstName); // "John"
//   console.log(person1.age); // 30

  

// quiz app 

// make some questions 
// const questions = {
//     "What is the capital of France?": "Paris",
//     "What is the largest continent?": "Asia",
//     "What is the smallest country in the world?": "Vatican City",
//     "What is the name of Pakistan's capital":"Islamabad",
//     "Who owns spacex":"Jeff Bezos",
//     "Who owns tesla":"Elon Musk",
//     "Who owns Daraz":"Ali Baba" 
//   };
  
//   make a let to store value to show score 
  // let score = 0;
  
//  for in loop to check the questions and its answers 

// object ki har property ki value aik baar
//  question mein store hogi aur hum question ki value ko print kerwasakay hai 
  // for (let question in questions) {
  //   let answer = prompt(question);
  //   let isCorrect = answer.toLowerCase() === questions[question].toLowerCase();
  //   isCorrect ? (score++, alert("Correct!")) : alert(`Sorry, the correct answer is ${questions[question]}`);
  // }
  
  // alert(`You scored ${score} out of ${Object.keys(questions).length}`);
  

// |||||||||


// for in loop depth 
// const person = { name: 'John', age: 30, gender: 'male',whale:"hale" };

// for (var taleman in person) {
//   console.log(person[taleman]);
// }



// var object={
// firstname:"taleman",
// lastname:"jan",
// Age:17,
// email:"talemanjan02@gmail.com",
// email2:"talemanjan02@gmail.com",
// email3:"talemanjan02@gmail.com"

// };




// // object ki har property ki value aik baar
// //  key mein store hogi aur hum key ki value ko print kerwasakay hai 


// for(var key in object){
// var sample=prompt(key)

// // sirf key ager likhtay ho to object mein
// // pharay properties ke name print hongay
// // aur object[key] likhtay ho to uss property ki value print hojaigi ↓



// document.write(key +" :"+ object[key]+"<br>")

// }
// ||||||||





// const todoList = [
//   { text: 'Buy groceries', completed: false },
//   { text: 'Do laundry', completed: true },
//   { text: 'Clean room', completed: false }
// ];

// function displayTodoList() {
//   todoList.forEach((todo, index) => {
//     const completedMessage = todo.completed ? 'completed' : 'not completed';
//     console.log(`${index + 1}. ${todo.text} (${completedMessage})`);
//   });
// }

// displayTodoList();


// let i=0;
// for ( i = 0; i < 100; i++) {
//   document.write(i+ "!<br>");
// }




// b variable mein text print kerwanay ka tareeqa ternary operator ke madad se 
// var a=120
// var b;

// b= "you are"+(a>=100?"true":"false");



// document.write(b)





// |||||||||||| 
// switch operator 
// Display the menu options
// console.log("Menu Options:");
// console.log("1.Home");
// console.log("2.About");
// console.log("3.Contact");

// // Prompt the user to select an option
// let option = prompt("Enter your option:");

// // Use a switch statement to navigate the menu
// switch(option) {
//   case "Home":
//     console.log("You have selected Home");
//     // execute code to display the home page
//     break;
//   case "contact":
//     console.log("You have selected contact");
//     // execute code to display the about page
//     break;
//   case "about":
//     console.log("You have selected about");
//     // execute code to display the contact page
//     break;
//   default:
//     console.log("Invalid option selected");
// }



// ||||||||||||||||||
// confirm box 
// var a=confirm("Do you like my website");


// a ?  alert('thnx'):alert("fuck off")


// function talk(){
//   var know = {
//   "Who are you" : "Hello, Codewith_random here ",
//   "How are you" : "Good :)",
//   "What can i do for you" : "Please Give us A Follow & Like.",
//   "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
//   "ok" : "Thank You So Much ",
//   "Bye" : "Okay! Will meet soon.."
//   };
//   var user = document.getElementById('userBox').value;
//   document.getElementById('chatLog').innerHTML = user + "<br>";
//   if (user in know) {
//   document.getElementById('chatLog').innerHTML = know[user] + "<br>";
//   }else{
//   document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
//   }
//   }



// // Get a reference to the div
// var myDiv = document.getElementById('my-div');

// // Add the .sticky class to the div
// myDiv.classList.add('sticky');

// // Remove the .sticky class after 5 seconds
// setTimeout(function() {
//   myDiv.classList.remove('sticky');
// }, 10000);


// Get the element that has the .sticky class


// const stickyElement = document.querySelector('.sticky');
// var myDiv = document.getElementById('my-div');

// // // Add the .sticky class to the div
// myDiv.classList.add('sticky');
// // Listen for the scroll event on the window
// window.addEventListener('scroll', function() {
//   // If the user has scrolled more than 200 pixels
//   if (window.scrollY > 2000) {
//     // Remove the .sticky class from the element
//     myDiv.classList.remove('sticky');
//   }
//  else{
//   myDiv.classList.add('sticky')
//  }
// });



// ||||||||||||||||
// simple calculator with switch operator 


// let num11 = parseInt(prompt("Enter first number: "));
// let num2 = parseInt(prompt("Enter second number: "));
// let operator = prompt("Enter operator (+, -, *, /): ");

// let result;

// switch(operator) {
//     case '+':
//         result = num11+ num2;
//         break;
//     case '-':
//         result = num11 - num2;
//         break;
//     case '*':
//         result = num11 * num2;
//         break;
//     case '/':
//         result = num11 / num2;
//         break;
//     default:
//         document.write("Invalid operator");
// }

// document.write("Result: " + result);




// var number1=parseInt(prompt("Enter a number: "));
// var number2=parseInt(prompt("Enter a number: "));
// var operator=prompt("select a operator *,+,-,/");
// var result;


// switch(operator){
//   case'*':
// result=number1*number2
//   break;
//   case'+':
// result=number1+number2

//   break;
// case'-':
// result=number1-number2

// break;

// case'/':

// result=number1/number2
// break;
// default:
//   document.write("invalid selector ")

// }



// document.write("Result is : " + result )





// ||||||||||||||||||||||

// live visit counter 



// Retrieve the current visit count from localStorage, or set it to 0 if it doesn't exist
// let visitCounty = localStorage.getItem("visitCounty");
// if (!visitCounty) {
//   visitCounty = 0;
// }

// // Increment the visit count by 1
// visitCounty++;

// // Save the updated visit count to localStorage
// localStorage.setItem("visitCounty", visitCounty);

// // Display the visit count to the user
// document.write("You have visited this page " + visitCounty + " times.");



// // get the theme preference from local storage, or default to 'light' if no preference is set
// const themePreference = localStorage.getItem('theme') || 'light';

// // set the initial theme based on the user's preference
// setTheme(themePreference);

// // add event listeners to the theme buttons
// const lightThemeButton = document.getElementById('light-theme');
// const darkThemeButton = document.getElementById('dark-theme');
// lightThemeButton.addEventListener('click', () => setTheme('light'));
// darkThemeButton.addEventListener('click', () => setTheme('dark'));

// // define a function to set the theme based on the user's preference
// function setTheme(theme) {
//   // use switch operator to handle different themes
//   switch (theme) {
//     case 'light':
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//       break;
//     case 'dark':
//       document.body.style.backgroundColor = 'black';
//       document.body.style.color = 'white';
//       break;
//     default:
//       console.error(`Invalid theme: ${theme}`);
//       return;
//   }
//   // store the user's preference in local storage
//   localStorage.setItem('theme', theme);
// }
