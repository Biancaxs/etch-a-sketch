const container = document.querySelector('#container')


function createGrid(n){
    for(let row = 0; row < n; row++){
        for(let column = 0; column < n; column++){
            let div = document.createElement("div")
            div.classList.add("grid")
            // div.style.background="pink"
            // div.style.width=`${960/n}px`
            // div.style.height=`${960/n}px`
            container.appendChild(div)
        }
    }
}

createGrid(16)