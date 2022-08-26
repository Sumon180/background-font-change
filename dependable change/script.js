

let fontSize = document.getElementById('fontsize');
let div = document.getElementById('div');
let bgColor = document.getElementById('bgcolor');
let underLine = document.getElementById('underline');

fontSize.addEventListener('change',(e) => {
    div.style.fontSize = e.target.value ;
});
bgColor.addEventListener('change',(e) => {
    div.style.backgroundColor = e.target.value ;
});
underLine.addEventListener('click',(e) => {
    div.classList.toggle('underline') = e.target.value ;
});