// Variáveis do Player
let xPlayer = 100;
let yPlayer = 370;
let dPlayer = 15;

// Variáveis de Ponto do Jogador
let pointPlayer = 0;

// Variáveis da Vida do Jogador
let lifePlayer = 3;

// Variáveis de Colisão do Player com o Carro
let collision = false;

function showPlayer() {
  image(imgPlayer, xPlayer, yPlayer, 30, 30);
}

function movPlayer() {
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
    yPlayer -= 3;
  } else if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    yPlayer += 3;
  } else if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    xPlayer -= 3;
  } else if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    xPlayer += 3;
  } else {
    return;
  }
}

function collidePlayer() {
  for (let i = 0; i < imgCars.length; i++) {
    collision = collideRectCircle(
      xCars[i],
      yCars[i],
      wCars,
      hCars,
      xPlayer,
      yPlayer,
      dPlayer
    );

    if (collision) {
      collidedReturnPositionInitial();
      if (lifeDelete()) {
        lifePlayer -= 1;
        collisionSound.play();
      }
    }
  }
}

function collidedReturnPositionInitial() {
  xPlayer = 100;
  yPlayer = 370;
}

function pointAndLifeBoard() {
  textAlign(CENTER);
  textFont("Poppins");
  textSize(22);
  fill(255);
  text("Pontos: " + pointPlayer, width / 5, 26);
  text("Vida: " + lifePlayer, 480, 26);
}

function pointInsert() {
  if (yPlayer < 15) {
    pointPlayer += 1;
    pointSound.play();
    collidedReturnPositionInitial();
  }
}

function lifeDelete() {
  return lifePlayer > 0;
}

// Resolução de Bugs
function collisionBorders() {
  if (yPlayer > 370) {
    yPlayer = 370;
  } else if (xPlayer < -5) {
    xPlayer = -5;
  }
}
