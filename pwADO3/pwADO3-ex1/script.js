function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('ano');
    var res = document.querySelector('div.resultado');
    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        alert('Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        var generoSelecionado = document.querySelector('input[name="sexo"]:checked');
        if (generoSelecionado) {
            genero = generoSelecionado.value;
            if (genero === 'Homem') {
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'https://planetadelbebe.com/wp-content/uploads/2018/06/bebegrace.jpg');
                } else if (idade < 21) {
                    img.setAttribute('src', 'https://i1.wp.com/cdn.diarioonline.com.br/img/Artigo-Destaque/530000/jovem_00533252_0_.jpg?xid=1107191');
                } else if (idade < 50) {
                    img.setAttribute('src', 'https://gobiznext.com/wp-content/uploads/2016/12/adulto-header.jpg');
                } else {
                    img.setAttribute('src', 'https://thumbs.dreamstime.com/b/retrato-del-hombre-adulto-6153471.jpg');
                }
            } else if (genero === 'Mulher') {
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'https://planetadelbebe.com/wp-content/uploads/2018/06/bebegrace.jpg');
                } else if (idade < 21) {
                    img.setAttribute('src', 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX7663385.jpg');
                } else if (idade < 50) {
                    img.setAttribute('src', 'https://thumbs.dreamstime.com/b/retrato-de-uma-mulher-adulta-com-sorriso-bonito-88124268.jpg');
                } else {
                    img.setAttribute('src', 'https://araucanianoticias.cl/wp-content/uploads/2016/11/Adulto-Mayor.jpg');
                }
            }
        } else {
            alert('Selecione o sexo!');
            return;
        }

        res.style.textAlign = 'center';
        document.getElementById('idade').innerHTML = idade;
        document.getElementById('genero').innerHTML = genero;
        res.innerHTML = `Gênero: ${genero}, com ${idade} anos de idade`;
        res.appendChild(img);
    }
}
