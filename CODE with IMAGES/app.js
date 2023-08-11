let newinp = document.createElement('input');
newinp.placeholder = "username";

document.querySelector("body").append(newinp);

let but1 = document.createElement('button');
but1.id = "btn";

// let butt2 = document.getElemetnById("btn");
// let butt3 = document.querySelector("#btn");

but1.innerText = "Click me!";
document.querySelector("body").append(but1);


let newH1 = document.createElement('h1');
newH1.innerText = "I am new h1 inside div";
div1.appendChild(newH1);

let pp = document.createElement('p');
pp.innerText = "me too";
div1.appendChild(pp);