const search = document.getElementById("search");

search.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".game-card");

  cards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();

    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
document.getElementById("search").addEventListener("keyup",function(){
let value=this.value.toLowerCase();
document.querySelectorAll(".game-card").forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";
});
});
