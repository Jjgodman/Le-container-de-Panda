window.addEventListener("load", main)

async function main(){
    //affichage du contenu
    displayContent()
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
        <label for="intro">Intro</label>
        <textarea id="intro" name="intro" placeholder="Intro"></textarea>
        <label for="image">Image de l'article</label>
        <input type="file" id="image" name="image">
        <input type="button" value="Valider" id="envoi_form">
    </form>
    `
    //ajout d'un event listener sur le bouton valider
    document.getElementById('envoi_form').addEventListener('click', submit)
}

function submit(){
    let form = document.getElementById('form')
    let formData = new FormData()
    formData.append('title', form.title.value)
    formData.append('content', form.content.value)
    formData.append('image', form.image.files[0], form.image.files[0].name)
    formData.append('intro', form.intro.value)
    let date = new Date()
    formData.append('date', date)
    fetch('http://localhost:3000/api/article', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        window.location.reload()
    })
}
