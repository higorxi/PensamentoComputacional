document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    var nome =  document.getElementById('name').value
    
    var n1 = parseInt(document.getElementById('n1').value)
    var n2 = parseInt(document.getElementById('n2').value)
    var n3 = parseInt(document.getElementById('n3').value)

    var media = Math.round((n1+n2+n3)/3)

    var resultado = document.getElementById('res')

    resultado.innerText = 'a'

    console.log(media)
})