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
// ===== Game Search =====
const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();

      if (title.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ===== Category Filter =====
const categoryButtons = document.querySelectorAll(".category button");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert(btn.innerText + " category will be added soon.");
  });
});

// ===== Welcome Popup =====
window.onload = function () {
  setTimeout(() => {
    alert("🎉 Welcome to My Yono Games!\nEnjoy Daily Bonus & Top Games.");
  }, 1000);
};

// ===== Scroll To Top Button =====
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.left = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0b8f45";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
