const nameElement = document.querySelector("#name")
const ageElement = document.querySelector("#age")
const heightElement = document.querySelector("#height")

const submitButton = document.querySelector("#submit-button")

function submit () {
    const name = nameElement.value
    const age = ageElement.value
    const height = heightElement.value

    // if (name === "") {
    //     console.log("Ingen navn")
    // } 
    // else if (age === "") {
    //     console.log("Ingen alder")
    // }
    // else if (height === "") {
    //     console.log("Ingen høyde")
    // }
    // else {
    //     console.log("navnet er: " + name +" alderen er: " + age +" høyden er: " + height)
    // }
}

function operators () {
    const name = nameElement.value
    const age = ageElement.value
    const height = heightElement.value

    if (name === "Tom" && age < 17) {
        console.log("betingelsen er oppfulgt")
    }
    else {
        console.log("Betignelse ikke oppfult")
    }

    // if (name === "Tom") {
        
    // }
    // else if (age == 23) {

    // }
    // else if (age > 18) {

    // }
    // else if (name == "Tom" && age < 18) {

    // }
    // else if ( name == "Tom" || age < 18) {

    // }

}

submitButton.addEventListener("click", submit)