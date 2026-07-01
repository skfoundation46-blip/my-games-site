 const games = [
{
name:"101 Z",
bonus:"Sign-Up Bonus ₹800",
redeem:"Min. Redeem ₹100",
image:"https://via.placeholder.com/300x300?text=101+Z",
link:"#"
},
{
name:"MY 777",
bonus:"Sign-Up Bonus ₹1200",
redeem:"Min. Redeem ₹100",
image:"https://via.placeholder.com/300x300?text=MY+777",
link:"#"
},
{
name:"Rummy 365",
bonus:"Sign-Up Bonus ₹1500",
redeem:"Min. Redeem ₹100",
image:"https://via.placeholder.com/300x300?text=Rummy+365",
link:"#"
},
{
name:"Teen Patti Master",
bonus:"Sign-Up Bonus ₹500",
redeem:"Min. Redeem ₹100",
image:"https://via.placeholder.com/300x300?text=Teen+Patti",
link:"#"
}
];

const container = document.getElementById("games");

games.forEach(game=>{
container.innerHTML += `
<div class="card">
<img src="${game.image}">
<h3>${game.name}</h3>
<p class="bonus">${game.bonus}</p>
<p class="redeem">${game.redeem}</p>
<a href="${game.link}" class="btn" target="_blank">DOWNLOAD NOW</a>
</div>
`;
});
