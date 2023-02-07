window.addEventListener("load", main)
let images = []

async function main(){
    displayContent()
}

function displayContent(){
    let content = document.getElementById('creation')
    content.innerHTML += `
    <form id="form">
        <label for="title">Titre de l'article</label>
        <input type="text" id="title" name="title" placeholder="Titre de l'article">
        <label for="content">Contenu de l'article</label>
        <input type="file" id="ajout-image">
        <textarea id="content" name="content" placeholder="Contenu de l'article"></textarea>
        <label for="intro">Intro</label>
        <textarea id="intro" name="intro" placeholder="Intro"></textarea>
        <label for="image">Image de l'article</label>
        <input type="file" id="image" name="image">
        <input type="button" value="Valider" id="envoi_form">
    </form>
    `
    if(localStorage.getItem('content')){
        let cache = localStorage.getItem('content')
        document.getElementById('content').value = cache
    }
    if(localStorage.getItem('title')){
        let cache = localStorage.getItem('title')
        document.getElementById('title').value = cache
    }
    if(localStorage.getItem('intro')){
        let cache = localStorage.getItem('intro')
        document.getElementById('intro').value = cache
    }
    document.getElementById('envoi_form').addEventListener('click', submit)
    document.getElementById('ajout-image').addEventListener('change', e => {
        e.preventDefault()
        ajout_image()
    })
}

function submit(){
    let form = document.getElementById('form')
    let formData = new FormData()
    formData.append('title', form.title.value)
    formData.append('content', miseenforme(form.content.value))
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
        localStorage.clear()
        window.location.reload()
    })
}

async function ajout_image() {
    let image = document.getElementById('ajout-image').files[0]
    let formData = new FormData()
    formData.append('image', image, image.name)
    await fetch('http://localhost:3000/api/article/image', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('content').value += "\n"
        let img = miseenformeimage(data.image)
        document.getElementById('content').value += img
        document.getElementById('content').value += "\n"
        localStorage.setItem('content', document.getElementById('content').value)
        localStorage.setItem('title', document.getElementById('title').value)
        localStorage.setItem('intro', document.getElementById('intro').value)
    })
}

function miseenforme(text){
    const lines = text.split("\n");
    let result = "";
    
    for (let line of lines) {
        if (line.startsWith("*")) {
            result += `<h3>${line.substring(1)}</h3>`;
        } else {
            result += `<p>${line}</p>`;
        }
    }
    return result;
}

function miseenformeimage(imagenom){
    let result = `<span><img src="../../Back/images/${imagenom}" alt="ALT DE L'ARTICLE">DESCRIPTION DE L'IMAGE</span>`
    return result
}