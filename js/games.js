const topGamesContainer = document.getElementById("topGames");
const allGamesContainer = document.getElementById("allGames");

const games = [
  { name: "Bloxorz", location: "bloxorz" },
  { name: "Cat Ninja", location: "cat-ninja" },
  { name: "Fireboy & Watergirl", location: "fireboy-and-watergirl" },
  { name: "Raft Wars", location: "raftwars" },
  { name: "Raft Wars 2", location: "raftwars2" },
  { name: "Run", location: "run" },
  { name: "Run 2", location: "run2" },
  { name: "Run 3", location: "run3" },
  { name: "Sports Heads 🏀", location: "sports-heads-basketball" },
  { name: "Sports Heads ⚽", location: "sports-heads-ftbl" },
  { name: "Sports Heads 🏒", location: "sports-heads-ice-hockey" },
  { name: "Sports Heads 🎾", location: "sports-heads-tennis" },
  { name: "Sports Heads 🏐", location: "sports-heads-volleyball" },
  { name: "Vex", location: "vex" },
  { name: "Vex 2", location: "vex2" },
  { name: "Vex 3", location: "vex3" },
];

const topGames = ["Raft Wars", "Run", "Vex 3", "Fireboy & Watergirl"];

function createCard(game) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.cursor = "pointer";

  card.addEventListener("click", () => {
    window.location.href = `./game/${game.location}/index.html`;
  });

  const img = document.createElement("img");
  img.src = `./game/${game.location}/cover.png`;

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
