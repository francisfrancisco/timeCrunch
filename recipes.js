console.log("LETS GO KNICKS");

const foods = document.getElementsByName("Protein");
const recipeResults = document.querySelector("#recipeResults")


//values will be number(after parsed) and string
// let recipe = {
//   time: parseInt(document.querySelector("#minutes".value)),
//   protein:
// }

document.querySelector("#submitButton").addEventListener("click", (e) => {
  e.preventDefault();
  let protein = ""
  const cookTime = document.querySelector("#minutesMax").value;
  const mincookTime = document.querySelector("#minutesMin").value;
  let foods = document.getElementsByName("Protein");
  for(let i=0; i<foods.length; i++){
    if(foods[i].checked){
      protein = foods[i].value
    };
  };
  console.log(protein)
  axios.get(`https://api.edamam.com/search?&time=${mincookTime}-${cookTime}&q=${protein}`)
    .then(result => {
      let recipes = result.data.hits
      console.log(recipes)
      for(let i=0; i<recipes.length; i++){
        recipeResults.innerHTML += `<img src="${recipes[i].recipe.image}"><br><a href="${recipes[i].recipe.url}">${recipes[i].recipe.label}</a><br>`
      }
    });
});
