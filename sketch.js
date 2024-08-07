
// variáveis da bolinha 
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha= 6;

// variáveis da raquete
let xraquete = 5;
let yraquete = 150 ;
let raquetecomprimento = 10 ;
let raquetealtura = 90 ;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false ;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xraquete,yraquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  // verigicaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca(xraquete, yraquete);
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
      velocidadeXBolinha *= -1;
  }

  
  if(yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeYBolinha *= -1;
  }
}
  
  function mostraRaquete() {
    rect (xraquete, yraquete, raquetecomprimento, raquetealtura);
 }
   function movimentaMinhaRaquete (){
     if (keyIsDown(UP_ARROW)) {
     yRaquete -= 10; 
     }
     if(keyIsDown(DOWN_ARROW))  {
     yRaquete += 10;
   }
}
   function verificaColisaoRaquete() {
     if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio < yRquete) { 
     }
   }