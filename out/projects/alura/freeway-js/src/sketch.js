function setup() {
  createCanvas(600, 400);
  backSound.loop();
}

function draw() {
  background(imgRoad);
  // Verifica se o nome do jogador foi inserido
  verifyName();
  // Mostra o Player e os Carros
  showPlayer();
  showCars();

  // Movimentação e Looping do Carro
  movCar();
  positionInitialCar();

  // Movimentação e Colisão do Jogador
  movPlayer();
  collidePlayer();

  // Pontos e Vida do Jogador
  pointAndLifeBoard();
  pointInsert();
  tryAgain();

  // Dificuldade
  vCarsDifficulty();

  // Resolucão de Bugs
  collisionBorders();
}
