
var arraySabores = [];



$.ajax({
    url:"https://pizzaria.roxo.dev.br/",
    type:"GET",
    success:function(res){
        arraySabores = res;

        for(let i=0;i<res.length;i++){
            console.log(res[i].nome);
            $('.spizzas').append(`<option>${res[i].nome} - R$${res[i].valor}</option>`);
        }
        
    },
    error:function(res){
        alert(`aconteceu um erro :${res}`);
    },
})

$('.addpizza').on("click",function(e){
    const qtdPizza = document.querySelector('.qtdpizza').value;
    $('.tabelaPizza tbody').html("");
    for(let i=1;i<=qtdPizza;i++){
        $('.tabelaPizza tbody').append(`
        <tr>
            <td>PIZZA ${i}</td>
            <td>
                <select></select>
            </td>
        </tr>`
        );
    }
})