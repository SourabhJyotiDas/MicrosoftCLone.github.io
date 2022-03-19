console.log("hello");
const hamburger = document.getElementById('burger');
const hamburgerX = document.getElementById('burgerX');
const search = document.querySelector('.search');
const searchBx = document.querySelector('.searchbx');

hamburger.addEventListener('click', () => {
    document.querySelector('.burgernav').classList.toggle('hidden');
    document.querySelector('.burgerX').classList.toggle('hidden');
    document.querySelector('.burger').classList.toggle('hidden');
});

hamburgerX.addEventListener('click', () => {
    document.querySelector('.burgernav').classList.toggle('hidden');
    document.querySelector('.burgerX').classList.toggle('hidden');
    document.querySelector('.burger').classList.toggle('hidden');
})

search.addEventListener('click', () => {
    document.querySelector('.inputs').classList.toggle('hidden')
    document.querySelector('.logo').classList.toggle('hidden')
    document.querySelector('.account').classList.toggle('hidden')
})

// searchBx.addEventListener('click',()=>{
//     document.querySelector('.sblg').classList.('hidden');

// })






