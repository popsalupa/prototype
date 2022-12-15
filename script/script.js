const anim = document.querySelector('.summer');

anim.onmouseover = function () {
    this.style.fontSize = '4rem';
    this.style.color = 'pink'; 
};
anim.onmouseout = function () {
    this.style.fontSize = '3.5rem';
    this.style.color = 'black';
};