// heand img animation
const heandPic = document.querySelectorAll('.heand');
const viewport = window.innerHeight;

window.addEventListener('scroll', function() {
    for(let key of heandPic) {
        let popUp = { top, bottom} = key.getBoundingClientRect();

        if ((viewport - popUp.top - 600 >= 0) && (popUp.bottom - 350 >=0)) {
            key.classList.add('heand_active');
        } else {
            key.classList.remove('heand_active');
        }
    }
});

const articlePic = document.querySelectorAll('.picture_block');
const scrollView = window.innerHeight;

window.addEventListener('scroll', function() {
    for (let key of articlePic) {
        let position = { top, bottom} = key.getBoundingClientRect();

        if ((scrollView - position.top - 600 >= 0) && (position.bottom - 350 >= 0)) {
            key.classList.add('picture_block');
        } else {
            key.classList.remove('picture_block_active');
        }
    }
});