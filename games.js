const games = [
{
  name: "ABC Rummy",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/abcrummy.png",
  link: "https://www.11abcrummy.com/"
},
{
  name: "Bet213",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/bet213.png",
  link: "https://www.bet213.pro/"
},
{
  name: "Bingo 101",
  bonus: "₹900 Bonus",
  redeem: "Min ₹100",
  image: "images/bingo101.png",
  link: "https://bingo101.info/"
},
{
  name: "Boss Rummy",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/bossrummy.png",
  link: "https://www.bossrummyo.com/"
},
{
  name: "Club INR VIP",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/clubinrvip.png",
  link: "https://clubinrvip.cc/"
},
{
  name: "Diwa777",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/diwa777.png",
  link: "https://sharediwa7773.top/"
},
{
  name: "Game Rummy",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/gamerummy.png",
  link: "https://gamerummyc.com/"
},
{
  name: "Go Spin",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/gospin.png",
  link: "https://www.gospin.bet/"
},
{
  name: "Hindi777",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/hindi777.png",
  link: "https://www.hindi777agent5.com/"
},
{
  name: "Hi Rummy",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/hirummy.png",
  link: "https://joinhirummy.cc/"
},
{
  name: "IND Club",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/indclub.png",
  link: "https://indclub.com/"
},
{
  name: "Yono Slots",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/yonoslots.png",
  link: "https://www.uonoslots.com/"
},
{
  name: "Yono Rummy",
  bonus: "₹1500 Bonus",
  redeem: "Min ₹100",
  image: "images/yonorummy.png",
  link: "https://yonorummy047.com/"
},
{
  name: "Yono Games",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/yonogames.png",
  link: "https://youonogamespromocode.com/"
},
{
  name: "Yono Official",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/yonoofficial.png",
  link: "https://yonoofficial3.com/"
},
{
  name: "Yes Spin",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/yesspin.png",
  link: "https://www.yesspinnow.com/"
},
{
  name: "Top Rummy",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/toprummy.png",
  link: "https://www.toprummy.cc/"
},
{
  name: "Spin101",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/spin101.png",
  link: "https://spin101-c.net/"
},
{
  name: "Spin777",
  bonus: "₹100 Bonus",
  redeem: "Min ₹100",
  image: "images/spin777.png",
  link: "https://spin777dd.com/"
},
{
  name: "Spin Winner",
  bonus: "₹1500 Bonus",
  redeem: "Min ₹100",
  image: "images/spinwinner.png",
  link: "https://spinwinner-g.com/"
}
];const container = document.getElementById("games");

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
