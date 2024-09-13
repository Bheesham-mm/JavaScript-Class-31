var getPara = document.getElementsByTagName('p');
// var getParaOne = getPara[0];
// var getParaTwo = getPara[1];
// var getParaThree = getPara[2];
// var getParaFour = getPara[3];
// var getParaFive = getPara[4];
// var getParaSix = getPara[5];

function wrong() {
    for (var i = 0; i < getPara.length; i++) {
        const element = getPara[i];
        if (element.innerHTML === "Four") {
            // console.log(element)
            element.style.background = 'red'
        }
        // console.log(element)
    }
}