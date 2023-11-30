function createCell(num){
    const element = document.createElement("div");
    element.classList.add("square");
    element.innerText = num;

    return element;
}

const grid = document.getElementsById("grid");

for(let i = 0; i < 100; i++){
    let square = createCell(i+1);
    
    square.addEventListener("click", function(){
        this.classList.toggle("clicked");
    })

    grid.appendChild(square);
}