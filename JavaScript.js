function relogio() {
    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart(2, "0");   /* função toString inverte as horas */
    //const formatoHoras = 20
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");



    var img = document.getElementById('img1')




    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`; /* é crase `` e não aspas simples''*/

    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-Feira', 'Sábado')

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`;


    if (formatoHoras >= 0 && formatoHoras < 12) { /* tem que repetir a condição formatoHoras */
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"

        img.src = 'https://static.vecteezy.com/ti/vetor-gratis/p1/7569773-figura-palito-com-pasta-icone-de-empresario-desenhado-a-mao-vetor.jpg' 

    } 


    else if (formatoHoras >= 12 && formatoHoras < 18) {
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"

        img.src = 'https://ogimg.infoglobo.com.br/in/11761834-014-177/FT1086A/bonequinho_excelente1.jpg'

    }


    else {
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"

        img.src = 'https://blogdomiltonjung.files.wordpress.com/2018/04/kannemann.gif'
    }
}


setInterval(relogio, 1000);





