const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function () {
    alert('yo sabia que ibas a recapacitar tahielcum')
});

const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    yesBtn.style.setProperty('top',randomY+'%');
    yesBtn.style.setProperty('left',randomX+'%');
    yesBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})