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
    let imageUrl = await getImageUrl(data.image);
    let contentArt=await replaceGetImageUrl(data.content)
    console.log(contentArt);
    content.innerHTML += `
        <h2>${data.title}</h2>
        <img src="`+imageUrl+`" alt="image de l'article">
        <div class="content">`+contentArt+`</div>`
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

async function replaceGetImageUrl(html) {
    let parts = html.split(/(<[^>]*>getImageUrl\(([^)]+)\)[^<]*<[^>]*>)/);
    let replace = "";
    let processed = false;
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        console.log(part);
        if (!processed && part.startsWith("<") && part.endsWith(">") && part.includes("getImageUrl(")) {
            let [, imageName, alt, description] = part.match(/getImageUrl\(([^,]+),\s*"([^"]+)",\s*"([^"]+)"\)/);
            let image = await getImageUrl(imageName);
            replace += `<span><img src="${image}" alt="${alt}" title="${description}">${description}</span>`;
            processed = true;
        }
        else if (!processed) {
            replace += part;
        }
        else {
            processed = false;
        }
    }
    return replace;
}




