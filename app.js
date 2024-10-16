window.onload = () => {

    let btnSend = document.querySelector("#btnSend")
    btnSend.type = "submit"

    btnSend.addEventListener("click", () => {
        btnSend.textContent == "Enviar" ?
            btnSend.textContent = "enviando" :
            btnSend.textContent = "Enviar"

    })

    console.log(btnSend)

}

let body = document.body


let myUL = document.createElement("ul");
document.body.appendChild(myUL)

let names = ['Tom Bombadil', 'Aragorn', 'Arwen', 'Boromir', 'Faramir', 'Saruman', 'Legolas'];
names.forEach((elm) => {
    let li = document.createElement("li")
    li.textContent = elm
    myUL.appendChild(li)
})
let LIs = document.querySelectorAll("li");
LIs.forEach(LI => LI.addEventListener('click', (e) => {
    LI.parentNode.removeChild(LI);
}));


let input = document.createElement("input")

body.appendChild(input)

input.placeholder = "ingresa palabra"
input.type = "text"


let h1Input = document.createElement("h1")
body.appendChild(h1Input)

let selectFont = document.querySelector("#selectFont")
selectFont.addEventListener("change", (event) => {
    console.log(event.target.value)


    h1Input.classList.add(event.target.value)

})


input.addEventListener("input", (event) => {
    console.log(event.target.value)
    h1Input.textContent = event.target.value
})


let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("hola")
    console.log(event)
})

let total = 1


let buttonIncrement = document.createElement("button")
buttonIncrement.textContent = "Sumar"
body.append(buttonIncrement)

let sumar = function () {
    input.value = total++
    if (total == 3) {
        buttonIncrement.removeEventListener("click", sumar)
        console.log(total)
    }
}

buttonIncrement.addEventListener("click", sumar)

console.log("me ejecuto")