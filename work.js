const form  = document.getElementsByClassName("form")[0];
const buttonAdd = document.getElementById("create");
const input = document.getElementById('input');
let list = document.getElementsByClassName('lists')[0];
let num = 0;

sessionStorage.clear();

form.addEventListener('submit', (elem) => {
    elem.preventDefault();
})

buttonAdd.addEventListener('click',  () => {
    num++;
    let $in = document.createElement('div');
    $in.innerText = `${num}. ${input.value}`;
    list.appendChild($in);
    sessionStorage.setItem("toDo " + num, input.value);
})