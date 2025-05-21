const body = document.querySelector('body');
const formContainer = document.createElement('div');//div form container
const form = document.createElement('form');

const label = document.createElement('label');
const input = document.createElement('input');

const label1 = document.createElement('label');
const input1 = document.createElement('input');

const label2 = document.createElement('label');
const input2 = document.createElement('input');

const label3 = document.createElement('label');
const input3 = document.createElement('input');

formContainer.appendChild(form);//placing <form> inside <div>=formContainer
//placing <label> and <input> inside of <form>
form.appendChild(label);
form.appendChild(input);

form.appendChild(label1);
form.appendChild(input1);

form.appendChild(label2);
form.appendChild(input2);

form.appendChild(label3);
form.appendChild(input3);

input.setAttribute('type', 'text');
input.setAttribute('name', 'name');
input.setAttribute('placeholder', 'username');
// input.setAttribute('required');




label.innerText= 'Username';
label.setAttribute('id', 'user');
formContainer.classList.add('container');
body.appendChild(formContainer);
body.style.backgroundColor = 'grey';