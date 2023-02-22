const text = document.querySelector(".title"); //querySelector allows us to grab the element and store in a variable
const changeColor = document.querySelector(".changeColor");


// text.style.color = "red";
// text.style.backgroundColor = "aqua";
// text.classList.add('change'); // Adds classes

function changeColorFunc(){
  text.classList.toggle('change');
}

changeColor.addEventListener('click',changeColorFunc);

const beatles = document.querySelectorAll('.beatles li');

// console.log(beatles);

for (beatle of beatles){
  beatle.addEventListener('click',function(){
    this.style.color = 'red';
  })
}

const listInput = document.querySelector('.list-input');

const addListBtn = document.querySelector('.addListbtn');

addListBtn.addEventListener('click',function(){
  
})

// console.log(listInput.value); // to see the value of input tag
