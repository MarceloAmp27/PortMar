// Váriaveis jogador
let nome;

// Variáveis de Imagens
let imgRoad;
let imgPlayer;
let imgCar1;
let imgCar2;
let imgCar3;

// Variáveis de Som
let backSound;
let pointSound;
let collisionSound;

function preload() {
  nome = prompt("Digite seu nome: ");
  imgRoad = loadImage("./images/estrada.png"); // Imagem de Fundo
  imgPlayer = loadImage("./images/ator-1.png");
  imgCar1 = loadImage("./images/carro-1.png");
  imgCar2 = loadImage("./images/carro-2.png");
  imgCar3 = loadImage("./images/carro-3.png");
  imgCars = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar2, imgCar3];

  // Sounds
  backSound = loadSound("./sounds/trilha.mp3");
  pointSound = loadSound("./sounds/pontos.wav");
  collisionSound = loadSound("./sounds/colidiu.mp3");
}

function verifyName() {
  if (nome == "") {
    nome = "Player null";
  } else {
    return;
  }
}
