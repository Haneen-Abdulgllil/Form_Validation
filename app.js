

// reach to the tags by id
const form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var age = document.getElementById('age');
var phone = document.getElementById('phone');
var url = document.getElementById('url');
var textarea = document.getElementById('textarea');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// declare variables

var validateInputs = () => {
    var usernameValue = username.value;
    var emailValue = email.value;
    var passwordValue = password.value;
    var password2Value = password2.value;
    var ageValue = age.value;
    var phoneValue = phone.value;
    var urlValue = url.value;
    var textareaValue = textarea.value;

//Error message
    var setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// Success message

    var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



 // Test Name Validation

    const isValidName = username => {
        const ne = /^[a-zA-Z ]{3,10}$/;
        return ne.test(String(username));
    }

    if(usernameValue === '') {
        setError(username, 'Name is required');
    }
     else if (!isValidName(usernameValue)) {
        setError(username, 'Your Name must be more than 3 and less than 10');
    } 
    else {
        setSuccess(username);
    }

 // Test Email Validation

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } 
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
     else {
        setSuccess(email);
    }

    

 // Test Password Validation
    const isValidPassword = password => {
        const pa = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
        return pa.test(String(password));
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    }
     else if (!isValidPassword(passwordValue)) {
        setError(password, 'Your password must be upper and lower letters, symbols, number and at least 6 ');
    } 
    else {
        setSuccess(password);
    }
        //   test confirmed password

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    
// Test age validation
  
    if(ageValue === '') {
        setError(age, 'Age is required');
    }
    else if (parseInt(ageValue)<18) {
        setError(age, 'Your are not allowed to complete the process becouse you are so young ');
    } 
    else {
        setSuccess(age);
    }

    // Test phone validation
    const isValidPhone = phone => {
        const ph =  /^(\([777]{3}\) |[0-9]{3}-)[0-9]{3}/;
        return ph.test(String(phone));
    }
    if(phoneValue === '') {
        setError(phone, 'Phone is required');
    }
     else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Your phone number must be like 777-XXX-XXX ');
    } 
    else {
        setSuccess(phone);
    }

    
 // Test URL Validation
    const isValidURL = url => {
    const u = /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
    return u.test(String(url));
    }
    if(urlValue === '') {
        setError(url, 'URL is required');
    }
    else if (!isValidURL(urlValue)) {
        setError(url, 'Provide a valid URL ');
    } 
    else {
        setSuccess(url);
    }

   
 
 // Test textarea validation
    const isValidtextarea = textarea => {
    const t = /^[a-zA-Z ]{20,1000}$/;
    return t.test(String(textarea));
    }
    if(textareaValue === '') {
        setError(textarea, 'Message is required');
    }
    else if (!isValidtextarea(textareaValue)) {
        setError(textarea, 'Your message should be more than 20 letters ');
    } 
    else {
        setSuccess(textarea);
    }
  
}



function DarkLightMode() {
    var element = document.body;
    element.classList.toggle("dark");
}


  
