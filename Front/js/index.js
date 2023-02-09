window.addEventListener("load", main)

async function main(){
    //affichage du contenu
    await getAllPubli()
}

async function getAllPubli(){
    //récupération des données de la base de donnée
    fetch('http://194.31.150.94:3000/api/article')
    .then(res => res.json())
    .then(data => {
        //affichage des données dans le html
        let content = document.getElementById('grille_acceuil')
        data.forEach(element => {
            let date = new Date(element.date);
            let dateString = date.toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            fetch('http://194.31.150.94:3000/api/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ imageName: 'test.png1675976155479.png' })
            })
            .then(res => res.json())
            .then(data => {
            console.log(data);
            })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            });
            content.innerHTML += `
            <a class="blog" href="../html/article.html?id=${element._id}" >
                <h2>${element.title}</h2>
                <p>${dateString}</p>
                <img src="" alt="image de l'article">
                <p>${element.intro}</p>
            </a>`
        });
    })
}
