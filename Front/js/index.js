window.addEventListener("load", main)

async function main(){
    //affichage du menu
    await displyMenu()
    //affichage du contenu
    await displayContent()
}

//fonction d'affichage du menu
function displyMenu(){
    document.getElementById('menu').innerHTML += `
    <nav id="menu">
        <h1>Le container de Panda</h1>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="about.html">A propos</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="../html/add.html">add</a></li>
        </ul>
        <footer>
            <p>© 2023 Le container de Panda</p>
        </footer>
    </nav>`
}

//fonction d'affichage du contenu
function displayContent(){
    let content = document.getElementById('grille_acceuil')
    content.innerHTML += `
    <a class="blog" href="../html/article.html" >
        <h2>Titre de l'article</h2>
        <img src="../image/test.png" alt="image de l'article">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </a>`
    getAllPubli()
}

function getAllPubli(){
    //récupération des données de la base de donnée
    fetch('http://localhost:3000/api/article')
    .then(res => res.json())
    .then(data => {
        console.log('data')
        //affichage des données dans le html
        let content = document.getElementById('grille_acceuil')
        data.forEach(element => {
            content.innerHTML += `
            <a class="blog" href="../html/article.html" >
                <h2>${element.title}</h2>
                <img src="../image/test.png" alt="image de l'article">
                <p>${element.content}</p>
            </a>`
        });
    })
}
