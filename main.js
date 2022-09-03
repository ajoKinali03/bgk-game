// sistem pada palayer
const kartuBatu = document.getElementsByClassName("player-batu")[0];
const kartuGunting = document.getElementsByClassName("player-gunting")[0];
const kartuKertas = document.getElementsByClassName("player-kertas")[0];
const imgBatu = document.getElementsByClassName("img-batu")[0];
const imgGunting = document.getElementsByClassName("img-gunting")[0];
const imgKertas = document.getElementsByClassName("img-kertas")[0];

const batu = document.getElementsByClassName("batu")[0];

batu.addEventListener("click", () => {
  kartuBatu.style.display = "block";
  kartuGunting.style.display = "none";
  kartuKertas.style.display = "none";
  enemiCard(data.batuIndex);
});

const gunting = document.getElementsByClassName("gunting")[0];

gunting.addEventListener("click", () => {
  kartuBatu.style.display = "none";
  kartuGunting.style.display = "block";
  kartuKertas.style.display = "none";
  enemiCard(data.guntingIndex);
});

const kertas = document.getElementsByClassName("kertas")[0];

kertas.addEventListener("click", () => {
  kartuBatu.style.display = "none";
  kartuGunting.style.display = "none";
  kartuKertas.style.display = "block";
  enemiCard(data.kertasIndex);
});

// sistem pada enemi

const imgKartuEnemi = document.getElementsByClassName("img-kartu-enemi")[0];
const imgKartuPlayer = document.getElementsByClassName("img-kartu-player")[0];

const data = {
  batuIndex: 1,
  guntingIndex: 2,
  kertasIndex: 3,

  enemiScore: 0,
  playerScore: 0,
};

function enemiCard(index)  {
  let x = Math.floor(Math.random() * 3 + 1);
  switch (x) {
    case 1:
      imgBatu.style.display = "block";
      imgGunting.style.display = "none";
      imgKertas.style.display = "none";
      break;

    case 2:
      imgBatu.style.display = "none";
      imgGunting.style.display = "block";
      imgKertas.style.display = "none";
      break;

    case 3:
      imgBatu.style.display = "none";
      imgGunting.style.display = "none";
      imgKertas.style.display = "block";
      break;
  };
  //membuat perbandingan untuk mengetahui siapa yang menang dan kalah
  if (index == 1) {
    if (index == x) {
      // seri
      imgKartuEnemi.style.backgroundColor = "#40a9ff";
      imgKartuPlayer.style.backgroundColor = "#40a9ff";
    };
    if (index != x && x == 2) {
      // player menang
      imgKartuEnemi.style.backgroundColor = "#ff3e29";
      imgKartuPlayer.style.backgroundColor = "#6cff4f";
      data.playerScore += 1;
    };
    if (index != x && x == 3) {
      // player kalah
      imgKartuEnemi.style.backgroundColor = "#6cff4f";
      imgKartuPlayer.style.backgroundColor = "#ff3e29";
      data.enemiScore += 1;
    };
  };
  if (index == 2) {
    if (index == x) {
      // seri
      imgKartuEnemi.style.backgroundColor = "#40a9ff";
      imgKartuPlayer.style.backgroundColor = "#40a9ff";
    };
    if (index != x && x == 1) {
      // palyer kalah
      imgKartuEnemi.style.backgroundColor = "#6cff4f";
      imgKartuPlayer.style.backgroundColor = "#ff3e29";
      data.enemiScore += 1;
    };
    if (index != x && x == 3) {
      // player menang
      imgKartuEnemi.style.backgroundColor = "#ff3e29";
      imgKartuPlayer.style.backgroundColor = "#6cff4f";
      data.playerScore += 1;
    };
  };
  if (index == 3) {
    if (index == x) {
      // seri
      imgKartuEnemi.style.backgroundColor = "#40a9ff";
      imgKartuPlayer.style.backgroundColor = "#40a9ff";
    };
    if (index != x && x == 1) {
      // player menang
      imgKartuEnemi.style.backgroundColor = "#ff3e29";
      imgKartuPlayer.style.backgroundColor = "#6cff4f";
      data.playerScore += 1;
    };
    if (index != x && x == 2) {
      // palyer kalah
      imgKartuEnemi.style.backgroundColor = "#6cff4f";
      imgKartuPlayer.style.backgroundColor = "#ff3e29";
      data.enemiScore += 1;
    };
  };
};


// sistem score
const scoreBtn = document.getElementsByClassName('surender-btn')[0];
const scoreCntnr = document.getElementsByClassName('container-score')[0];
const back = document.getElementsByClassName('back-btn')[0];
const enemiScore = document.getElementsByClassName('enemi-point')[0];
const playerScore = document.getElementsByClassName('player-point')[0];

scoreBtn.addEventListener('click', () => {
  scoreCntnr.style.display = 'block';
  enemiScore.innerHTML = data.enemiScore;
  playerScore.innerHTML = data.playerScore;
});

back.addEventListener('click', () => {
  scoreCntnr.style.display = 'none';
});