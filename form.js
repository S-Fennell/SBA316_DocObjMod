const body = document.querySelector('body');
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
    div.innerHTML = '<h5>test dot!</h5>'

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
    div.innerHTML = '<h5>test dot!</h5>'
})
const border = document.createElement('hr');
//------new----

const gameFrame = document.createElement('div');
const gameContainer = document.createElement('div');
const boxDiv0 = document.createElement('div')
const boxDiv1 = document.createElement('div');
const boxDiv2 = document.createElement('div');
const boxDiv3 = document.createElement('div');
const boxDiv4 = document.createElement('div');
const boxDiv5 = document.createElement('div');
const boxDiv6 = document.createElement('div');
const boxDiv7 = document.createElement('div');
const boxDiv8 = document.createElement('div');
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
const gameTitle = document.createElement('h1')
gameTitle.textContent = 'Tic Tac Toe';
gameFrame.prepend(gameTitle);
body.appendChild(gameFrame);
const restart_btn = document.createElement('button')
restart_btn.innerText = 'RESTART';
const winnerIs = document.createElement('h4');
winnerIs.innerText = 'Winner is!';
gameFrame.appendChild(winnerIs);
gameFrame.appendChild(restart_btn)
boxDiv0.classList.add('boxes');



