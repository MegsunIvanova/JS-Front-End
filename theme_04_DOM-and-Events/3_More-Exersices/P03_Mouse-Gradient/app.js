function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const resultDiv = document.getElementById("result");
   
    gradient.addEventListener("mousemove", mouseMoveHandler);
    gradient.addEventListener("mouseout", mouseOutHandler);

    function mouseMoveHandler(e) {
        let gradientWidth = gradient.clientWidth;
        //clientWidth is the inner width 
        //(ie. the space inside an element 
        //including padding but excluding borders and scrollbars)
        
        //offsetWidth is the outer width 
        //(ie. the space occupied by the element,
        // including padding and borders)


        let mouseOffsetX = e.offsetX;
        //The offsetX property returns 
        //the relative horizontal coordinate 
        //of the mouse pointer when a mouse event occurs

        let result = Math.floor((mouseOffsetX / gradientWidth) * 100);
        resultDiv.textContent = `${result}%`
    }

    function mouseOutHandler(e) {
        resultDiv.textContent = "";
    }
}