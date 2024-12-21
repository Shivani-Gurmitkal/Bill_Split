function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let btn = document.getElementById('btn');
    let value = document.getElementById('value');
    let total = (amount.value / persons.value).toFixed(2);
    value.innerText = total;
    // amount.value = '';
    // persons.value = '';
    // btn.style.display = 'none';
}
