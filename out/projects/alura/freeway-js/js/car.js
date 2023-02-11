// Listagem dos Carros
let xCars = [700, 700, 700, 700, 700, 700]; // Posição no Eixo X
let yCars = [45, 100, 155, 210, 265, 322]; // Posição no Eixo Y
let vCars = [2.8, 3.6, 6.5, 4.8, 3.9, 7.4]; // Velocidade do Carro

// W = Largura e H = Altura de todos os carros
let wCars = 60;
let hCars = 30;

// Mostra os carros em suas posições
// Repetição da listagem até criar os 3 carros.
function showCars() {
  for (let i = 0; i < imgCars.length; i++) {
    image(imgCars[i], xCars[i], yCars[i], wCars, hCars);
  }
}

function movCar() {
  for (let i = 0; i < imgCars.length; i++) {
    xCars[i] -= vCars[i];
  }
}

function positionInitialCar() {
  for (let i = 0; i < imgCars.length; i++) {
    if (passScreen(xCars[i])) {
      xCars[i] = 700;
    }
  }
}

function passScreen(xCars) {
  return xCars < -60;
}
