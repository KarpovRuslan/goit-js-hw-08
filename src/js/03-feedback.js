import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

getFormData();  

function onFormSubmit(e) {
    e.preventDefault();
    if (!form.elements.email.value || !form.elements.message.value) {
        return alert('Будь-ласка заповніть всі поля!');
    }
    console.log({email:form.elements.email.value, message: form.elements.message.value});
    e.currentTarget.reset(); 
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function onTextareaInput(e) {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function getFormData() {
    const getData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(getData);

    if (parsedData) {
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
    }
}




    

    
    




