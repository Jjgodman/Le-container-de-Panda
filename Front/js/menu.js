window.addEventListener("load", displayMenu)

//fonction d'affichage du menu
function displayMenu(){
    document.getElementById('menu').innerHTML += `
    <nav id="menu">
        <h1>Le container de Panda</h1>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="../html/add.html">add</a></li>
        </ul>
        <footer>
            <p>© 2023 Le container de Panda</p>
        </footer>
    </nav>`
}