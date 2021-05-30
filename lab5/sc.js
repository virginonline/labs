function tree(){
    try{

var doge = document.getElementById('doge');
var flowers = document.getElementById('flowers');
var bigdaisy = document.getElementById('bigdaisy');
var maintext = document.getElementById('maintext');
var text = document.getElementById('text');
var text_white = document.getElementById('text_white');
var text_black = document.getElementById('text_black');
var text_blue = document.getElementById('text_blue');
var bg_white = document.getElementById('white');
var bg_black = document.getElementById('black');
var bg_blue = document.getElementById('blue');

if(text_white.checked) vt = 'white'
if(text_black.checked) vt = 'black'
if(text_blue.checked)  vt = 'blue'
if(bg_white.selected)  bgcolor = 'white';
if(bg_black.selected)  bgcolor = 'black';
if(bg_blue.selected)  bgcolor = 'blue';

st1= "<body><h1>";
st3= "</h1><img src=";
st5= " /> <br/><h2>";
st6 = "</h2></body>";

if(doge.checked){
    st2 = maintext.value;
    st7 = text.value;
    st4 = "'pic/dog.jpg'";
} else if(bigdaisy.checked){
    st2 = maintext.value;
    st7 = text.value;
    st4 = "'pic/bigdaisy.jpg'";
} else if (flowers.checked){
    st2 = maintext.value;
    st7 = text.value;
    st4 = "'pic/flowers.jpg'";
}

var win=window.open("","","width=800,height=800"); 
win.document.open();
var style = "<head><style>h2 {color: " + vt + "} body {background-color:  "  + bgcolor + "}  </style></head>";
str= style + st1 + st2 + st3 + st4 + st5 + st7 + st6;
win.document.write(str);
str ='<input type="button" value="закрыть"'+'onClick="window.close();">'; 
win.document.write(str);
win.document.close();
    } catch(e) {
        alert(e);
    }
}
function clear(){
    try{
var maintext = document.getElementById('maintext');
var text = document.getElementById('text');
sv = maintext.value;
sv1 = text.value;
sv = "";
sv1 = "";
    } catch(e){
        alert(e.message);
    }
}