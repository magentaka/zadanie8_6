var a = 5;
var b = 3;
var value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value >= 0) {
    console.log("Wynik dodatni");
} else if (value <= 0) {
    console.log("Wynik ujemny");
} else if (value == 0) {
    console.log("Wynik jest równy 0");
} else {
    console.log("Nie podałeś liczby");
}