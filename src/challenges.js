// Desafio 1
function compareTrue(parametro1, parametro2) {
  if(parametro1 === true && parametro2 === true){
    
    return true
  
  } else {return false}




}

// Desafio 2
function calcArea(base , height) {
  
  return(base * height)/2

}

// Desafio 3
function splitSentence(string) {
  
  palavra = string.split(" ")
  
  return palavra

}

// Desafio 4
function concatName(lista_nomes) {
  
  let lista_nomes = lista_nomes[lista_nomes.lenght - 1]
  
  let lista_nomes2 = lista_nomes[0]
  
  return lista_nomes + ", " + lista_nomes2
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

  for (let index of lista) {
    
    if(i[index]==null) {

      i[index] = 1

    } else{
      
      i[index] += 1
    
    } if(i[index] > maximoContador) {
      valor_maximo = i
      contador = i[index]

    }

  }
  return {contador}  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  

  let txt = "os gatos trombam e o rato foge"

  cat1 = cat1 - mouse
  cat2 = cat2 - mouse
  if(cat2 < cat1){
    return cat2

  } else if(cat1 < cat2){
    return cat1
  
  }else if(cat1 === cat2) {
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
