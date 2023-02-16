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
var answer = window.confirm('001, teri bhen ko naman');

if (answer ===true){
  console.log('you clicked OK')
}else{
  console.log('you clicked CANCEL')
}


// <-------------------------Switch conditional------------------------->
//example 1
var answer = window.prompt('write yes, no or yeet');

switch(answer){
  case 'YES':
    console.log('you said yes!');
    break;
  case 'NO':
    console.log('you entered no!');
    break;
  default:
    console.log('you entered something else! you rat');
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
}

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
