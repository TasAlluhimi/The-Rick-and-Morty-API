

function apiFunction() {
    
    let cont = document.querySelector("#cont");

    const api = 'https://rickandmortyapi.com/api/character';
    
    fetch(api)

    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement("div");
            box.setAttribute("id", "box");
            box.setAttribute("class", "box");
            
            cont.appendChild(box);
            
            let para = document.createElement("p");
            para.setAttribute("id", "para");
            para.setAttribute("class", "para");
            para.innerHTML = data.results[i].name;
            box.appendChild(para);

            let image = document.createElement("img");
            image.setAttribute("id", "img");
            image.setAttribute("class", "img");
            image.setAttribute("src", data.results[i].image);
            box.appendChild(image);

        }
    })
}

apiFunction();