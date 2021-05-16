
var arraySabores = [];

$.ajax({
    url: "https://pizzaria.roxo.dev.br/",
    type: "GET",
    success: function (res) {
        // arraySabores = res;
        for (let i = 0; i < res.length; i++) {
            arraySabores.push(`<option>${res[i].nome} - R$ ${res[i].valor}</option>`);
        }

    },
    error: function (res) {
        alert(`aconteceu um erro :${res}`);
    },
})

$('.addpizza').on("click", function (e) {
    const qtdPizza = document.querySelector('.qtdpizza').value;
    $('.tabelaPizza tbody').html("");
    for (let i = 1; i <= qtdPizza; i++) {
        $('.tabelaPizza tbody').append(`
        <tr>
            <td>PIZZA ${i}</td>
            <td>
                <select>${arraySabores.join("")}</select>
            </td>
        </tr>`
        );
    }
})

$('.addR').on("click", function (e) {
    const arrayBolsa = document.querySelectorAll('.tabela select');
    let calc = 0;

    for(let i=0;i<arrayBolsa.length;i++){
        calc += parseFloat(arrayBolsa[i].value.split('$')[1]);
    }
    document.querySelector(".p").innerHTML = `<p>R$ ${calc.toFixed(2)}</p>`;
    
})
