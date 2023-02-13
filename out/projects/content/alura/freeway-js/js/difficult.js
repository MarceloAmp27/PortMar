// vCars = [2.8, 3.6, 6.5, 4.8, 3.9, 7.4]

function vCarsDifficulty() {
  if (pointPlayer >= 5) {
    vCars = [4.8, 5.6, 7.5, 5.8, 4.9, 7.4];
    if (pointPlayer >= 15) {
      vCars = [5.8, 6.6, 8.5, 6.8, 5.9, 8.4];
      if (pointPlayer >= 25) {
        vCars = [6.8, 7.6, 9.5, 7.8, 6.9, 9.4];
        if (pointPlayer >= 35) {
          vCars = [7.8, 8.6, 10.5, 8.8, 7.9, 10.4];
          if (pointPlayer >= 45) {
            vCars = [8.8, 9.6, 11.5, 9.8, 8.9, 11.4];
          }
        }
      }
    }
  }
}
