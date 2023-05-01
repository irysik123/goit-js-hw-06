const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

const ingredientItem = [];

for (let i = 0; i < ingredients.length; ++i) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item');
  ingredientItem.push(li);
}

ingredientsList.append(...ingredientItem)