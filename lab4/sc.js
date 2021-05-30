function biography(){
try{
var t_secondname = document.getElementById('secondname');
var t_name = document.getElementById('name');
var t_patronymic = document.getElementById('patronymic');
var t_year = document.getElementById('year');
var t_city = document.getElementById('city');
var t_favhobby = document.getElementById('fav_hobby');
var t_nlhobby = document.getElementById('nl_hobby');

j_name=t_name.value;
j_secondname = t_secondname.value;
j_patronymic = t_patronymic.value;
j_year = t_year.value;
j_city = t_city.value;
j_favhobby = t_favhobby.value;
j_nlhobby = t_nlhobby.value;

win=window.open("","","width=500,height=500");
win.document.open();
var str = "<h1>О себе!</h1><hr><P>";
win.document.write(str);
aboutme ='<p>Я, '+ j_secondname+ ' ' + j_name + ' ' + j_patronymic + ' родился в ' + j_year + 'году в городе '+ j_city + '.</p>';
hobbies = '<p>Больше всего я люблю ' + j_favhobby + ' и очень не люблю ' + j_nlhobby + '. Было бы замечательно всю жизнь только ' + j_favhobby + ', но к сожалению приходится иногда и '+ j_nlhobby + '.</p>';
win.document.write(aboutme);
win.document.write(hobbies);
str ='<input type="button" value="закрыть"'+'onClick="window.close();">'; 
win.document.write(str);
win.document.close();
} catch(e){
    alert(e.message);
}
}