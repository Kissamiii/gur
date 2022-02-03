document.write("I am  Kissami Gurkhan and My group is CS2123" + '<p>');
var data = new Date();
var current_year = data.getFullYear();
var current_day = data.getDate();
var current_month = data.getMonth();
var monthOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var current_day_of_week = data.getDay();
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var current_hour = data.getHours();
var current_minute = data.getMinutes();
var current_second = data.getSeconds();
var today = new Date();
var univer = new Date(2024, 8, 20); // May be in July we will finish this university
if (today.getFullYear()==2024 && today.getMonth()==6 && today.getDate()>20)
{
univer.setFullYear(univer.getFullYear()+1);
}
var one_day=1000*60*60*24; // here we calculate
document.write("Current day:" + '<p>')
document.write("Year: " + current_year + '<br>')
document.write("Today is : " + dayOfWeek[current_day_of_week] + '<br>')
document.write("Day: " + current_day  + '<br>')
document.write("Month: " + monthOfYear[current_month] + '<br>')
document.write("Current time is : " + current_hour + ' ' + ' : ' + current_minute + ' : ' + current_second + '<p>')
document.write(Math.ceil((univer.getTime()-today.getTime())/(one_day))+  " days left until the freedom!" );
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
