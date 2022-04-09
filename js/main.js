//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('#drinkBtn').addEventListener('click', getDrink);

let drinkPic = document.querySelector('img')
let drinkName = document.querySelector('h2')
let drinkInst = document.querySelector('h3')
let drinkIng = document.querySelector('h5')

let current = 0
var max = 0
let ingredients = []

function getDrink(){
 
  drinkIng.innerText = ''
  ingredients = []
    let drink = document.querySelector('input').value;

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`) 
.then(res => res.json()) 
.then(data => { 
  console.log(data) //logs event object
  console.log(data.drinks[0].strDrinkThumb) //shows where picture was

  let currentDrink = data.drinks[current]
  drinkPic.src = data.drinks[current].strDrinkThumb //drink pic
  drinkName.innerText = currentDrink.strDrink //drink name
  drinkInst.innerText = currentDrink.strInstructions //instr.
  
  max = data.drinks.length - 1


 
  // GETTING INGREDIENTS AND PUTTING INTO AN ARRAY
 

  ingredients.push(data.drinks[current].strIngredient1)
  ingredients.push(data.drinks[current].strIngredient2)
  ingredients.push(data.drinks[current].strIngredient3)
  ingredients.push(data.drinks[current].strIngredient4) 
  ingredients.push(data.drinks[current].strIngredient5)
  ingredients.push(data.drinks[current].strIngredient6)
  ingredients.push(data.drinks[current].strIngredient7)
  ingredients.push(data.drinks[current].strIngredient8)
  ingredients.push(data.drinks[current].strIngredient9)
  ingredients.push(data.drinks[current].strIngredient10)
  ingredients.push(data.drinks[current].strIngredient11)
  ingredients.push(data.drinks[current].strIngredient12)
  console.log(ingredients)
 
  
  
  for(let i = 0; i <= ingredients.length -1; i++){
    if(ingredients[i] === null){
      console.log('null value here')

    }else{ 
      drinkIng.innerText += `-${ingredients[i]} \n `
    }

  }
  
})
.catch(err => {
    console.log(`error ${err}`)
});
}



//   CYCLE RIGHT
document.querySelector('#rightArrow').addEventListener('click', cycleRight)
function cycleRight(){
  // drinkIng.innerText = ''
    if(current === max){ //testing against max value
      current = current + 0
      console.log('cannot go any further to the right')
      drinkIng.innerText += `-${ingredients[i]} \n `
    }else{
      current = current+1 // this needs to test against max
      getDrink()
        console.log('right clicked')
    } 
 
}

// CYCLE LEFT
document.querySelector('#leftArrow').addEventListener('click', cycleLeft)
function cycleLeft(){
  // drinkIng.innerText = ''
  if(current === 0){
    current = current + 0
    console.log('cannot go any further to the left')
    drinkIng.innerText += `-${ingredients[i]} \n `
  }else{
    current = current - 1 // this needs to test against max
    getDrink()
      console.log('left clicked')
  }
}




















//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector('#submit').addEventListener('click', getCocktail) //getDrink

// let drinkPic = document.querySelector('img')

// //add these here
// var current = 0
// var max = 0


// function getCocktail() {
//     let drink = document.querySelector('input').value
//     fetch(`https:///www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json())
//     .then(data => {
//       let drink = data.drinks[current]
//       console.log(data)
//       document.querySelector('h2').innerText = drink.strDrink
//       document.querySelector('h3').innerText = drink.strInstructions
  
//       drinkPic.src = data.drinks[current].strDrinkThumb
//       max = data.drinks.length
  
//       let ingredients = []
//   for (let i = 0; i < 20; i++) {
//     let ingredientNum = `strIngredient${i}`
//     let ingredient = data.drinks[0][ingredientNum]
//     if (ingredient === null) break // exit the loop if the ingredients are finished
//     ingredients.push(ingredient)
//   }
//   console.log(ingredients)
//     })
//   }
  



// //   CYCLE RIGHT
// document.querySelector('#rightArrow').addEventListener('click', cycleRight)
// function cycleRight(){
//   current = current+1 // this needs to test against max
//   getCocktail()
//     console.log('right clicked')
// }


// // CYCLE LEFT
// document.querySelector('#leftArrow').addEventListener('click', cycleLeft)
// function cycleLeft(){
// current = current - 1
// getCocktail()
//     console.log('left clicked')
// }




