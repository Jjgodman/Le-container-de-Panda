window.addEventListener("load", main)

async function main(){
    //affichage du menu
    await displyMenu()
    //affichage du contenu
    displayContent()
    
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
            <p>© 2023 Le container de Panda</p>
        </footer>
    </nav>`
}

function displayContent(){
    //formulaire d'ajout d'article
    let content = document.getElementById('creation')
    //ajout du formulaire d'ajout d'article, quand on clique sur le bouton valider cela envoie les données dans la base de donnée via la fonction submit
    content.innerHTML += `
    <form id="form">
        <label for="title">Titre de l'article</label>
        <input type="text" id="title" name="title" placeholder="Titre de l'article">
        <label for="content">Contenu de l'article</label>
        <textarea id="content" name="content" placeholder="Contenu de l'article"></textarea>
        <input type="button" value="Valider" id="envoi_form">
    </form>
    `
    //ajout d'un event listener sur le bouton valider
    document.getElementById('envoi_form').addEventListener('click', submit)
    //rechargement de la page après l'envoie du formulaire
}

function submit(){
    let title = document.getElementById('title').value
    let content = document.getElementById('content').value
    let article = {
        title: title,
        content: content
    }
    fetch('http://localhost:3000/api/article/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
