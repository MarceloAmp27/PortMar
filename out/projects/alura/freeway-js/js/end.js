function tryAgain() {
  if (lifePlayer == 0) {
    alert(
      "Records no Jogo\n\n" +
        "\t• " +
        nome +
        " <---> Record: " +
        pointPlayer +
        "\n\n" +
        "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n" +
        "Game Over!!\n\n" +
        "Tente Novamente!\n\n"
    );
    lifePlayer = 3;
    pointPlayer = 0;
    vCars = [2.8, 3.6, 6.5, 4.8, 3.9, 7.4];
  } else {
    return;
  }
}
