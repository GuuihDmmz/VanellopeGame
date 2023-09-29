let xPenel = 85;
let yPenel = 366;
let colisao = false;
let meusPontos = 0;

function mostraPenel(){
  image(imagemDaPenel, xPenel, yPenel, 50, 40);
}

function movimentaPenel(){
  if (keyIsDown(UP_ARROW)){
    yPenel -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yPenel += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMover()){
      xPenel -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMover()){
      xPenel += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPenel, yPenel, 15)
    if (colisao){
      voltaPenelParaPosicaoInicial();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaPenelParaPosicaoInicial(){
  yPenel = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yPenel < 15){
    meusPontos += 1;
    voltaPenelParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yPenel < 366;
}