const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
const mainDiv1 = document.createElement('div');//main div for form
body.append(mainDiv1);
mainDiv1.style.backgroundColor = 'skyblue';
mainDiv1.style.display = 'flex';
mainDiv1.style.justifyContent = 'center';
mainDiv1.style.width = '100%'
mainDiv1.style.border = ' 1rem solid midnightblue'
//
const formDiv = document.createElement('div');//div the form is in (formDiv)
formDiv.style.display = 'flex'
//formDiv.style.flexDirection = 'column'
//formDiv.style.justifyContent = 'space-around'
formDiv.style.height = '20rem';
formDiv.style.width = '20rem';
formDiv.style.backgroundColor = 'lightgray';
formDiv.style.borderRadius = '2rem';
formDiv.style.margin = '2rem';

formDiv.setAttribute('id', 'formDiv');
mainDiv1.appendChild(formDiv);
const myform = document.createElement('form');//the form lable
formDiv.appendChild(myform);


let label1 = document.createElement('label');//lable for the form
let break1 = document.createElement('br');
let inputFN1 = document.createElement('input');//first name input (inputFN1)
let break2 = document.createElement('br');
let inputLN1 = document.createElement('input');//last name input (inputLN1)
let inputDate =document.createElement('input');// date input for date of birth constraint (inputDate)
let inputSubmit = document.createElement('input');// my sumbit button
inputSubmit.setAttribute('type', 'button');

//append to formDiv
label1.textContent = 'Name';
inputFN1.setAttribute('type', 'text');
inputLN1.setAttribute('type', 'text');
inputSubmit.setAttribute('type', 'sumbit');
inputDate.setAttribute('type', 'date');
//myform.appendChild(label1);
myform.appendChild(inputFN1);
myform.appendChild(inputLN1);
myform.appendChild(inputDate);
myform.appendChild(inputSubmit);
myform.appendChild(break1);