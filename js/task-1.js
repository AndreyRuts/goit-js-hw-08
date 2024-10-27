const categoriesCount = document.querySelectorAll(".item")
console.log(`Number of categories: ${categoriesCount.length}`);
categoriesCount.forEach(element => {
    const title = element.querySelector("h2").textContent;
    const item = element.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${item}`);
});