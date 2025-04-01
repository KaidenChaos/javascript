function verificar() {

    var nascimento = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    var generoradio = document.getElementsByName('radsex')
    var anoatual = 2025
    var img = document.getElementById('imagem')
    var idade = anoatual - Number(nascimento.value)
    var genero = ''
    var imagem = ''

    if (generoradio[0].checked) {
        if (idade<10) {
            genero = 'Criança';
            imagem = 'crmale.png';

        } else if (idade<21) {
            genero = 'Jovem';
            imagem = 'teenmale.png';

        } else if (idade < 50) {
            genero = 'Adulto';
            imagem = 'male.png';

        } else {
            genero = 'Idoso';
            imagem = 'oldmen1.png';
        }
    } else if (generoradio[1].checked) {
        if (idade < 10) {
            genero = 'Criança';
            imagem = 'crfemale.png';

        } else if (idade < 21) {
            genero = 'Jovem';
            imagem = 'teenfem.png';

        } else if (idade < 50) {
            genero = 'Adulto';
            imagem = 'female.png';

        } else {
            genero = 'Idoso';
            imagem = 'oldwomen.png';
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    img.src = imagem
    img.alt = `${genero} com ${idade} anos.`
}