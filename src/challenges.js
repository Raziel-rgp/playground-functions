// Desafio 1
function compareTrue(parametro1, parametro2) {
  if(parametro1 === true && parametro2 === true){
    return true
  
  }
  return false

}
// Desafio 2
function calcArea(base , height) {
  return (base * height)/2

}

// Desafio 3
function splitSentence(string) {
  
  palavra = string.split(" ")
  
  return palavra

}

// Desafio 4
function concatName(listaNomes) {  
  let nome1 = listaNomes.length -1
  return listaNomes[nome1] + ', ' + listaNomes[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + 1 * ties
}

// Desafio 6
function highestCount(lista) {
  // fiz com a ajuda de um colega
  
  let valor_maximo = 0
  let contador = 0
  let i = {}
  for 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {


  let txt = "os gatos trombam e o rato foge"

  calculo1 = cat1
  calculo2 = cat2
  
  let txt1 = "cat1"
  let txt2 = "cat2"

  if (calculo2 < calculo2){
    return txt1

  } else if(calculo1 < calculo2){
    return txt2

  }else if(calculo1 === calculo2) {
    return txt

  }

}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
