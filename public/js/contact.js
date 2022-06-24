const contactForm = document.querySelector('.contact-form')

let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let comment = document.getElementById('comment')

let nombreError = document.querySelector('.nombre')
let apellidoError = document.querySelector('.apellido')
let emailError = document.querySelector('.email')
let asuntoError = document.querySelector('.asunto')
let commentError = document.querySelector('.comment')



contactForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let errores = []

    if(nombre.value == null || nombre.value == undefined || nombre.value == ''){
        errores.push('nombre')
    }
    if(apellido.value == null || apellido.value == undefined || apellido.value == ''){
        errores.push('apellido')
    }if(email.value == null || email.value == undefined || email.value == ''){
        errores.push('email')
    }if(subject.value == null || subject.value == undefined || subject.value == ''){
        errores.push('subject')
    }if(comment.value == null || comment.value == undefined || comment.value == ''){
        errores.push('comment')
    }

    if (errores.length != 0) {
        e.preventDefault()
        errores.forEach(i => {
            switch (i) {
                case 'nombre':
                    nombreError.classList.remove('hidden')
                    nombre.classList.add('input-error')
                    break;
                case 'apellido':
                    apellidoError.classList.remove('hidden')
                    break;
                case 'email':
                    emailError.classList.remove('hidden')
                    break;
                case 'subject':
                    asuntoError.classList.remove('hidden')
                    break;
                case 'comment':
                    commentError.classList.remove('hidden')
                    break;                    
            }
        })

    }  
    
    console.log(errores);
    /*
    let data = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        subject: subject.value,
        comment: comment.value
    }
    
    let xhr = new XMLHttpRequest()
    
    xhr.open('POST','/contactForm')
    xhr.setRequestHeader('content-type','application/json')
    xhr.onload = function(){
        console.log(xhr.responseText)
        if (xhr.responseText == 'success') {
            alert('Email sent')

            nombre.value = ''
            apellido.value = ''
            email.value = ''
            subject.value = ''
            comment.value = ''
                    
        }else{
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(data))


   // console.log(data);*/
})


contactForm.addEventListener('reset', ()=>{
    location.reload()
})