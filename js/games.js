const topGamesContainer = document.getElementById("topGames");
const allGamesContainer = document.getElementById("allGames");

const games = [
  { name: "Bloxorz", img: "img/bloxorz.png", link: "bloxorz" },
  { name: "Cat Ninja", img: "img/cat-ninja.png", link: "cat-ninja" },
  { name: "Fireboy & Watergirl", img: "img/fireboy&watergirl.png", link: "fireboy-and-watergirl" },
  { name: "Raft Wars", img: "img/raftwars.png", link: "raftwars" },
  { name: "Raft Wars 2", img: "img/raftwars2.png", link: "raftwars2" },
  { name: "Run", img: "img/run.png", link: "run" },
  { name: "Run 2", img: "img/run2.png", link: "run2" },
  { name: "Run 3", img: "img/run3.png", link: "run3" },
  { name: "Sports Heads 🏀", img: "img/sportsheadsbasketball.png", link: "sports-heads-basketball" },
  { name: "Sports Heads ⚽", img: "img/sportsheadsfootball.png", link: "sports-heads-ftbl" },
  { name: "Sports Heads 🏒", img: "img/sportsheadshockey.png", link: "sports-heads-ice-hockey" },
  { name: "Sports Heads 🎾", img: "img/sportsheadstennis.png", link: "sports-heads-tennis" },
  { name: "Sports Heads 🏐", img: "img/sportsheadsvolleyball.png", link: "sports-heads-volleyball" },
  { name: "Vex", img: "img/vex.png", link: "vex" },
  { name: "Vex 2", img: "img/vex2.png", link: "vex2" },
  { name: "Vex 3", img: "img/vex3.png", link: "vex3" },
];

const topGames = ["Raft Wars", "Run", "Vex 3", "Fireboy & Watergirl"];

function createCard(game) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.cursor = "pointer";

  card.addEventListener("click", () => {
    window.location.href = `game/${game.link}.html`;
  });

  const img = document.createElement("img");
  img.src = game.img;

  const title = document.createElement("h4");
  title.textContent = game.name;

  card.appendChild(img);
  card.appendChild(title);

  return card;
}

topGames.forEach(name => {
  const game = games.find(g => g.name === name);
  if (game) {
    topGamesContainer.appendChild(createCard(game));
  }
});

// render all games
games.forEach(game => {
  allGamesContainer.appendChild(createCard(game));
});
