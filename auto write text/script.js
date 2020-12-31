const text = " Cheeki Breeki Hardbass True Slav 🍺🍺🍺 ";

let index = 0 ;

function writeText () {
    document.body.innerText = text.slice
    (0, index);

    index++;

    if(index > text.length - 1 ){
        index - 0 ;
    }
}

function refreshPage(){
    window.location.reload();
} 

setInterval(writeText, 100);