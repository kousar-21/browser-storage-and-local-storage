
// getItem always take one para metar and it's as a string
// setItaem Always take two para metar and it's as a string

const age = 20;

// to set in application in browser
localStorage.setItem("myAge",age)


// to see in console
console.log(localStorage.getItem("myAge"))



handleAddToStorage=()=>{

    // if it is a string
    const name = "Alfanso Deveis 20";
    localStorage.setItem("Alfanso",name)

    // if it is a object not a string
    const person = {
        name:"ononto jolil",
        age:30,
        friends:["roki","joki"]


    }

    // convert object or Array as a string

    const convertedData = JSON.stringify(person);
    // console.log(convertedData);
    // console.log(typeof convertedData);
    localStorage.setItem("iso",convertedData)

    // convert string as a array or object

    // const backToObject = JSON.parse(convertedData);
    // console.log(backToObject)
}

//  convert string as a array or object and use of getItem

const deita = localStorage.getItem("iso");
console.log(deita);
const backObject = JSON.parse(deita);
console.log(backObject.name)