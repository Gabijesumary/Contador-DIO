let count = 0;

const Current_Number = document.getElementById("currentNumber");

function increment() {
    if (count < 10) {
        count++;
        Current_Number.innerHTML = count;
    }
    if (count > 0) {
        Current_Number.style.color = "black"
    }
}

function decrement() {
    if (-10 < count) {
        count--;
        Current_Number.innerHTML = count;
    }
    if (count < 0) {
        Current_Number.style.color = "red"
    }
}

function resetCounter() {
    count = 0;
    Current_Number.innerHTML = count;
    if (count = 0) {
        Current_Number.style.color = "black"
    }
}