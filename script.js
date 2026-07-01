const games = [
{
name: "51 Game",
bonus: "₹28 Bonus",
image: "https://via.placeholder.com/300x200?text=51+Game",
link: "https://your-referral-link.com"
},
{
name: "91 Club",
bonus: "₹100 Bonus",
image: "https://via.placeholder.com/300x200?text=91+Club",
link: "https://your-referral-link.com"
},
{
name: "BDG Win",
bonus: "₹55 Bonus",
image: "https://via.placeholder.com/300x200?text=BDG+Win",
link: "https://your-referral-link.com"
}
];

const container = document.getElementById("games");

games.forEach(game => {
container.innerHTML += `
<div class="game-card">
<img src="${game.image}">
<h3>${game.name}</h3>
<p>${game.bonus}</p>
<a class="download-btn" href="${game.link}" target="_blank">Download Now</a>
</div>`;
});
