var var1 = prompt('first number: ', 10);
var var2= prompt('second number: ', 10);

if (var1 > var2) {
    alert(var1 + " is greater than " + var2);
} else if (var1 < var2) {
    alert(var2 + " is greater than " + var1);
} else {
    alert(var1 + " is equal to " + var2);
}


var km = prompt('km: ', 10)
var feet= prompt('feet: ', 10)
var kmConverted = km / 0.305

if (kmConverted > feet) {
    alert(km + " km is greater than " + feet + ' feet');
} else if (kmConverted < feet) {
    alert(km + " km is less than " + feet + ' feet');
} else {
    alert(km + " km equals " + feet + ' feet');
}
