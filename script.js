function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultado = "";

    if (campoPesquisa.trim()=== ''){
        section.innerHTML = "";
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(campoPesquisa)|| (dado.tags.toLocaleLowerCase().includes(campoPesquisa))){
            resultado += `
                <div class="item-resultado">
                <div class="resultado-imagem"><img src="images/${dado.imagem}" alt="Imagem de um ${dado.titulo}"></div>
                        <div class="resultado-texto">
                            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                            <div class="textodescricaocard">
                                <p class="descricao-meta">${dado.descricao}</p>
                            </div>
                            <a href="${dado.link}" target="_blank">Saiba mais</a>
                        </div>
                        </div>
            `
        }
    }
    if (resultado == ""){
        section.innerHTML = '<p class="naoencontrado">Nada foi encontrado</p>'
    } else {
        section.innerHTML = resultado;
    }
    

}
