let apiSaveBtn = document.querySelector('#save');
let api = document.querySelector('#inputAPI');

let toastError = document.querySelector('.toast-error');
let toastSuccess = document.querySelector('.toast-success');


apiSaveBtn.addEventListener('click', () => {
    if(api.value){
        toastSuccess.classList.remove('d-hide')
        
        //storing
        chrome.storage.local.set({"API": api.value}, function() {
            console.log('Value is set to ' + api.value);
        });

        
    }else{
        toastError.classList.remove('d-hide')
        setTimeout(() => {
            toastError.classList.add('d-hide')
        },1000)
    }
})


//QBhgVCV4QRuFIeTG44njtYY4aK007wMQUb1N5VwGHtfM5jc9eRp0TOKq7FCx