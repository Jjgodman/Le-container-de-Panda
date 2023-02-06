window.addEventListener("load", main)

async function main(){
    //affichage du contenu
    displayContent()
}

//fonction d'affichage du contenu
function displayContent(){
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    //récupération des données de la base de donnée
    fetch(`http://localhost:3000/api/article/${articleId}`)
    .then(res => res.json())
    .then(data => {
        //affichage des données dans le html
        let content = document.getElementsByClassName('article')[0]
        content.innerHTML += `
            <h2>${data.title}</h2>
            <img src="${data.image}" alt="image de l'article">
            <div class="content">${data.content}</div>`
        })
}


