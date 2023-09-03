$( document ).ready(function() {
    $('.dropdown-toggle').click(function(){
        $('.navigation').toggleClass('active')
    })
});




// const toggle_btn = document.querySelector('.dropdown-toggle');
// const navigation = document.querySelector('header .navigation');
// console.log(toggle_btn)
// toggle_btn.addEventListener('click',()=>{
//     if(navigation.classList.contains('active')){
//         navigation.classList.remove('active')
//     } else {
//         navigation.classList.add('active')
//     }
// })


// document.querySelector('.height').innerHTML = window.innerWidth