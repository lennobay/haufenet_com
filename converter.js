import fs from 'fs';

fs.mkdirSync('dist', { recursive: true });
fs.mkdirSync('dist/docs', { recursive: true });
fs.mkdirSync('dist/projects', { recursive: true });


const basic_head_file = ` 
    <div class="header-up">

    <header>
            <div class="header-sub">
                <h2  onclick='window.location = "/"' >haufenet.com</h2>
            </div>
            <div  id="header-options" class="header-sub-options">
               <p onclick='window.location = "/projects"'>Projects</p>
               <p onclick='window.location = "/docs"'>Docs</p>

            </div>
            <div  class="header-sub">
                <h3 onclick='window.location = "https://id.haufenet.com"'>Portal</h3>
                <div id="menubutton-up"> <i style="color: white"  id="menubotton-open" class="fa-solid fa-bars"  onclick="menuopen()"></i> <i style="color:white" class="fa-solid fa-x"  id="menubotton-close" onclick="menuclose()" ></i></div>
            </div>
        </header>
        </div>
          <div id="menu">
        <p>Projects</p>

    </div>`;
const basic_footer_file = `
<div class="footer-up">

        
<footer>


                <a href="/imprint">Imprint</a>
                <p>|</p>
                <a href="/imprint">Privacy</a>
                <p>|</p>
                <a href="https://github.com/lennobay">Created by lennobay</a>
            </footer>
            </div>
`

docs_convertion();

async function docs_convertion() {
    const all_files = fs.readdirSync('post/docs', { recursive: true });
    for (let i = 0; i < all_files.length; i++) {
        const name_sub = all_files[i].split("_");
const  filename = name_sub[2].split(".");
        const temp_data = fs.readFileSync("post/docs/" + all_files[i], 'utf8');
        const temp_data_2 = await temp_data.split("\n")
        let part_1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haufenet | Docs | ${filename[0]}</title>
    <link rel="stylesheet" href="./../../index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <script src="https://kit.fontawesome.com/1e7912d6fc.js" crossorigin="anonymous"></script>

</head>

<body>
`
part_1 += basic_head_file;

part_1 += `




  
    <div class="content">
        <div class="project-special">

            <div class="article-up-up">
                <div class="article-up">
                    <article>

                   `;

        for (let x = 0; x < temp_data_2.length; x++) {
            if (temp_data_2[x].includes("#")) {
                var temp = temp_data_2[x].split("#");
                if (temp.length == 2) {
                    part_1 += `<h1>${temp[1]}</h1>`
                }
                else if (temp.length == 3) {
                    part_1 += `<h2>${temp[2]}</h2>`
                }
                else if (temp.length == 4) {
                    part_1 += `<h3>${temp[3]}</h3>`
                }
            }
            else {
                part_1 += `<p>${temp_data_2[x]}</p>`

            }
        }


        part_1 += ` 

                    </article>
                </div>
            </div>
        </div>`
       part_1  +=basic_footer_file;

       part_1 += `
        

    </div>
    <script src="./../../index.js"></script>

</body>

</html>`

        

        fs.mkdirSync("dist/docs/" + filename[0], {recursive: true});
        fs.writeFileSync("dist/docs/" + filename[0] +   "/index.html", part_1);

    }
}
basic_needs();

async function basic_needs(){
  const data =   fs.readFileSync("index.css", 'utf8');
    fs.writeFileSync("dist/index.css", data);
    fs.writeFileSync("dist/index.js", `function menuopen() {
    document.querySelector(".content").style.display = "none";
    document.querySelector("#menubotton-open").style.display = "none";
    document.querySelector("#menubotton-close").style.display = "unset"

    const button = document.getElementById("menubutton_open")
    document.getElementById("menu").style.display = "unset";



}
function menuclose() {
    document.querySelector(".content").style.display = "unset";
        document.getElementById("menu").style.display = "none";
        document.querySelector("#menubotton-open").style.display = "unset";
    document.querySelector("#menubotton-close").style.display = "none   "

}
`);

}
projects_convertion();

async function projects_convertion() {
    const all_files = fs.readdirSync('post/projects', { recursive: true });
    for (let i = 0; i < all_files.length; i++) {
        const name_sub = all_files[i].split("_");
const  filename = name_sub[2].split(".");
        const temp_data = fs.readFileSync("post/projects/" + all_files[i], 'utf8');
        const temp_data_2 = await temp_data.split("\n")
        let part_1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haufenet | Docs | ${filename[0]}</title>
    <link rel="stylesheet" href="./../../index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <script src="https://kit.fontawesome.com/1e7912d6fc.js" crossorigin="anonymous"></script>

</head>

<body>
`
part_1 += basic_head_file;

part_1 += `




  
    <div class="content">
        <div class="project-special">

            <div class="article-up-up">
                <div class="article-up">
                    <article>

                   `;

        for (let x = 0; x < temp_data_2.length; x++) {
            if (temp_data_2[x].includes("#")) {
                var temp = temp_data_2[x].split("#");
                if (temp.length == 2) {
                    part_1 += `<h1>${temp[1]}</h1>`
                }
                else if (temp.length == 3) {
                    part_1 += `<h2>${temp[2]}</h2>`
                }
                else if (temp.length == 4) {
                    part_1 += `<h3>${temp[3]}</h3>`
                }
            }
            else {
                part_1 += `<p>${temp_data_2[x]}</p>`

            }
        }


        part_1 += ` 

                    </article>
                </div>
            </div>
        </div>`
       part_1  +=basic_footer_file;

       part_1 += `
        

    </div>
    <script src="./../../index.js"></script>

</body>

</html>`

        

        fs.mkdirSync("dist/projects/" + filename[0], {recursive: true});
        fs.writeFileSync("dist/projects/" + filename[0] +   "/index.html", part_1);

    }
}


async function imprint(){
    fs.mkdirSync("dist/imprint", {recursive : true});
    fs.writeFileSync("dist/imprint/index.html", imprin
    )
}

docs_frontpage();
async function docs_frontpage() {
   let part_1 = `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haufenet | Docs </title>
    <link rel="stylesheet" href="./../../index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <script src="https://kit.fontawesome.com/1e7912d6fc.js" crossorigin="anonymous"></script>

</head>

<body>`
    part_1 += basic_head_file;

    part_1 += `<div class="content">`
     const all_files = fs.readdirSync('post/docs', { recursive: true });
    for (let i = 0; i < all_files.length; i++) {
        const name_sub = all_files[i].split("_");
const  filename = name_sub[2].split(".");
        part_1 += `<div class="project-display-frontpage" onclick="window.location.href='/docs/${filename[0]}'" ><h2>${filename[0]}
  </h2>      </div>`    
    }

    part_1 += `</div>`

    part_1 += basic_footer_file;
    part_1 += `
        

    </div>
    <script src="./../../index.js"></script>

</body>

</html>`
fs.writeFileSync("dist/docs/index.html", part_1)
}

projects_frontpage();
async function projects_frontpage() {
   let part_1 = `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haufenet | Docs </title>
    <link rel="stylesheet" href="./../../index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <script src="https://kit.fontawesome.com/1e7912d6fc.js" crossorigin="anonymous"></script>

</head>

<body>`
    part_1 += basic_head_file;

    part_1 += `<div class="content">`
     const all_files = fs.readdirSync('post/projects', { recursive: true });
    for (let i = 0; i < all_files.length; i++) {
        const name_sub = all_files[i].split("_");
const  filename = name_sub[2].split(".");
        part_1 += `<div class="project-display-frontpage" onclick="window.location.href='/projects/${filename[0]}'" ><h2>${filename[0]}
  </h2>      </div>`    
    }

    part_1 += `</div>`

    part_1 += basic_footer_file;
    part_1 += `
        

    </div>
    <script src="./../../index.js"></script>

</body>

</html>`
fs.writeFileSync("dist/projects/index.html", part_1)
}