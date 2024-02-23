const mainInput = document.querySelector(".input textarea")
const noMessageFound = document.querySelector(".right-section--inside")
const textShowed = document.querySelector(".right-section--inside--after-click")
const rightSection = document.querySelector(".right-section")
const contentTextShowed = document.querySelector("#message-after-click")


function onCriptografar() {
    const mainInputValue = mainInput.value

    let valueArray = mainInputValue.split("").map((item) => {
        if (item == "e") {
            return "enter"
        } else if (item == "i") {
            return "imes"
        } else if (item == "a") {
            return "ai"
        } else if (item == "o") {
            return "ober"
        } else if (item == "u") {
            return "ufat"
        }
        return item
    })
    const valueAsString = valueArray.join("")

    changeRightSection(valueAsString)

    // mainInput.value = ""
}

function copyContent() {
    navigator.clipboard.writeText(contentTextShowed.innerText)
    let buttonContent = document.querySelector(".right-section--inside--after-click button")
    const previousContent = buttonContent.innerText
    buttonContent.innerText = "Copiado!"
    setTimeout(() => {
        buttonContent.innerText = previousContent
    }, 1500);
}

function onDescriptografar() {
    const mainInputValue = mainInput.value
    let descriptografandoA = mainInputValue.split("ai").join("a")
    let descriptografandoE = descriptografandoA.split("enter").join("e")
    let descriptografandoI = descriptografandoE.split("imes").join("i")
    let descriptografandoO = descriptografandoI.split("ober").join("o")
    let descriptografandoU = descriptografandoO.split("ufat").join("u")

    const stringDescriptografada = descriptografandoU

    changeRightSection(stringDescriptografada)

}

function changeRightSection(textToBeShown) {
    function checkAndAddClassName(htmlElement, className) {
        const everyClass = htmlElement.className.split(" ")
        if (everyClass.includes(className)) {
            return htmlElement
        } else {
            htmlElement.classList.add(className)
            return htmlElement
        }
    }

    checkAndAddClassName(textShowed, "showedText")
    // textShowed.classList.add("showedText")

    contentTextShowed.innerText = textToBeShown

    checkAndAddClassName(noMessageFound, "right-section--inside--after-click")
    // noMessageFound.classList.add("right-section--inside--after-click")

    checkAndAddClassName(rightSection, "right-section-after-click")
    // rightSection.classList.add("right-section-after-click")
}

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"