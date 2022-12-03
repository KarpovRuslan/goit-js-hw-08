import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}

const formData = {
    email: '',
    message: '',
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function getFormData() {
    const getData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(getData);

    if (parsedData) {
        refs.form.email.value = parsedData.email;
        refs.form.message.value = parsedData.message;
    }
}

getFormData();  


    

    
    




