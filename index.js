const btnOne =  document.querySelector('.btn-1');
const containerOne = document.querySelector('.container-one');
const btnTwo = document.querySelector('.btn-2');
const containerTwo = document.querySelector('.container-two');

btnOne.addEventListener('click', () => {
    containerOne.classList.toggle('active')
});

btnTwo.addEventListener('click', () => {
    console.log('clicked')
    containerTwo.classList.toggle('active')
});


