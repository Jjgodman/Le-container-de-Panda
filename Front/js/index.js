window.addEventListener("load", main)

async function main(){
    //affichage du menu
    await displyMenu()
    //affichage du contenu
    displayContent()
}

//fonction d'affichage du menu
function displyMenu(){
    console.log('displyMenu');
    //récupération du menu
    let menu = document.getElementById('menu')
    //création du menu
    menu.innerHTML += `
    <footer>
        <p>© 2019 Le container de Panda</p>
    </footer>`
}