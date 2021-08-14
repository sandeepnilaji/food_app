// console.log("hi");
var i = random(3);

function random(num) {
  return Math.floor(Math.random() * num);
}
async function search_recent() {
  let arr = ["banana", "koshari", "Clam chowder", "Fish fofos"];
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${arr[i]}`
  );
  let data = await res.json();
  let x = data.meals;

  //   console.log(data.meals);
  show_recent(x);
}
search_recent();

function show_recent(d) {
  let show1 = document.getElementById("show");
  show1.innerHTML = null;
  d.forEach((el) => {
    let div1 = document.createElement("div");
    div1.className = "showing";
    let tag_p1 = document.createElement("p");
    tag_p1.innerHTML = el.strMeal;
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let tag_p = document.createElement("p");
    tag_p.innerHTML = el.strInstructions;
    div1.append(img, tag_p1, tag_p);
    show1.append(div1);
  });
}
