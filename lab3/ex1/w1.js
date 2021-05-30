var today = new Date();
var mouth = 
[ 'Января ','Февраля ',
     'Марта ','Апреля ',
     'Мая ','Июня ',
     'Июля ','Августа ',
     'Сентября ','Октября ',
     'Ноября ','Декабря ',];

var wday = 
['понедельник','вторник',
'среда','четверг',
'пятница','суббота',
'воскресенье'];

var y = today.getFullYear();
var d = today.getDate();
var m = today.getMonth();
var w = today.getDay();

document.write("<h1> Сегодня "+ d + " " +  mouth[m]  + y + " года " + wday[w-1] + " </h1>");