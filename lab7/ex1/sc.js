i = 0;
function frame(){
    try{
        if (i == 3)	i = 0;
    img = document.getElementById('image');
    button = document.getElementById('button');
    i++;
    switch(i){
        case 1:
            img.style.borderColor = "gray";
            button.value = "Нажми меня";
            break;
        case 2:
            img.style.borderColor = "blue";
            button.value = "Надпись на кнопке изменена";
            break;
        case 3:
            img.style.borderColor = "gray";
            button.value = "Надпись на кнопке изменена дважды";
            break;
    }
    } catch(e){
        alert(e.message);
    }
}
