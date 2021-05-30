i=0;
function slideshow(){
    try{
    cars = new Array('pic/car1.jpg', 'pic/car2.jpg', 'pic/car3.jpg', 'pic/car4.jpg');
    if (i >= 4)	i = 0;
    r=document.getElementById('slide')
    r.src=cars[i];
    i++;
    } catch(e){
        alert(e.message);
    }
}