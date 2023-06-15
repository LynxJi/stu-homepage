const wrapper = document.querySelector('.wrapper');
const wrapper2 = document.querySelector('.wrapper.active');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnlogin = document.querySelector('.login-popup');
const btnclose = document.querySelector('.fa-solid');


btnclose.addEventListener('click', function(){
    wrapper.classList.remove('btnlogin');
});
btnlogin.addEventListener('click', function(){
    wrapper.classList.add('btnlogin');
});
registerLink.addEventListener('click', function(){
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', function(){
    wrapper.classList.remove('active');
});

