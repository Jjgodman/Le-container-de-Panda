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
    fetch(`http://194.31.150.94:3000/api/article/${articleId}`)
    .then(res => res.json())
    .then(data => {affichageArticle(data)})
}

async function affichageArticle(data){
    let content = document.getElementsByClassName('article')[0]
    imageUrl = await getImageUrl(data.image);
    content.innerHTML += `
        <h2>${data.title}</h2>
        <img src="`+imageUrl+`" alt="image de l'article">
        <div class="content">${data.content}</div>`
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


