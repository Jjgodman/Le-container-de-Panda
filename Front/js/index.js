window.addEventListener("load", main)

async function main(){
    //affichage du contenu
    await getAllPubli()
}

function getAllPubli(){
    //récupération des données de la base de donnée
    fetch('http://localhost:3000/api/article')
    .then(res => res.json())
    .then(data => {
        //affichage des données dans le html
        let content = document.getElementById('grille_acceuil')
        data.forEach(element => {
            content.innerHTML += `
            <a class="blog" href="../html/article.html" >
                <h2>${element.title}</h2>
                <img src="${element.image}" alt="image de l'article">
                <p>${element.content}</p>
            </a>`
        });
    })
}
