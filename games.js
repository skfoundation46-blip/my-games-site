const games = [

{
  name:"ABC Rummy",
  bonus:"₹100 Bonus",
  redeem:"Min ₹100",
  image:"images/abcrummy.png",
  link:"https://www.11abcrummy.com/?code=75CAZX4PBFD&t=1782980303"
},

{
  name:"Bet213",
  bonus:"₹100 Bonus",
  redeem:"Min ₹100",
  image:"images/bet213.png",
  link:"https://www.bet213.pro/?code=2QTYVYTR77F&t=1782988092"
},

{
  name:"Bingo 101",
  bonus:"₹900 Bonus",
  redeem:"Min ₹100",
  image:"images/bingo101.png",
  link:"https://bingo101.info/?code=H73SL4DYWJW&t=1782988177"
},

{
  name:"Boss Rummy",
  bonus:"₹100 Bonus",
  redeem:"Min ₹100",
  image:"images/bossrummy.png",
  link:"https://www.bossrummyo.com/?code=9HFAK694TXD&t=1782988271"
},

{
  name:"Club INR VIP",
  bonus:"₹100 Bonus",
  redeem:"Min ₹100",
  image:"images/clubinrvip.png",
  link:"https://clubinrvip.cc/?code=9VCJY3HUXKW&t=1782988341"
}

];

const container = document.getElementById("games");

games.forEach(game => {
  container.innerHTML += `
    <div class="game-card">
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p class="bonus">${game.bonus}</p>
      <p class="redeem">${game.redeem}</p>
      <a href="${game.link}" class="download-btn" target="_blank">
        Download Now
      </a>
    </div>
  `;
});
