let data;

if (localStorage.getItem("data") != null) {
    
    console.log(data)
    data = JSON.parse(localStorage.getItem('data'));
} else {
    data = base;
    localStorage.setItem('data', JSON.stringify(data));
}

function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}
 