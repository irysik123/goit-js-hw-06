const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
const categoriesCount = categoriesItems.length;
console.log(`Number of categories: ${categoriesCount}`);


categoriesItems.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}
Elements: ${categoryElements}`);
});


