function food_navbar() {
  return `<div id="food_navbar">
      <h3><a href="./homepage.html">Home</a></h3>
      <input type="search" placeholder="search receipe by name" id="in"/>
      <button id="btsearch">search</button>
      <h3><a href="./get_rec.html">get receipe of the day</a></h3>
      <h3><a href="./latest_rec.html"> show latest receipe</a></h3>
    </div>
    <div id="show"></div>
    `;
}

export default food_navbar;
