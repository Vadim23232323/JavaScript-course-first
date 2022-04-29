let box =document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
 
box.style.backgroundColor='blue';
btn[1].style.backgroundColor='green';
btn[1].style.borderRadius= '100%';
circle[0].style.backgroundColor='yellow';
circle[1].style.backgroundColor='green';
circle[2].style.backgroundColor='red';

for (let i=0; i < heart.length; i++) {
    heart[i].style.backgroundColor='blue';
}

heart.forEach(function(el, i, hearts) {
el.style.backgroundColor='blue';
});

let div = document.createElement('div'),
    text=document.createTextNode('Тут был я');


div.classList.add('black');

//document.body.appendChild(div);

wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello world!</h1>';

div.textContent = 'Hello text';

document.body.insertBefore(div, circle[0]);

document.body.removeChild(circle[1]);
wrapper.removeChild(heart[2]);

document.body.replaceChild(btn[1], circle[1]);
// console.log(box);
// console.log(btn[2]);
// console.log(btn);
// console.log(circle);
//console.log(heart[1]);
// console.log(oneHeart);