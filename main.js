console.clear();

const billElement = document.querySelector('#bill');
const customElement = document.querySelector('#custom');
const peopleElement = document.querySelector('#people');
const reset = document.querySelector('button');

const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');

const tipPercentElements = document.querySelectorAll('input.percentInput');
for (let i = 0; i < tipPercentElements.length; i++) {
    // console.log(tipPercentElements[i]);
    tipPercentElements[i].addEventListener('click', e => {
        if (tipPercentElements[i].checked == true) {
            if (tipPercentElements[i].getAttribute('id') == 'item-1') {
                tip = 5;
            } else if (tipPercentElements[i].getAttribute('id') == 'item-2') {
                tip = 10;
            } else if (tipPercentElements[i].getAttribute('id') == 'item-3') {
                tip = 15;
            } else if (tipPercentElements[i].getAttribute('id') == 'item-4') {
                tip = 25;
            } else if (tipPercentElements[i].getAttribute('id') == 'item-5') {
                tip = 50;
            }
            calculate(bill, tip, people);
        }
    });
}


let bill = 0, tip = 0, people = 0;

billElement.addEventListener('change', e => {
    bill = billElement.value;
    calculate(bill, tip, people);
});

customElement.addEventListener('change', e => {
    tip = customElement.value;
    calculate(bill, tip, people);
});

customElement.addEventListener('click', e => {
    tip = 0;
    clearPercent();
});

function clearPercent() {
    for (let i = 0; i < tipPercentElements.length; i++) {
        tipPercentElements[i].checked = false;
    }
}


peopleElement.addEventListener('change', e => {
    people = peopleElement.value;
    if (peopleElement.value == 0) {
        peopleElement.style.border = '2px solid red';
        document.querySelector('#error').style.display = 'block';
    } else {
        peopleElement.style.border = '2px solid transparent';
        document.querySelector('#error').style.display = 'none';
        calculate(bill, tip, people);
    }
});

reset.addEventListener('click', e => {
    billElement.value = '';
    customElement.value = '';
    clearPercent();
    peopleElement.value = '';
    tipAmount.innerText = '';
    total.innerText = '';
});

function calculate(bill, tip, people) {
    if (bill > 0 && people > 0) {
        const tipPercent = tip / 100;
        const billPerPeople = bill / people;
        const tipAmountPerPerson = billPerPeople * tipPercent;
        tipAmount.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
        total.innerText = `$${(tipAmountPerPerson + billPerPeople).toFixed(2)}`;
    }
}