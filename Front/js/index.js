window.addEventListener("load", main)

async function main(){
    //affichage du contenu
    await getAllPubli()
}

async function getAllPubli(){
    //récupération des données de la base de donnée
    fetch('http://194.31.150.94:3000/api/article')
    .then(res => res.json())
    .then(data => {affichageData(data)})
}

async function affichageData(data){
    let content = document.getElementById('grille_acceuil')
    for (let i = 0; i < data.length; i++) {
        let date = new Date(data[i].date);
        let dateString = date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        imageUrl = await getImageUrl(data[i].image);
        content.innerHTML += `
        <a class="blog" href="../html/article.html?id=${data[i]._id}" >
            <h2>${data[i].title}</h2>
            <p>${dateString}</p>
            <img src="`+imageUrl+`" alt="image de l'article">
            <p>${data[i].intro}</p>
        </a>`
    }
}

async function getImage(imageName) {
    try {
        const response = await fetch(`http://194.31.150.94:3000/images/${imageName}`);
        const image = await response.blob();
        return image;
    } 
    catch (error) {
        console.error(error);
    }
}  

async function getImageUrl(imageName) {
    image = await getImage(imageName)
    return URL.createObjectURL(image);
}