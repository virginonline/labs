function price(num){
    try{
    var mess = new Array("","$213123", "$21312322", "$2132323", "$1231456");
    var cv=document.getElementById('price');
    cv.value= mess[num];
    } catch(e){
        alert(e.message);
    }
}