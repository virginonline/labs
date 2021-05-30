i = 0;
function showcandle(){
try {
    var text = document.getElementById('texts');
    var img = document.getElementById('candle');
    if(i >=1){
        text.style.display = "block";
        img.style.display = "none";
        i = 0;
    } else{

  text.style.display = "none";
  img.style.display = "block";
  img.style.top = "15%";
  i++;
    }
    } catch (e){
        alert(e.message);
    }
}