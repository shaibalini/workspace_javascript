/*basic object usage*/
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
/*use of negation operator*/
var x = 4;
var y = -x;
console.log("value of x: ", x); //outputs 4 
console.log("value of y: ", y); //outputs -4
/*conditional operator*/
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
/*just another f***ing example*/
var num = 5;
if (typeof (num) == 'number') {
    console.log("yeah!!!");
}
