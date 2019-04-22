/*basic object usage*/
class Greeting {
    greet(): void {
        console.log("Hello World!!!")
    }
}
var obj = new Greeting();
obj.greet();

/*use of negation operator*/
var x: number = 4
var y = -x;
console.log("value of x: ", x);   //outputs 4 
console.log("value of y: ", y);   //outputs -4

/*conditional operator*/
var num: number = -2
var result = num > 0 ? "positive" : "non-positive"
console.log(result)

/*just another f***ing example*/
var num: number = 5
if (typeof (num) == 'number') {
    console.log("yeah!!!")
}

