let box = document.querySelector('.box'),
    btn = document.querySelector('button');


let width = box.offsetWidth,
    height = box.scrollHeight;


console.log(width);
console.log(height);

btn.addEventListener('click', function() {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
    console.log(box.getBoundingClientRect());
});