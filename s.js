// console.log("hi");

async function search(url) {
  let res = await fetch(url);
  let data = await res.json();
  let x = data.meals;
  return x;
}

function show_item(d, show1) {
  //   var show1 = document.getElementById("show");
  show1.innerHTML = null;
  d.forEach((el) => {
    let div1 = document.createElement("div");
    div1.className = "showing";
    let tag_p1 = document.createElement("p");
    tag_p1.innerHTML = el.strMeal;
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let tag_p = document.createElement("p");
    tag_p.innerHTML = el.strTags;
    div1.append(img, tag_p1, tag_p);
    show1.append(div1);
  });
}

export { search, show_item };
