const numbers = document.querySelectorAll('.numbers');
const submitButton = document.getElementById('submit');
const cardElements = document.getElementById('card');

let enteredNumber = 0;
let selectedElement = null;

Array.from(numbers).forEach((number) => {
    number.addEventListener("click", (e) => {
        enteredNumber = e.target.innerText;

        if (selectedElement) {
            selectedElement.classList.remove('selected');
        }
        e.target.classList.add('selected');
        selectedElement = e.target;
    });
});

function createElementAndAppend(tag, text, className, parent) {
    const element = document.createElement(tag);
    element.textContent = text;
    element.classList.add(className);
    parent.appendChild(element);
}



submitButton.addEventListener("click", () => {
    if (enteredNumber === 0) {
        submitButton.setAttribute('disabled', '');
        alert("برای ثبت امتیاز لطفا یکی از اعداد را انتخاب کنید");
    } else {
        cardElements.innerHTML = '';
        createElementAndAppend("p", `شما به ما امتیاز ${enteredNumber} از 5 داده‌اید`, 'result', cardElements);
        createElementAndAppend("h2", `دست شما درد نکنه!`, 'thanks', cardElements);
        createElementAndAppend("p", `راضی به زحمت نبودیم`, 'description', cardElements);
    }
})