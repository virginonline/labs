function years(){
    x_year = document.getElementById('year');
    x_month = document.getElementById('month');
    x_day = document.getElementById('day');
    year = x_year.value;
    month = x_month.value;
    day = x_day.value; 
    var date = new Date(year, (month - 1), day),
    currentDate = new Date(),
    days = Math.round((currentDate - date)/86400000);
    alert('Я прожил всего ' + days + ' дней');

}