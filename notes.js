const animal1 = {
  names: 'bear',
  age: 45,
  color: 'red'
}
// make copy of an object; parse is used to convert json object into javascript object
const animal2 = JSON.parse(JSON.stringify(animal1));

// <-------------------------EVEN ODD------------------------->
myArray = [1,2,3,4,5,6,7,8,9,10]

for(num in myArray){
  if(num%2===0){
    console.log(`The number is Even ---> ${myArray[num]}`);
  }else{
    console.log(`The number is Odd-----> ${myArray[num]}`);
  }
}

// <-------------------------windows.confirm------------------------->
var answer = window.confirm('Choose one of the buttons'); //global Window object and confirm is a global variable which is a property of the window object 
//basically window is a global object and has many functions in it.
if (answer ===true){
  console.log('you clicked OK')
}else{
  console.log('you clicked CANCEL')
}


// <-------------------------Switch conditional------------------------->
//example 1
var answer = window.prompt('write YES, NO or YEET');

switch(answer){
  case 'YES':
    console.log('you said yes!');
    break;
  case 'NO':
    console.log('you entered no!');
    break;
  default:
    console.log('you entered something else! you sport!');
    break;
}

//example 2
var day = window.prompt('enter a day');

switch(day){
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log('you eneterd weekdays');
  break;
  case 'saturday':
  case 'sunday':
    console.log('ypu entered weekend');
  break;
  default:
    console.log('enter a proper day')
}

// <--------------------if else condition provided as a variable cryAboutIt---------------------->
var wantedGift = 'puppy', gotGift = 'puppy', cryAboutIt 

if (wantedGift === gotGift){
  console.log('yay! i got what i wanted!');
  cryAboutIt = false;
}else{
  console.log('I WANTED THAT WHYD YOU GIVE ME THAT!');
  cryAboutIt = true;
}

if (cryAboutIt){
  console.log('the chidlren are ANGRYYY!!!!');
}else{
  console.log('the childern are happy')
}

if (!cryAboutIt){
  console.log('the childern are happy!')
}else //viceversa

// <------------------------TERNARY OPERATORS---------------------------->
var photo = 'hotdog';

(photo === 'hotdog') ? console.log('HOTDOG') : console.log('NOT HOTDOG');


// <------------------------SEQUENTIAL FOR LOOP---------------------------->
for (var i=0; i<pageNames.length; i+=1){
  if(document.title===pageNames[i]){
    console.log('You are on the right page--->' + pageNames[i]);
  }else{
    console.log('youre on the wrong page----->' + pageNames[i]);
  }
}
// <------------------------FOR IN LOOP(doubt)---------------------------->
var pages = {
  first: 'Home',
  second: 'About Us',
  third: 'Contact Us',
  fourth: 'JavaScript Playground',
  fifth: 'Blog',
};

for (var p in pages){
  if (pages.hasOwnProperty(p)){
    console.log(p,pages[p]);
  };
}

// <------------------------WHILE LOOP---------------------------->
var i = 1
while (i<11){ // stop condition
  console.log(i + 'this will go on till ten.'); // outcome
  i ++; // operation 
}

//example 2
var students = ['dean','roman','seth','rogan','varun','vania'];

var person = null;

while(person !== 'seth'){
  console.log('the person is ' + students[(students.length)-1]);
  person = students.pop();
}

// <------------------------Replace function/property---------------------------->
var text = 'my name is varun dhand';
var finalResult= text.replace(/varun|dhand/gi, function (x){
  return x.toUpperCase();
});
console.log(finalResult);

//<------------------------a random function---------------------------->
function fuddify(speech){
  if (typeof speech !== 'string'){
    console.error('Nice try webbi!');
    return; //return ignores rest of the function if the above code is executed
  }
  speech = speech.replace(/r/gi,'w');
  speech = speech.replace(/R/gi,'W');

  return speech
}

var yeet = fuddify('errr rat')

console.log(yeet);

//<------------------------more random functions---------------------------->
function speakSomething(what='hey',howMany=10){ //we can specify default values like this and also by 
  // var what = (typeof what!=='undefined')? what:'Default speech';
  for (var i = 1; i < (howMany+1); i ++){
    console.log(what+' ('+i+') ')
  }
}
speakSomething('vroon',5)

//<------------------------ADDITION FUNCTION---------------------------->
//my attempt
function addingMachine(){
  var total = 0
  for(num in arguments){
    var yeet = arguments[num]
    if(typeof yeet == 'number'){
      total += yeet;
    }else{
      console.error('enter a valid number!');
    }
  }console.log('the total is '+ total);
}

addingMachine(1,2,3,4,5);

//more robust way
function addingMachine(){
  var total = 0;
  for (var i = 0; i < arguments.length; i += 1){
    var number = arguments[i];

    if (typeof number === 'number'){
      total += number;
    }
  }
  return total;
}

console.log(addingMachine(1,2,4,5,6));

//<------------------------RANDOM INTEGER---------------------------->
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//more random quesitons...
var calvin = {
  username: 'varun dhand',
  age : 19,
  type : 'non-veg'
};


function transmognifier(calvin){
  if (typeof calvin!== 'object'){
    console.error('wrong data type!');
    return;
  }
  //random number between 1-5
  var randNumber = Math.floor(Math.random() * 5) + 1;
  // var newForm = calvin.type; // could add this to the code to get a copy of the object

  switch(randNumber){
    case 1:
      calvin.type ='veg';
      break;
    case 2:
      calvin.type ='pescatarian';
      break;
    case 3:
      calvin.type ='eggetarian';
      break;
  }
}

transmognifier(calvin);

console.log(calvin);


//<------------------------Truthy and falsy values---------------------------->
function speakSomething(what){    // '',0,NaN,false and null: they all give falsy values
  var what = what || 'something is off!';  // so code after the || i.e. Or Operator, is executed.
  return what;
}

console.log(speakSomething(''));


//<------------------------Scoping in JavaScript---------------------------->
var myNum = 32;
var myResult = 'Success!';

function randomizier(limit){
  var randNumber= Math.floor((Math.random())*limit);
  var myNum = randNumber; // we used var so that the scope is maintained and a new variable is made...if var wasnt used the global varibale would have been re assigned a new value
  // myNum = randNumber -----> gloabl variable is reset
  console.log('MyNum is ' + myNum);
  console.log('Global MyNum is ' + window.myNum); // we can access the global varibale using window's property/global namesplace

  console.log('Our result is ' + myResult);

  return myNum;
}

console.log(randomizier(10));


//<------------------------Map function---------------------------->
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

var fullName = persons.map(myFunc); //map calls the function for each element of the array // myfunc is my CALL BACK FUNCTION

function myFunc(item){
  return [item.firstname,item.lastname].join(' ');
}
console.log(fullName);

//<------------------------forEach function---------------------------->
const numbers = [1,2,3,4,5];

numbers.forEach(doubleIt); // foreach function doesnt make a new array but does all the iteration to the original array

function doubleIt(item,index,arr){
  arr[index] = item*2
}

console.log(numbers);