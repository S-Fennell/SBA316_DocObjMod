const body = document.querySelector('body');

body.style.backgroundImage = 'url(/images/game.avif)';

const formContainer = document.createElement('div');//div form container
const form = document.createElement('form');//<form>

const label = document.createElement('label');
const input = document.createElement('input');
const span = document.createElement('span');

const label1 = document.createElement('label');
const input1 = document.createElement('input');
const span1 = document.createElement('span');

const label2 = document.createElement('label');
const input2 = document.createElement('input');
const span2 = document.createElement('span');

const label3 = document.createElement('label');
const input3 = document.createElement('input');
const span3 = document.createElement('span');

const subBtn = document.createElement('button');

span.classList.add('error');
span1.classList.add('error');
span2.classList.add('error');
span3.classList.add('error');

let username = document.getElementById('username');

formContainer.appendChild(form);//placing <form> inside <div>=formContainer
//placing <label> and <input> inside of <form>
form.appendChild(label).innerText= 'Username:';
label.setAttribute('id', 'user');
form.appendChild(input);
form.appendChild(span);

form.appendChild(label1).innerText= 'Email:';
label1.setAttribute('id', 'Email');
form.appendChild(input1);
form.appendChild(span1);

form.appendChild(label2).innerText= 'Password:';
label2.setAttribute('id', 'pw');
form.appendChild(input2);
form.appendChild(span2);

form.appendChild(label3).innerText= 'Confrim Password:';
label3.setAttribute('id', 'cpw');
form.appendChild(input3);
form.appendChild(span3);

form.appendChild(subBtn).innerText= 'Submit';

input.setAttribute('id', 'username');
input.setAttribute('type', 'text');
input.setAttribute('name', 'username');
input.setAttribute('placeholder', 'username');
input.setAttribute('minlength', '6');
input.setAttribute('maxlength', '9');
//input.setAttribute('required', '');

input1.setAttribute('id', 'email')
input1.setAttribute('type', 'email');
input1.setAttribute('name', 'email');
input1.setAttribute('placeholder', 'email');
input1.setAttribute('minlength', '3');
input1.setAttribute('maxlength', '12');
//input1.setAttribute('required', '');

input2.setAttribute('id', 'password')
input2.setAttribute('type', 'password');
input2.setAttribute('name', 'pw');
input2.setAttribute('placeholder', 'password');
input2.setAttribute('minlength', '7');
input2.setAttribute('maxlength', '14');
//input2.setAttribute('required', '');

input3.setAttribute('id', 'password1');
input3.setAttribute('type', 'password1');
input3.setAttribute('name', 'cpw');
input3.setAttribute('placeholder', 'Re-enter password');
//input3.setAttribute('required', '');

span.setAttribute('id', 'usernameError');
span1.setAttribute('id', 'emailError');
span2.setAttribute('id', 'passwordError');
span3.setAttribute('id', 'nameError');

formContainer.classList.add('container');
body.appendChild(formContainer);
body.style.backgroundColor = 'grey';

//testing functionality:
subBtn.addEventListener('mousemove',()=>{
    input.backgroundColor = 'blue';
    body.style.backgroundColor = 'lightblue';
})

subBtn.addEventListener('click',userValidation);

//span error message to be displayed but
function userValidation(){
       const div = document.createElement('div');
    div.style.backgroundColor = 'blue';
    div.style.borderRadius = '50%';
    div.style.height= '80px';
    div.style.width = '80px';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignContent = 'center';
    body.appendChild(div);
    div.innerHTML = '<h5>test dot!</h5>';

    let userName = document.getElementById('username').value;
     if(userName.length === ""){
        span.innerText = 'Username required';
    }
    span.innerText = 'valid';
}
   
form.addEventListener('change', ()=>{
    const div = document.createElement('div');
    div.style.backgroundColor = 'blue';
    div.style.borderRadius = '50%';
    div.style.height= '80px';
    div.style.width = '80px';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignContent = 'center';
    body.appendChild(div);
    div.innerHTML = '<h5>test dot!</h5>';
})
const border = document.createElement('hr');
body.appendChild(border);
//------tic tac toe below------------------------------------

const gameFrame = document.createElement('div');
const gameContainer = document.createElement('div');
gameContainer.setAttribute('id', 'container');
const boxDiv0 = document.createElement('div');
const boxDiv1 = document.createElement('div');
const boxDiv2 = document.createElement('div');
const boxDiv3 = document.createElement('div');
const boxDiv4 = document.createElement('div');
const boxDiv5 = document.createElement('div');
const boxDiv6 = document.createElement('div');
const boxDiv7 = document.createElement('div');
const boxDiv8 = document.createElement('div');

gameContainer.style.border = '4px solid black';
gameContainer.style.borderRadius = '8px';
gameContainer.style.display = 'grid';
gameContainer.style.gridTemplateColumns = 'repeat(3, 80px)';
gameContainer.style.gap = '10px';
gameContainer.style.margin = 'auto';
gameContainer.style. width = 'max-content';
gameContainer.style.padding = "20px";


//squares
boxDiv0.style.border= '3px solid grey';
boxDiv0.style.height= '80px';
boxDiv0.style.width= '80px';
boxDiv0.style.backgroundColor = 'rgb(209, 237, 201)';


boxDiv1.style.border= '3px solid grey';
boxDiv1.style.height= '80px';
boxDiv1.style.width= '80px';
boxDiv1.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv2.style.border= '3px solid grey';
boxDiv2.style.height= '80px';
boxDiv2.style.width= '80px';
boxDiv2.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv3.style.border= '3px solid grey';
boxDiv3.style.height= '80px';
boxDiv3.style.width= '80px';
boxDiv3.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv4.style.border= '3px solid grey';
boxDiv4.style.height= '80px';
boxDiv4.style.width= '80px';
boxDiv4.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv5.style.border= '3px solid grey';
boxDiv5.style.height= '80px';
boxDiv5.style.width= '80px';
boxDiv5.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv6.style.border= '3px solid grey';
boxDiv6.style.height= '80px';
boxDiv6.style.width= '80px';
boxDiv6.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv7.style.border= '3px solid grey';
boxDiv7.style.height= '80px';
boxDiv7.style.width= '80px';
boxDiv7.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv8.style.border= '3px solid grey';
boxDiv8.style.height= '80px';
boxDiv8.style.width= '80px';
boxDiv8.style.backgroundColor = 'rgb(209, 237, 201)';

boxDiv0.classList.add('boxes');
boxDiv1.classList.add('boxes');
boxDiv2.classList.add('boxes');
boxDiv3.classList.add('boxes');
boxDiv4.classList.add('boxes');
boxDiv5.classList.add('boxes');
boxDiv6.classList.add('boxes');
boxDiv7.classList.add('boxes');
boxDiv8.classList.add('boxes');

gameContainer.appendChild(boxDiv0);
gameContainer.appendChild(boxDiv1);
gameContainer.appendChild(boxDiv2);
gameContainer.appendChild(boxDiv3);
gameContainer.appendChild(boxDiv4);
gameContainer.appendChild(boxDiv5);
gameContainer.appendChild(boxDiv6);
gameContainer.appendChild(boxDiv7);
gameContainer.appendChild(boxDiv8);
gameFrame.appendChild(gameContainer);
gameContainer.style.backgroundColor = 'green';

//There seems to be nothing I can do to access this className to give them all a heigth and width. so how I have to do them all seprately.
// const boxes = document.getElementById('container').getElementsByClassName('boxes');
// boxes.style.height = '80px';
// boxes.style.width = '80px';

const gameTitle = document.createElement('h1')
gameTitle.textContent = 'Tic Tac Toe';
gameFrame.prepend(gameTitle);
body.appendChild(gameFrame);
const restart_btn = document.createElement('button');
restart_btn.setAttribute('id', 'restartBtn');
restart_btn.innerText = 'RESTART';
const winnerIs = document.createElement('h4');
winnerIs.innerText = 'Winner is!';
gameFrame.appendChild(winnerIs);
gameFrame.appendChild(restart_btn);
boxDiv0.classList.add('boxes');

const array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1 ,4 ,7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// let x = 'X';
// let o = 'O';
const option = ['', '', '', '', '', '', '', '', ''];

let boxes = document.querySelectorAll('.boxes')//I thought querySelectorAll selects all classes. Obviously not!

// boxes.addEventListener('mouseover', ()=>{
//     boxes.style.backgroundColor = 'blue';
// })
let line = document.createElement('hr');
body.appendChild(line);
// cee lo dice game below--------------------------------
body.style.backgroundColor = 'rgb(71, 144, 234'
let buttonContainer = document.createElement('div');
let gameBox = document.createElement('div');
let winLose = document.createElement('div');

buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';

gameBox.setAttribute('id','gamebox');
gameBox.style.display = 'flex';
gameBox.style.justifyContent = 'center';

winLose.style.display = 'flex';
winLose.style.justifyContent = 'conter';
winLose.innerHTML = '<h2>?</h2>'


body.appendChild(buttonContainer);
body.appendChild(gameBox);
body.appendChild(winLose);


let button = document.createElement('button');
body.appendChild(button);
button.style.fontSize = '5rem';
button.style.padding = '10px';
button.style.borderRadius = '10px';
button.innerText = 'Roll Dice!'

let labelDiv = document.createElement('div')
labelDiv.style.height = '100px';
labelDiv.style.width = '80px';
labelDiv.style.border = '3px solid black'
let myLabel = document.createElement('label');
myLabel.style.fontSize = '4rem'
labelDiv.appendChild(myLabel);
body.appendChild(labelDiv);

let labelDiv1 = document.createElement('div')
labelDiv1.style.height = '100px';
labelDiv1.style.width = '80px';
labelDiv1.style.border = '3px solid black'
let myLabel1 = document.createElement('label');
myLabel1.style.fontSize = '4rem'
labelDiv1.appendChild(myLabel1);
body.appendChild(labelDiv1);

let labelDiv2 = document.createElement('div')
labelDiv2.style.height = '100px';
labelDiv2.style.width = '80px';
labelDiv2.style.border = '3px solid black'
let myLabel2 = document.createElement('label');
myLabel2.style.fontSize = '4rem'
labelDiv2.appendChild(myLabel2);
body.appendChild(labelDiv2);


let image = document.createElement('img');
buttonContainer.appendChild(image);
image.setAttribute('src','images/ceelo.png')

buttonContainer.appendChild(button);
buttonContainer.style.display = 'flex';
buttonContainer.style.flexDirection = 'column'
gameBox.appendChild(labelDiv);
gameBox.appendChild(labelDiv1);
gameBox.appendChild(labelDiv2);
labelDiv.style.paddingLeft = '40px';
labelDiv1.style.paddingLeft = '40px';
labelDiv2.style.paddingLeft = '40px';

let winLosebox = document.createElement('div');
winLosebox.appendChild(winLose)
winLosebox.style.display = 'flex';
winLosebox.style.justifyContent = 'center';
winLose.style.backgroundColor = 'lightgrey'
body.appendChild(winLosebox);

    labelDiv.style.backgroundColor = 'rgb(195, 216, 190)';
    labelDiv1.style.backgroundColor = 'rgb(202, 227, 194)';
    labelDiv2.style.backgroundColor = 'rgb(205, 231, 198)';




button.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random() * 6 +1)
    myLabel1.innerText = randomNumber;
    console.log(randomNumber);
   
})

button.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random() * 6 +1)
    myLabel2.innerText = randomNumber;
    console.log(randomNumber);
   
})

button.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random() * 6 +1)
    myLabel.innerText = randomNumber;
    console.log(randomNumber);

    //---if esle
    if(myLabel.innerText === '4' && myLabel1.innerText === '5' && myLabel2.innerText === '6' ||
        myLabel.innerText === '5' && myLabel1.innerText === '6' && myLabel2.innerText === '4' ||
    myLabel.innerText === '6' && myLabel1.innerText === '4' && myLabel2.innerText === '5' ||
myLabel.innerText === '6' && myLabel1.innerText === '5' && myLabel2.innerText === '4' ||
myLabel.innerText === '5' && myLabel1.innerText === '4' && myLabel2.innerText === '6' ||
myLabel.innerText === '4' && myLabel1.innerText === '6' && myLabel2.innerText === '5'){
    labelDiv.style.backgroundColor = 'rgb(76, 224, 35)';
    labelDiv1.style.backgroundColor = 'rgb(76, 224, 35)';
    labelDiv2.style.backgroundColor = 'rgb(76, 224, 35)';
    winLose.innerText = 'Cee Lo: You Win!';
    alert('Congratulations!');

   
}else if(myLabel.innerText === '1' && myLabel1.innerText === '1' && myLabel2.innerText === '1' || myLabel.innerText === '2' && myLabel1.innerText === '2' && myLabel2.innerText === '2'
     || myLabel.innerText === '3' && myLabel1.innerText === '3' && myLabel2.innerText === '3' || myLabel.innerText === '4' && myLabel1.innerText === '4' && myLabel2.innerText === '4'
     || myLabel.innerText === '5' && myLabel1.innerText === '5' && myLabel2.innerText === '5' || myLabel.innerText === '6' && myLabel1.innerText === '6' && myLabel2.innerText === '6'
){
    labelDiv.style.backgroundColor = 'rgb(76, 224, 35)';
    labelDiv1.style.backgroundColor = 'rgb(76, 224, 35)';
    labelDiv2.style.backgroundColor = 'rgb(67, 228, 22)';
    winLose.innerText = 'Trips: You Win!';  
    alert('Congratulations!');
}else if(myLabel1.innerText === 1 && myLabel1.value === 2 && myLabel2 ===3){
    labelDiv.style.backgroundColor = 'red';
    labelDiv1.style.backgroundColor = 'red';
    labelDiv2.style.backgrondColor = 'red';
    winLose.innerText = '1,2,3: You Lose!';  
    alert('Sorry!');   
}else if(myLabel.value === 6 && myLabel1.value === 1  && myLabel2 === 1){
    labelDiv.style.backgroundColor = 'rgb(76, 224, 35)';
    labelDiv1.style.backgroundColor = 'rgb(76, 224, 35)';
    labelDiv2.style.backgrondColor = 'rgb(76, 224, 35)';
    winLose.innerHTML = '<h2>Six: You Win!</h2>'
}


})





button.addEventListener('mouseover',()=>{
    button.style.backgroundColor= 'green';

    setTimeout(()=>{
        button.style.backgroundColor= 'blue';
    }, 2000)
})

//-----test code---------

// myLabel.innerText = '7'
// winLose.innerText = 'B'
//  let content = winLose.innerText.valueOf();// gives the value content of the element
//     console.log(content);


//get lottery numbers-------
let line2 = document.createElement('hr');
body.appendChild(line2);
let postWinNums = document.createElement('h1');
let winnerBoard =document.createElement('div');
body.appendChild(winnerBoard);
winnerBoard.appendChild(postWinNums);
winnerBoard.style.display = 'flex';
winnerBoard.style.justifyContent = 'center';
postWinNums.innerText = 'Wining Numbers';

let numsPicked = Math.floor(Math.random()*100 + 1);
let winnerNumbers = []

for(let num =  0; num <= 100; num++){

}

//console.log(winnerNumbers);
