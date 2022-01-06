var listaFilmes = []
function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    console.error('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}

function listarFilmesNaTela(filme) {
  if (listaFilmes.includes(filme)) {
    var elementoFilmeRepetido = document.getElementById('filmeRepetido')
    var filmeRepetido = 'O filme já está na lista'
    elementoFilmeRepetido.innerHTML = filmeRepetido
  } else {
    var elementoFilmeRepetido = document.getElementById('filmeRepetido')
    elementoFilmeRepetido.innerHTML = ''
    listaFilmes.push(filme)
    console.log(filme)
    var elementoFilmeFavorito = '<img src=' + filme + '>'
    var elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito
  }
}
