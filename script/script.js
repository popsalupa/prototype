const hasTooltips = document.querySelectorAll('.has_tooltip');
const tooltip = document.createElement('div');

Array.from(hasTooltips).forEach((element) => {
    element.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (tooltip.classList.contains('tooltip_active') && tooltip.textContent === element.title) {
        tooltip.classList.toggle('tooltip_active');
        return;
    }

    if (document.querySelector('.active') !== null) {
        document.querySelector('.active').classList.remove('.active');
    }

    const top = element.getBoundingClientRect().top +1;
    const right = element.getBoundingClientRect().right;

    tooltip.textContent = element.title;
    tooltip.classList.add('tooltip_active', 'tooltip');
    tooltip.style.right = `${right}px`;
    tooltip.style.top = `${top}px`;

    element.after(tooltip);
    element.classList.add('active');
    });
  });

const anim = document.querySelector('.summer');

anim.onmouseover = function () {
    this.style.fontSize = '4rem';
    this.style.color = 'pink'; 
};
anim.onmouseout = function () {
    this.style.fontSize = '3.5rem';
    this.style.color = 'black';
};