window.addEventListener("load", main)

async function main(){
    //affichage du menu
    await displyMenu()
    //affichage du contenu
    for (let i = 0; i < 6; i++) {
        await displayContent()
    }
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
        </ul>
        <footer>
            <p>© 2019 Le container de Panda</p>
        </footer>
    </nav>`
}

//fonction d'affichage du contenu
function displayContent(){
    document.getElementById('grille_acceuil').innerHTML += `
    <div class="blog">
        <h2>Titre de l'article</h2>
        <img src="../image/test.png" alt="image de l'article">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </div>`
}