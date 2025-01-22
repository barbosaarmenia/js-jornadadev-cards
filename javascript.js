let listaSeries = [
    {
        "nome": "Fleabag", 
        "img": "img/fleabag.jpg",
        "descricao": "Série de drama/comedia sobre a vida de Fleabag."
    },
    {
        "nome": "Friends", 
        "img": "img/friends.jpg",
        "descricao": "Sitcom que se passa em Nova York e relata a vida dos 6 amigos."
    },
    {
        "nome": "Gilmore Girls", 
        "img": "img/gilmore.jpg",
        "descricao": "Série de drama/comédia que se passa em Stars Hollow e relata a vida de mãe e filha."
    },
    {
        "nome": "The Office", 
        "img": "img/the office.jpg",
        "descricao": "Sitcom que relata o cotidiano de uma repartição que vende papel e a vida de seus personagens."
    },
    {
        "nome": "The Goodplace", 
        "img": "img/the goodplace.jpg",
        "descricao": "Série de drama/comédia que se passa no pós vida e retrata esse jogo de duvidas e novidades."
    },
    {
        "nome": "Superstore", 
        "img": "img/the superstore.jpg",
        "descricao": "Sitcom que relata o cotidiano de uma grande loja que vende (quase) tudo e a vida de seus personagens."
    }
]

// fazendo a lista com o callback
// abre as crases/strings embutidas e cola o card dentro (vindo do html) pra fazer o card dinamico no js

listaSeries.forEach((serie, posicao)=> {
   let cardSerie = document.getElementById("cards");
//    o + antes do = faz aparecer todos os cards dianmicos
   cardSerie.innerHTML += `
            <div class="col-md-4">
                <div class="card n-6">
                    <img src="${serie.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${serie.nome}</h5>
                      <a href="#" class="btn btn-secondary" onclick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
            </div>
   `
})

// pega a posição de cada imagem da array da lista de series colocadas acima pra usar como referencia para o modal
function zoomImg(posicao){
    let serieSelecionada = listaSeries[posicao];
    document.getElementById("nomeSerie").innerHTML = serieSelecionada.nome;
    document.getElementById("descricaoSerie").innerHTML = serieSelecionada.descricao;
    document.getElementById("imgModal").src = serieSelecionada.img;

    new bootstrap.Modal('#zoomImg').show();
}

// função para definir o botão dark/light
// o queryselector seleciona qualquer tiplogia, tag, class, id...
function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    // se a pessoa tiver no site modo dark e clicar, o site fica light e vice versa
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "ligh");
        // mudar também o icone
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
        // mudar de volta pro dark
    }
    else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun-fill"></i>`
    }
}