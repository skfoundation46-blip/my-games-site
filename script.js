// ===== Search =====
const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".game-card").forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      card.style.display = title.includes(value) ? "block" : "none";
    });
  });
}

// ===== Category Buttons =====
document.querySelectorAll(".category button").forEach(button => {
  button.addEventListener("click", () => {
    alert(button.textContent + " Games Coming Soon!");
  });
});

// ===== Welcome Popup =====
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("🎉 Welcome to My Yono Games!");
  }, 1000);
});

// ===== Scroll To Top =====
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
left:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0b8f45;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {
  topBtn.style.display =
    document.documentElement.scrollTop > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
