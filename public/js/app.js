const contactForm = document.querySelector('.contact-form')
let firstName = document.getElementById('first name');
let lastName = document.getElementById('last name');
let email = document.getElementById('email');
let zipCode = document.getElementById('zip code');





contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        zipCode: zipCode.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload =function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            zipCode.value = '';
        }else{
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));
})