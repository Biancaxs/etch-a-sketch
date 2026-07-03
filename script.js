const container = document.querySelector('#container')
const button = document.querySelector('.btn')

function createGrid(n){

    container.innerHTML = ''

    for(let row = 0; row < n; row++){

        for(let column = 0; column < n; column++){
            let div = document.createElement("div")
            div.classList.add("grid")

            const size = 100 / n;

            div.style.flex = `0 0 ${size}%`;
            div.style.height = `${size}%`;


                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                const colorRGB = `rgb(${r}, ${g}, ${b})`;

                // div.style.backgroundColor = colorRGB;


            div.addEventListener("mouseover", function (e) {
                const changeColor = e.target    
                
                if (changeColor.classList.contains('grid')) {
        
                // changeColor.classList.add('change-color');
                    div.style.backgroundColor = colorRGB;
                    
                }
            })

            container.appendChild(div)
        }
    }
}

button.addEventListener("click", () => {
    const numberOsSquares = prompt("Please enter the number of squares per side for a new grid")

    if (numberOsSquares > 0 && numberOsSquares <= 100){
        createGrid(numberOsSquares)
    } else {
        alert("Choose a number between 1-100")
    }
    
})

createGrid(16)