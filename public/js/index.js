window.onload = function(){
    let formulario = document.querySelector('#formulario');
    let password = document.querySelector('.input-password')

    password.addEventListener("click", function() {
        console.log(1);
        password.innerHTML += "<small>introducir por lo menos 8 caracteres</small>"
    })

}