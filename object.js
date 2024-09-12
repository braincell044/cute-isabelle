
// creating object
const person = {
    firstName: "Ugochukwu",
    lastName: "Meshach",
    phoneNumber: 7039987705,
    isDisabled: false,
    skills: ["html","css", "javaScript"],
    getBioData: function(){
        return `hello ${this.firstName} ${this.phoneNumber}`
    }

}
console.log(person.phoneNumber)
console.log(person['isDisabled'])
console.log(person.getBioData())
const language ={
    fisrtLaguage: "Igbo",
    secondLaguage: "English",
    generalLaguage: function(){
        return `my first Language is ${this.fisrtLaguage} my second language is ${this.secondLaguage}`
    }

}
language.thirdLanguage = "yoruba"
console.log(language.secondLaguage)
console.log(language['fisrtLaguage'])
console.log(language.generalLaguage())
console.log(language)

let languageTwo = Object.assign({}, language)
console.log(languageTwo)
console.log(Object.keys(person))
console.log(Object.values(languageTwo))
console.log(Object.entries)
console.log(person.hasOwnProperty("food"))

//task
//(a) create an empty object called dog
let dog ={
    dogName: "Jack",
    legs: 4 ,
    color: "brown",
    age: 4,
    bake: function(){
        return `woof woof`
    }
}
console.log(dog.dogName)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bake())
dog.breed = "Goldendoodle"
dog.getDogInfo = function(){
    return `my Dog name is ${this.dogName} it has ${this.legs} legs  with ${this.color} color and age ${this.age} it's breed ${this.breed} and it can bark ${this.bake()}`

}
console.log(dog.getDogInfo())

function number(firstNumber, secondNuber){

let total = firstNumber + secondNuber
return total


}
console.log(number(4,5))

function greet(){
    return "Good evening"
}
function salutation(salute){
    return salute

}
console.log(salutation(greet()))

const num = [1,2,3,4,5]
const newNum = num.map((eachItem)=>{return eachItem ** 2})
console.log(newNum)



//reduce for avarage 
const squareRoot =  num.map((each) => Math.sqrt(each))
console.log(squareRoot)

//filter
const myFilter = num.filter((num) =>{return num % 2 === 0})
console.log(myFilter)

//set timeout(function, time)
setTimeout(function multiply(){
    console.log(2 * 4)
},5000)
//setInterval(function, time)
setInterval(function(){
    console.log("hello!")
},10000)

function sayHello (){
    console.log("hello")
}
setTimeout(sayHello,3000)
setTimeout( ()=>{
    console.log("hi")
},4000

)

function myName(){
    console.log("Ugochukwu")
}
setTimeout(myName,10000)

setInterval(() => {
    console.log("Good Afternoon")
}, 6000);

//promise 

const getData = new Promise((resolve, reject)=>{
   let api = true;
   if (api ===true){
    resolve("i got my api")
   }else{
    reject("no Data found")
   }
})
getData
.then((result)=>console.log(result))
.catch((error)=>console.log(error))


const getGender = new Promise((resolve, reject)=>{
    let male = true;
    if(male === true){
        resolve("yes i am a male")
    }else{
        reject("no am not a male")
    }
})
getGender
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

//application programming interface
//https://jsonplaceholder.typicode.com/users


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((result)=>{
    console.log(result)
result.map((eachItem)=>console.log(eachItem.name))})
.catch((error)=>{console.log(error)})


async function add(){
    return 1 + 1
}
console.log(add())


function plus(){
    return new Promise((resolve, reject)=>{
    
        setTimeout(()=>{
            console.log(1+1)
            resolve()
        },2000)
    
    })
}

async function add(){
    await plus()
  console.log("ok")
}

add()

let myAarry = ["my","name","is","Ugochukwu","Meshach"]

  let newMyArray = myAarry.forEach(myAarry => console.log(myAarry))

    console.log(newMyArray)
//arrow function 1st is item 2nd is index 3rd is arry for map filter foreach

//accumulator
const sumAll = num.reduce((acc,cur)=>{return acc + cur},0)
console.log(sumAll)
//every to check all item
const areAllStr = myAarry.every((myAarry) => typeof myAarry ==='string')
console.log(areAllStr)

const nums = num.find((num)=>num ===3)
console.log(nums)
const findString = myAarry.findIndex((each)=>  each === `${myAarry[myAarry.length -1]}`)
console.log(findString)

    
    function nextOn (){
  
        var nowThese = document.getElementsByClassName("dom")
        for (a = 0; a < nowThese.length; a++){
            nowThese[a].innerHTML = "i got a surprise for you!"  
        }
        }
        setTimeout(nextOn,3000)


function nextOne (){
  
    var sayThese = document.getElementsByClassName("dom")
    for (a = 0; a < sayThese.length; a++){
        sayThese[a].innerHTML = "i love you!"  
    }
    }
    setTimeout(nextOne,5000)

 setInterval(function(){   
var sayHello = document.getElementsByTagName("h2")

for(b = 0; b< sayHello.length; b++){
    sayHello[b].innerHTML = "what are you doing"

}

},10000)

    
        ellipse(200, 200, 300, 350);
        console.log(ellipse)