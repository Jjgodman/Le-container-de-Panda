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

//fonction d'affichage du contenu
function displayContent(){
    let content = document.getElementById('article')
    content.innerHTML += `
    <h2>Titre de l'article</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut. A cras semper auctor neque vitae tempus quam pellentesque. Nunc aliquet bibendum enim facilisis. Turpis massa tincidunt dui ut ornare lectus sit. Nibh venenatis cras sed felis eget velit aliquet sagittis. Amet nisl purus in mollis nunc sed id semper. Cras semper auctor neque vitae tempus quam pellentesque nec. Lacus suspendisse faucibus interdum posuere lorem. Imperdiet dui accumsan sit amet nulla. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Vitae justo eget magna fermentum iaculis. Integer vitae justo eget magna fermentum iaculis. Odio ut sem nulla pharetra. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
    </p><img src="../image/test.png" alt="test"><p>
    Et malesuada fames ac turpis egestas sed. Senectus et netus et malesuada fames ac turpis egestas. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Lorem ipsum dolor sit amet consectetur. Non quam lacus suspendisse faucibus interdum. Iaculis nunc sed augue lacus viverra. Et egestas quis ipsum suspendisse ultrices. Tellus in metus vulputate eu scelerisque. Aliquet nibh praesent tristique magna. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Dui vivamus arcu felis bibendum.
    </p><h3>titre h3 lol</h3><p>
    Imperdiet proin fermentum leo vel. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Eget magna fermentum iaculis eu non diam. Odio tempor orci dapibus ultrices in iaculis. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Id cursus metus aliquam eleifend mi in. Non quam lacus suspendisse faucibus interdum posuere. Porta lorem mollis aliquam ut porttitor leo. Tincidunt id aliquet risus feugiat in ante. Id venenatis a condimentum vitae sapien. Dignissim cras tincidunt lobortis feugiat vivamus. Facilisis magna etiam tempor orci eu lobortis. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Nunc sed id semper risus in hendrerit. Eget aliquet nibh praesent tristique magna. Vitae ultricies leo integer malesuada nunc. Duis ultricies lacus sed turpis.
    
    Pulvinar elementum integer enim neque. Id neque aliquam vestibulum morbi blandit cursus risus. Tellus elementum sagittis vitae et leo. Vitae aliquet nec ullamcorper sit amet risus. Augue interdum velit euismod in pellentesque massa. Auctor neque vitae tempus quam. In tellus integer feugiat scelerisque varius. Tristique magna sit amet purus gravida. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Netus et malesuada fames ac turpis egestas.
    
    At tellus at urna condimentum mattis pellentesque id nibh. Adipiscing elit duis tristique sollicitudin nibh sit. Sed cras ornare arcu dui vivamus arcu. Maecenas sed enim ut sem viverra aliquet eget sit. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Porta lorem mollis aliquam ut porttitor. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Aliquam faucibus purus in massa tempor nec. At consectetur lorem donec massa sapien faucibus et molestie ac. Eget magna fermentum iaculis eu non diam phasellus. Enim sed faucibus turpis in.
    </p>`
}
