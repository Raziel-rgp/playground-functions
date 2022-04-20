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
  for(let i = 0; i < lista.length;i++){ 
    if(valor_maximo != lista[i]){
        valor_maximo = lista[i]
        contador++
    }else if(valor_maximo == lista[i]){
        contador++

    }
  }
  console.log(valor_maximo)
  console.log(contador)
  return contador
}
highestCount([9, 1, 2, 3, 9, 5, 7])

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {


  let txt = "os gatos trombam e o rato foge"
  let d = Math.abs(cat1 - mouse)
  let e = Math.abs(cat2 - mouse)
  //Math.abs(cat1)
  //Math.abs(cat2)

  let txt1 = "cat1"
  let txt2 = "cat2"

  if (e < d) {
    return txt2

  } else if(d < e) {
    return txt1

  }else {
    return txt

  }
}

console.log(catAndMouse(2, 4 ,6))

// Desafio 8
function fizzBuzz(listafizz) {
  let fizztxt = 'bug!'
  let fizztxt1 = 'fizz'
  let fizztxt2 = 'buzz'
  let fizztxt3 = 'fizzBuzz'
  let resposta = []
  for(let i = 0; i < listafizz.length; i++){
    if (listafizz[i] % 3 === 0 & listafizz[i] % 5 === 0){
      resposta.push(fizztxt3)
    } else if(listafizz[i] % 3 === 0){
      resposta.push(fizztxt1)

    }else if(listafizz[i]% 5 === 0){
      resposta.push(fizztxt2)
  
    }else{
      resposta.push(fizztxt)
    }
  }
  return resposta
}

// Desafio 9
function encode(codigo) {
  let numeros = ''
  for(let i = 0; i < codigo.length; i++){
    if(codigo[i] === 'a'){
      numeros += '1'
    }else if(codigo[i] === 'e'){
      numeros += '2'
    }else if(codigo[i] === 'i'){
      numeros += '3'
    }else if(codigo[i] === 'o'){
      numeros += '4'
    }else if(codigo[i] === 'u'){
      numeros += '5'
    }else{
      numeros += codigo[i]
    }
  }
  return numeros
}
console.log(encode('How are you today'))


function decode(codificado) {
  let numeros = ''
  for(let i = 0; i < codificado.length; i++){
    if(codificado[i] === '1'){
      numeros += 'a'
    }else if(codificado[i] === '2'){
      numeros += 'e'
    }else if(codificado[i] === '3'){
      numeros += 'i'
    }else if(codificado[i] === '4'){
      numeros += 'o'
    }else if(codificado[i] === '5'){
      numeros += 'u'
    }else{
      numeros += codificado[i]
    }
  }
  return numeros
}
console.log(decode('h2ll4 th2r2'))
// Desafio 10
function techList(listaTech) {

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
