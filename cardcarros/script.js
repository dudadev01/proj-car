let count = 1;
document.getElementById("radio1").checked = true;

//roda de 2 em 2 segundos, chamando a nextImage
setInterval ( function (){
   nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
}
document.getElementById("radio"+count).checked = true;
}
